import enrichedVocabData from '@/data/enrichedVocab.json';
import { EnrichedVocabWord, Connotation, PracticeStrategy } from '@/types/vocab';

export interface QuestionOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation?: string;
}

export interface QuestionItem {
  id: string;
  type: 'multiple_choice' | 'connotation' | 'sentence_blank' | 'pair_match' | 'flashcard';
  targetWord: EnrichedVocabWord;
  prompt: string;
  subPrompt?: string;
  options?: QuestionOption[];
  // For pair matching
  pairs?: { word: string; definition: string }[];
  // For explanation / feedback sheet
  correctAnswerText: string;
  mnemonic: string;
  exampleSentence: string;
  root: string;
}

const allWords: EnrichedVocabWord[] = enrichedVocabData as EnrichedVocabWord[];

function shuffle<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function getAllWords(): EnrichedVocabWord[] {
  return allWords;
}

export function getWordsBySet(setNum: number): EnrichedVocabWord[] {
  return allWords.filter((w) => w.set === setNum);
}

export function getWordsBySets(sets: number[]): EnrichedVocabWord[] {
  return allWords.filter((w) => sets.includes(w.set));
}

export function generateSessionQuestions(params: {
  strategy: PracticeStrategy;
  setNumber?: number;
  customSets?: number[];
  count?: number;
  weakWordIds?: string[];
}): QuestionItem[] {
  const { strategy, setNumber, customSets, count = 10, weakWordIds } = params;

  // Determine eligible word pool
  let pool = allWords;

  if (weakWordIds && weakWordIds.length > 0 && strategy === 'hospital_weak') {
    const weakPool = allWords.filter((w) => weakWordIds.includes(w.id));
    if (weakPool.length > 0) pool = weakPool;
  } else if (setNumber) {
    pool = getWordsBySet(setNumber);
  } else if (customSets && customSets.length > 0) {
    pool = getWordsBySets(customSets);
  }

  if (pool.length === 0) pool = allWords;

  const questions: QuestionItem[] = [];
  const shuffledPool = shuffle(pool);
  const selectedTargets = shuffledPool.slice(0, Math.min(count, shuffledPool.length));

  selectedTargets.forEach((target, index) => {
    const qId = `q-${target.id}-${index}-${Date.now()}`;

    if (strategy === 'connotation_math') {
      // GregMAT Connotation +/-/0 mode
      questions.push({
        id: qId,
        type: 'connotation',
        targetWord: target,
        prompt: target.word,
        subPrompt: `Classify the connotation of "${target.word}" for GRE Math Strategy:`,
        options: [
          { id: 'pos', text: '+ Positive / Laudatory', isCorrect: target.connotation === 'positive' },
          { id: 'neu', text: '0 Neutral / Objective', isCorrect: target.connotation === 'neutral' },
          { id: 'neg', text: '- Negative / Pejorative', isCorrect: target.connotation === 'negative' },
        ],
        correctAnswerText: `${target.connotation.toUpperCase()} (${target.connotation === 'positive' ? '+ Positive' : target.connotation === 'negative' ? '- Negative' : '0 Neutral'})`,
        mnemonic: target.mnemonic,
        exampleSentence: target.sentence,
        root: target.root,
      });
    } else if (strategy === 'sentence_completion') {
      // Sentence completion fill-in-the-blank
      const distractors = shuffle(
        allWords.filter((w) => w.id !== target.id && w.partOfSpeech === target.partOfSpeech)
      ).slice(0, 3);

      const options: QuestionOption[] = shuffle([
        { id: target.id, text: target.word, isCorrect: true },
        ...distractors.map((d) => ({ id: d.id, text: d.word, isCorrect: false })),
      ]);

      questions.push({
        id: qId,
        type: 'sentence_blank',
        targetWord: target,
        prompt: target.sentence,
        subPrompt: 'Select the word that best completes the sentence:',
        options,
        correctAnswerText: target.word,
        mnemonic: target.mnemonic,
        exampleSentence: target.sentence,
        root: target.root,
      });
    } else if (strategy === 'synonym_pairing' && index % 2 === 1) {
      // Synonym pairing / reverse definition
      const distractors = shuffle(allWords.filter((w) => w.id !== target.id)).slice(0, 3);
      const options: QuestionOption[] = shuffle([
        { id: target.id, text: target.word, isCorrect: true },
        ...distractors.map((d) => ({ id: d.id, text: d.word, isCorrect: false })),
      ]);

      questions.push({
        id: qId,
        type: 'multiple_choice',
        targetWord: target,
        prompt: `Which word means:\n"${target.primaryDefinition}"?`,
        subPrompt: 'Select the matching GregMAT headword:',
        options,
        correctAnswerText: target.word,
        mnemonic: target.mnemonic,
        exampleSentence: target.sentence,
        root: target.root,
      });
    } else {
      // Standard Multiple Choice: Word -> Definition
      const distractors = shuffle(
        allWords.filter((w) => w.id !== target.id && (w.set === target.set || w.partOfSpeech === target.partOfSpeech))
      ).slice(0, 3);

      const options: QuestionOption[] = shuffle([
        { id: target.id, text: target.primaryDefinition, isCorrect: true },
        ...distractors.map((d) => ({ id: d.id, text: d.primaryDefinition, isCorrect: false })),
      ]);

      questions.push({
        id: qId,
        type: 'multiple_choice',
        targetWord: target,
        prompt: target.word,
        subPrompt: `What is the definition of "${target.word}"?`,
        options,
        correctAnswerText: target.primaryDefinition,
        mnemonic: target.mnemonic,
        exampleSentence: target.sentence,
        root: target.root,
      });
    }
  });

  return questions;
}
