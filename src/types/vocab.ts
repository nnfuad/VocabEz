export type Connotation = 'positive' | 'negative' | 'neutral';
export type PartOfSpeech = 'noun' | 'verb' | 'adjective' | 'adverb';

export interface EnrichedVocabWord {
  id: string; // e.g. "s01-w01"
  word: string;
  set: number;
  number: number;
  definition: string;
  primaryDefinition: string;
  secondaryDefinitions: string[];
  connotation: Connotation;
  partOfSpeech: PartOfSpeech;
  synonyms: string[];
  antonyms: string[];
  sentence: string;
  mnemonic: string;
  root: string;
}

export type PracticeStrategy =
  | 'spaced_repetition'   // SM-2 Review Due
  | 'connotation_math'    // GregMAT +/-/0 Math Strategy
  | 'synonym_pairing'     // GRE Sentence Equivalence twins
  | 'speed_sprint'        // 60-second rapid flash
  | 'hospital_weak'       // Low-accuracy error triage
  | 'set_quiz'            // Specific set quiz
  | 'sentence_completion';// Text Completion blanks
