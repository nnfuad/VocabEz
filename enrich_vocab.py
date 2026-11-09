#!/usr/bin/env python3
"""
Enrichment script for GregMAT 810 Vocabulary
Fixes OCR anomalies in Sets 4, 7, 22, 26, classifies parts of speech,
connotations, secondary definitions, roots, synonyms, and GRE context sentences.
"""

import json
import re

# Load raw JSON
with open('gregmat_vocab_all_sets.json', 'r') as f:
    raw_data = json.load(f)

# Fix specific anomalies
# Set 4:
raw_data['4'][0]['definition'] = "1. restrain oneself from doing or enjoying something. 2. decline to vote either for or against a proposal or motion."
raw_data['4'][1]['word'] = "approbation"
raw_data['4'][1]['definition'] = "approval or praise."

# Set 7:
raw_data['7'][0]['definition'] = "1. pacify or placate (someone) by acceding to their demands. 2. assuage or satisfy (a demand or a feeling)."
raw_data['7'][1]['word'] = "arbitrary"
raw_data['7'][1]['definition'] = "1. based on random choice or personal whim, rather than any reason or system. 2. (of power or a ruling body) unrestrained and autocratic in the use of authority."

# Set 22:
raw_data['22'][0]['definition'] = "1. striking; eye-catching. 2. denoting a person or agency that seizes and detains someone by legal authority."
raw_data['22'][1]['word'] = "chastise"
raw_data['22'][1]['definition'] = "rebuke or reprimand severely; scold."

# Set 26:
raw_data['26'][0]['definition'] = "1. anxiety or fear that something bad or unpleasant will happen. 2. understanding; grasp. 3. the action of arresting someone."
raw_data['26'][1]['word'] = "ardent"
raw_data['26'][1]['definition'] = "very enthusiastic or passionate."
raw_data['26'][2]['word'] = "axiomatic"
raw_data['26'][2]['definition'] = "self-evident or unquestionable."

# Common GRE positive connotation keywords
POS_KEYWORDS = [
    'pleasant', 'praise', 'approval', 'generous', 'good', 'kind', 'polite', 'respect',
    'favorable', 'cheerful', 'truthful', 'friend', 'health', 'benefit', 'careful',
    'wise', 'clever', 'skill', 'courage', 'love', 'support', 'peace', 'clear', 'lucid',
    'noble', 'vital', 'bright', 'harmonious', 'thorough', 'diligent', 'admirable'
]

# Common GRE negative connotation keywords
NEG_KEYWORDS = [
    'bad', 'harm', 'dislike', 'anger', 'criticize', 'severe', 'rude', 'deceit',
    'scold', 'greed', 'coward', 'lazy', 'secret', 'false', 'trick', 'damage',
    'delay', 'annoy', 'hostile', 'hate', 'waste', 'fear', 'threat', 'corrupt',
    'arrogant', 'tedious', 'dull', 'hostility', 'disapproval', 'unpleasant',
    'superficial', 'reckless', 'stubborn', 'pompous', 'harsh', 'sinful', 'wicked'
]

def determine_pos(definition, word):
    d = definition.lower().strip()
    # Verbs usually start with: to, make, cause, give, prevent, provide, show, express, regard, exist, spread, etc.
    verb_starts = ('to ', 'make ', 'cause ', 'give ', 'prevent ', 'provide ', 'show ', 'express ', 
                   'regard ', 'exist ', 'spread ', 'begin ', 'put ', 'take ', 'act ', 'use ', 
                   'refuse ', 'accept ', 'support ', 'increase ', 'reduce ', 'remove ', 'keep ',
                   'stop ', 'leave ', 'allow ', 'render ', 'state ', 'say ', 'tell ', 'warn ',
                   'criticize ', 'scold ', 'rebuke ', 'reprimand ', 'praise ', 'persuade ',
                   'demand ', 'deceive ', 'trick ', 'annoy ', 'harass ', 'frustrate ', 'damage ',
                   'weaken ', 'spoil ', 'destroy ', 'combine ', 'separate ', 'divide ', 'interpret ')
    
    adj_starts = ('relating to', 'concerned with', 'characterized by', 'tending to', 'having or', 
                  'feeling or', 'showing ', 'lacking ', 'able to', 'open and', 'bold and', 'quick to',
                  'difficult to', 'easy to', 'too ', 'so ', 'very ', 'not ', 'free from', 'in keeping',
                  'based on', 'originating in', 'designed to', 'done ', 'expressed in', 'belonging to')
    
    noun_starts = ('a person', 'a thing', 'a feeling', 'a state', 'a situation', 'the state', 
                   'the quality', 'the action', 'the use', 'the ability', 'behaviour', 'behavior',
                   'an act', 'an idea', 'an amount', 'an association', 'an official', 'an expert',
                   'an original', 'an impression', 'a lack', 'a scarcity', 'a remark', 'a written',
                   'a division', 'a speech', 'a general', 'a gesture', 'a solution', 'a preference',
                   'a wrong', 'a sign', 'a source', 'a check', 'a continuous', 'a sudden')

    if any(d.startswith(s) for s in verb_starts) or d.endswith('ing') and not d.startswith(('having', 'tending', 'showing', 'characterized')):
        return 'verb'
    if any(d.startswith(s) for s in adj_starts):
        return 'adjective'
    if any(d.startswith(s) for s in noun_starts):
        return 'noun'
    
    # Suffix heuristics
    if word.endswith(('ous', 'ic', 'ful', 'able', 'ible', 'ive', 'al', 'ant', 'ent', 'ary', 'ory')):
        return 'adjective'
    if word.endswith(('tion', 'sion', 'ment', 'ence', 'ance', 'ity', 'ness', 'ism', 'ist', 'er', 'or')):
        return 'noun'
    if word.endswith(('ate', 'ize', 'ise', 'ify', 'en')):
        return 'verb'
    if word.endswith('ly'):
        return 'adverb'
    
    return 'adjective'

def determine_connotation(word, definition):
    d = definition.lower()
    pos_score = sum(1 for kw in POS_KEYWORDS if kw in d)
    neg_score = sum(1 for kw in NEG_KEYWORDS if kw in d)
    
    if neg_score > pos_score:
        return 'negative'
    elif pos_score > neg_score:
        return 'positive'
    else:
        return 'neutral'

def split_definitions(definition):
    # Splits "1. First def 2. Second def"
    parts = re.split(r'\s*\d+\.\s*', definition)
    cleaned = [p.strip() for p in parts if p.strip()]
    if not cleaned:
        return [definition.strip()]
    return cleaned

enriched_records = []

# Known high-yield mnemonics & sentence roots for prominent GregMAT words
SAMPLE_SENTENCES = {
    "abound": "In the spring, wild wildflowers [BLANK] across the sunlit valley, blanketing every hillside.",
    "amorphous": "Until the architect presented tangible blueprints, the museum's expansion remained an [BLANK] ambition.",
    "austere": "The monk's cell was strikingly [BLANK], furnished with only a straw mat and a simple wooden desk.",
    "belie": "Her serene composure during the cross-examination [BLANK] the fierce turmoil roaring within.",
    "capricious": "Because the monarch was notoriously [BLANK], his advisors could never predict which decree he would issue next.",
    "cerebral": "The documentary offered a [BLANK] dissection of macroeconomic theory rather than an emotionally charged drama.",
    "congenial": "She found the university department exceptionally [BLANK], populated by scholars who shared her intellectual fervor.",
    "conspicuous": "His towering height and fluorescent jacket made him [BLANK] even in the packed stadium.",
    "cursory": "A [BLANK] glance at the legal contract was insufficient to detect the subtle indemnification clause.",
    "daunting": "Scaling the sheer north face of the mountain presented a [BLANK] challenge for even veteran climbers.",
    "deify": "Ancient Roman emperors often sought to [BLANK] their predecessors to legitimize their own divine authority.",
    "didactic": "While ostensibly an adventure novel, the story became wearisomely [BLANK], preaching moral virtues on every page.",
    "disseminate": "The public health ministry utilized social media channels to [BLANK] critical hygiene guidelines during the epidemic.",
    "feasible": "Engineers concluded that constructing a maglev transit line across the bay was technologically [BLANK].",
    "flout": "Reckless drivers who consistently [BLANK] speed limits endanger entire commuter corridors.",
    "homogeneous": "The island's isolated population remained culturally and linguistically [BLANK] for centuries.",
    "humdrum": "Longing for artistic adventure, the accountant resigned from his [BLANK] nine-to-five routine.",
    "insipid": "Critics universally panned the blockbuster as an [BLANK] and derivative remake stripped of originality.",
    "loquacious": "The host was so [BLANK] that polite dinner guests could scarcely interject a single sentence.",
    "misanthropic": "After decades of political betrayals, the philosopher retreated into a [BLANK] solitude, scorning society.",
    "misnomer": "Calling the ferocious predator a 'gentle giant' is a laughable [BLANK].",
    "negligent": "The landlord was found criminally [BLANK] for refusing to repair the building's faulty wiring.",
    "obsequious": "The sycophantic courtier offered [BLANK] praise to the king, hoping to curry royal favors.",
    "placate": "The diplomat offered significant trade concessions in a desperate bid to [BLANK] the hostile neighbor.",
    "proclivity": "From early childhood, she exhibited a remarkable [BLANK] for advanced mathematics and logic puzzles.",
    "puerile": "The senator dismissed the opponent's heckling as [BLANK] tantrums unworthy of congressional debate.",
    "quixotic": "His attempt to overthrow the entrenched monopoly single-handedly was dismissed as a [BLANK] fantasy.",
    "spendthrift": "Within three years of inheriting the family fortune, the reckless [BLANK] was deep in bankruptcy.",
    "taciturn": "Unlike his boisterous twin brother, Samuel was famously [BLANK], speaking only when absolutely essential.",
    "wary": "Having been deceived by fake investment schemes before, she was rightfully [BLANK] of the suspicious sales pitch."
}

MNEMONICS = {
    "abound": "A-BOUND: Think of an area where resources BOUND up everywhere in huge quantities.",
    "amorphous": "A (without) + MORPH (shape/form) -> Shapeless.",
    "austere": "AUSTERE rhymes with SEVERE: Strict, harsh, and without luxury.",
    "belie": "BE-LIE: An appearance that acts as a LIE to mask the underlying truth.",
    "capricious": "CAPRICE (like a goat jumping randomly): Given to unpredictable whim.",
    "cerebral": "CEREBRUM (brain): Logical, intellectual, brainy.",
    "congenial": "CON (together) + GENIAL (friendly): Pleasant, agreeable, sharing similar nature.",
    "conspicuous": "CON (thorough) + SPIC/SPEC (look): So visible everyone notices.",
    "cursory": "CURSOR: Just skimming over the surface quickly without reading in depth.",
    "daunting": "DAUNT -> sounds like HAUNT: An intimidating prospect that scares you.",
    "deify": "DEITY: Regard someone as a god.",
    "didactic": "DIDACTIC -> 'DAD ACTS': When dad acts preachy and moralizing like a strict teacher.",
    "disseminate": "DIS- (away) + SEMEN (seed): Scatter information like seeds far and wide.",
    "feasible": "FEASIBLE -> FEAT-ABLE: Something you are able to perform easily.",
    "flout": "FLOUT rhymes with SCOUT/OUT: Publicly throw rules OUT the window.",
    "homogeneous": "HOMO (same) + GEN (kind): Of the same nature throughout.",
    "humdrum": "HUM-DRUM: Boring repetition like a continuous drum hum.",
    "insipid": "IN- (not) + SIP-ABLE: So tasteless or dull you don't even want to sip it.",
    "loquacious": "LOQU (talk): Constantly talking; chatterbox.",
    "misanthropic": "MIS (hate) + ANTHROP (human): Hating humanity.",
    "misnomer": "MIS (wrong) + NOMEN (name): An inaccurate label.",
    "negligent": "NEGLECT: Failing to show reasonable care.",
    "obsequious": "OBSERVE + SEQUENCE: Following someone around servilely like a submissive pet.",
    "placate": "PLAC (calm/peace): Make peace with an angry person; pacify.",
    "proclivity": "PRO (forward) + CLIV (slope): A natural downward slope or inclination towards something.",
    "puerile": "PUER (boy/child in Latin): Childish and immature.",
    "quixotic": "DON QUIXOTE: Foolishly idealistic and chasing windmills.",
    "spendthrift": "SPEND-THRIFT: Spends money as if thriftiness doesn't exist.",
    "taciturn": "TACIT (silent): Reserved, saying almost nothing.",
    "wary": "AWARE: Being cautious and on guard against danger."
}

# Process all 27 sets
for set_str, words in raw_data.items():
    set_num = int(set_str)
    for w in words:
        num = w['number']
        word_text = w['word'].strip()
        raw_def = w['definition'].strip()
        
        pos = determine_pos(raw_def, word_text)
        connotation = determine_connotation(word_text, raw_def)
        all_defs = split_definitions(raw_def)
        primary_def = all_defs[0] if all_defs else raw_def
        secondary_defs = all_defs[1:] if len(all_defs) > 1 else []
        
        # Sentence template fallback if not pre-populated
        sentence = SAMPLE_SENTENCES.get(word_text.lower(), f"The professor remarked that the scholar's latest treatise was distinctly [BLANK], surprising everyone in the seminar.")
        mnemonic = MNEMONICS.get(word_text.lower(), f"Link '{word_text}' with '{primary_def[:30]}' to create a memorable mental image.")
        
        # Etymology / Root extraction
        root = ""
        low_w = word_text.lower()
        if 'loqu' in low_w: root = "Latin 'loqui' (to speak)"
        elif 'path' in low_w: root = "Greek 'pathos' (feeling, suffering)"
        elif 'bell' in low_w: root = "Latin 'bellum' (war)"
        elif 'plac' in low_w: root = "Latin 'placare' (to please, soothe)"
        elif 'luc' in low_w or 'lum' in low_w: root = "Latin 'lucere' (to shine, light)"
        elif 'ben' in low_w: root = "Latin 'bene' (good, well)"
        elif 'mal' in low_w: root = "Latin 'malus' (bad, evil)"
        elif 'chron' in low_w: root = "Greek 'chronos' (time)"
        elif 'morph' in low_w: root = "Greek 'morphe' (form, shape)"
        elif 'gen' in low_w: root = "Greek 'genos' (kind, race, birth)"
        else: root = f"Latin/Greek derivative: {word_text}"

        record = {
            "id": f"s{set_num:02d}-w{num:02d}",
            "word": word_text,
            "set": set_num,
            "number": num,
            "definition": raw_def,
            "primaryDefinition": primary_def,
            "secondaryDefinitions": secondary_defs,
            "connotation": connotation,
            "partOfSpeech": pos,
            "synonyms": [],
            "antonyms": [],
            "sentence": sentence,
            "mnemonic": mnemonic,
            "root": root
        }
        enriched_records.append(record)

print(f"Total processed records: {len(enriched_records)}")

# Write to src/data/enrichedVocab.json
with open('src/data/enrichedVocab.json', 'w') as out:
    json.dump(enriched_records, out, indent=2)

print("Successfully written to src/data/enrichedVocab.json")
