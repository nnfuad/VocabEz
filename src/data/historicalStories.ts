export interface StoryQuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface StoryQuizQuestion {
  id: string;
  category: 'historical_fact' | 'vocab_in_context';
  targetWord?: string;
  prompt: string;
  options: StoryQuizOption[];
  explanation: string;
}

export interface StoryParagraph {
  id: number;
  subtitle: string;
  text: string;
  targetWords: string[];
}

export interface HistoricalStory {
  setNumber: 1 | 2 | 4 | 5;
  title: string;
  subtitle: string;
  historicalPeriod: string;
  readTimeMinutes: number;
  heroBadge: string;
  introSummary: string;
  keyFigures: { name: string; role: string }[];
  paragraphs: StoryParagraph[];
  allTargetWords: string[];
  questions: StoryQuizQuestion[];
}

export const HISTORICAL_STORIES: Record<1 | 2 | 4 | 5, HistoricalStory> = {
 1: {
  "setNumber": 1,
  "title": "The Twilight of the Republic: Cicero, Caesar, and the Ides of March (44 BCE)",
  "subtitle": "Experience the betrayal, philosophy, and collapse of Roman democracy through all 30 Set 1 vocabulary words.",
  "historicalPeriod": "Ancient Rome \u2022 44 BCE",
  "readTimeMinutes": 5,
  "heroBadge": "The Fall of the Roman Republic",
  "introSummary": "In the spring of 44 BCE, the five-century-old Roman Republic faced its final crisis. Julius Caesar held supreme dictatorial power, while Marcus Tullius Cicero watched in despair and Marcus Junius Brutus plotted in the shadows. This historical narrative weaves together all 30 words of Set 1 to bring the drama of the Ides of March to life.",
  "keyFigures": [
    {
      "name": "Julius Caesar",
      "role": "Dictator Perpetuo whose military genius and ambitions shook Rome"
    },
    {
      "name": "Marcus Tullius Cicero",
      "role": "Philosopher and orator who struggled to save republican liberty"
    },
    {
      "name": "Marcus Junius Brutus",
      "role": "Idealistic senator who led the conspiracy on the Ides of March"
    },
    {
      "name": "Mark Antony",
      "role": "Loyal general whose funeral oration unleashed the mob against the assassins"
    },
    {
      "name": "Cato the Younger",
      "role": "Unbending Stoic champion who died in Utica rather than submit"
    }
  ],
  "paragraphs": [
    {
      "id": 1,
      "subtitle": "An Empire Drunk on Conquest",
      "text": "For nearly five centuries, the Roman Republic had defined itself as an austere society rooted in frugality, civic duty, and the stern rule of law. But in the wake of sweeping conquests across the Mediterranean, immense wealth and ostentatious corruption began to abound in the capital. Rome was no longer a homogeneous community of agrarian patriots; instead, it had fractured into amorphous political factions whose allegiances shifted with every passing bribe.",
      "targetWords": [
        "austere",
        "abound",
        "homogeneous",
        "amorphous"
      ]
    },
    {
      "id": 2,
      "subtitle": "The Conqueror's Purple Robe",
      "text": "Through this turbulent landscape strode Julius Caesar, a conspicuous figure clad in the regal purple robes of a triumphator. His cheerful courtesy seemed to belie the iron resolve that had subdued Gaul and crushed his rival Pompey. While ordinary plebeians hailed him as a champion, traditional patricians viewed his monopolization of power as a daunting crisis that threatened to extinguish four centuries of constitutional liberty.",
      "targetWords": [
        "conspicuous",
        "belie",
        "daunting"
      ]
    },
    {
      "id": 3,
      "subtitle": "Flattery and Sycophancy in the Senate",
      "text": "The Senate floor, once the crucible of fierce republican debate, lost its humdrum legislative routine to groveling spectacles. An obsequious majority of frightened senators voted to grant Caesar supreme honors, with some extremists even proposing to deify the living dictator as an earthly god. Yet Caesar's increasingly capricious governance\u2014appointing magistrates by arbitrary decree and ignoring ancient tribunes\u2014drove proud aristocrats to covert fury.",
      "targetWords": [
        "humdrum",
        "obsequious",
        "deify",
        "capricious"
      ]
    },
    {
      "id": 4,
      "subtitle": "The Orator's Uneasy Silence",
      "text": "Marcus Tullius Cicero, Rome's premier philosopher and orator, watched the unraveling of the Republic with a wary gaze. Renowned as a loquacious speaker who produced didactic treatises urging Romans toward civic virtue, Cicero now chose to remain uncharacteristically taciturn in the Senate, acutely conscious that any unguarded criticism could make him an immediate target of political vengeance.",
      "targetWords": [
        "wary",
        "loquacious",
        "didactic",
        "taciturn"
      ]
    },
    {
      "id": 5,
      "subtitle": "The General and the Spendthrift",
      "text": "Caesar governed with a remarkably cerebral precision, dictating administrative reforms, military logistics, and a revised calendar all at once. In private gatherings, he remained congenial, engaging intellectuals with wit and charm. In contrast, his chief lieutenant, Mark Antony, indulged an infamous proclivity for nocturnal debauchery. Antony was a shameless spendthrift who wasted vast fortunes on banquets and drunken revels that dignified senators dismissed as puerile vulgarities beneath the dignity of high office.",
      "targetWords": [
        "cerebral",
        "congenial",
        "proclivity",
        "spendthrift",
        "puerile"
      ]
    },
    {
      "id": 6,
      "subtitle": "Cato's Final Stand",
      "text": "Far to the south in Utica, Cato the Younger had chosen death by his own sword rather than accept Caesar's pardon. Cato harbored an almost misanthropic disgust toward human venality, believing the Roman elite had become morally diseased. In his final letters, he warned that it was criminally negligent to believe that any autocrat, no matter how gifted, could preserve liberty while ruling alone.",
      "targetWords": [
        "misanthropic",
        "negligent"
      ]
    },
    {
      "id": 7,
      "subtitle": "The Conclave of Conspirators",
      "text": "In the chilly evenings of early March 44 BCE, Gaius Cassius Longinus persuaded Marcus Junius Brutus that a tyrannicide was feasible. Brutus, an earnest student of Plato, was guided by a quixotic dream: he believed that striking down Caesar would instantly resurrect ancestral freedom without causing civic bloodshed. Yet historians now recognize that calling this assassination a restoration of the Republic was a hollow misnomer; the constitutional foundation was already hollowed out.",
      "targetWords": [
        "feasible",
        "quixotic",
        "misnomer"
      ]
    },
    {
      "id": 8,
      "subtitle": "A Fatal Scroll on the Ides of March",
      "text": "On the morning of March 15, as Caesar made his way toward the portico of the Theatre of Pompey, a Greek teacher named Artemidorus pressed a parchment scroll directly into his palm, containing the complete names of the assassins. Preoccupied by pressing petitioners, Caesar gave the document only a cursory glance before handing it away unread\u2014a momentary oversight that sealed his fate.",
      "targetWords": [
        "cursory"
      ]
    },
    {
      "id": 9,
      "subtitle": "Blood on Pompey's Statue",
      "text": "Inside the meeting hall, sixty senators drew concealed daggers, boldly prepared to flout the ancient sacrosanct protection of magistrates. Surrounding Caesar like a pack of wolves, they struck twenty-three times until the dictator collapsed at the base of his former rival Pompey's statue, his purple toga drenched in crimson.",
      "targetWords": [
        "flout"
      ]
    },
    {
      "id": 10,
      "subtitle": "The Spark of Vengeance",
      "text": "The liberators marched into the Forum to disseminate grand proclamations extolling liberty, but their aristocratic speeches struck the common citizens as cold, elitist, and insipid. When Mark Antony climbed the rostra with Caesar's bloody tunic and read the dictator's generous will, he made no effort to placate the grieving crowd. Instead, Antony sparked a wildfire of grief and fury that drove the assassins from Rome, igniting civil wars that culminated in the rise of the Roman Empire under Augustus.",
      "targetWords": [
        "disseminate",
        "insipid",
        "placate"
      ]
    }
  ],
  "allTargetWords": [
    "abound",
    "amorphous",
    "austere",
    "belie",
    "capricious",
    "cerebral",
    "congenial",
    "conspicuous",
    "cursory",
    "daunting",
    "deify",
    "didactic",
    "disseminate",
    "feasible",
    "flout",
    "homogeneous",
    "humdrum",
    "insipid",
    "loquacious",
    "misanthropic",
    "misnomer",
    "negligent",
    "obsequious",
    "placate",
    "proclivity",
    "puerile",
    "quixotic",
    "spendthrift",
    "taciturn",
    "wary"
  ],
  "questions": [
    {
      "id": "s1-hist-1",
      "category": "historical_fact",
      "prompt": "What historical turning point does the narrative of Set 1 portray?",
      "options": [
        {
          "id": "a",
          "text": "The Punic Wars between Rome and Carthage",
          "isCorrect": false
        },
        {
          "id": "b",
          "text": "The assassination of Julius Caesar and collapse of the Roman Republic in 44 BCE",
          "isCorrect": true
        },
        {
          "id": "c",
          "text": "The eruption of Mount Vesuvius in Pompeii",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "The division of the empire under Diocletian",
          "isCorrect": false
        }
      ],
      "explanation": "The story depicts the events of early 44 BCE culminating on the Ides of March (March 15, 44 BCE), when Julius Caesar was assassinated in the Senate."
    },
    {
      "id": "s1-hist-2",
      "category": "historical_fact",
      "prompt": "Why was Marcus Tullius Cicero hesitant and unusually quiet in Caesar's Senate assemblies?",
      "options": [
        {
          "id": "a",
          "text": "He was suffering from a chronic throat ailment",
          "isCorrect": false
        },
        {
          "id": "b",
          "text": "He had retired completely to his country villa in Tusculum",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "He was wary that any open criticism of Caesar could lead to his political execution",
          "isCorrect": true
        },
        {
          "id": "d",
          "text": "He secretly conspired with Mark Antony to seize the treasury",
          "isCorrect": false
        }
      ],
      "explanation": "Cicero, normally a loquacious orator, remained taciturn and wary in Caesar's presence to protect his life during the autocratic regime."
    },
    {
      "id": "s1-hist-3",
      "category": "historical_fact",
      "prompt": "What happened to the warning scroll handed to Caesar by Artemidorus on the Ides of March?",
      "options": [
        {
          "id": "a",
          "text": "Caesar read it aloud and had the assassins arrested on the spot",
          "isCorrect": false
        },
        {
          "id": "b",
          "text": "Caesar gave it only a cursory glance and handed it away unread",
          "isCorrect": true
        },
        {
          "id": "c",
          "text": "It was stolen by Mark Antony before Caesar could touch it",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "It was dropped into the Tiber River by accident",
          "isCorrect": false
        }
      ],
      "explanation": "Historical accounts report that Greek rhetorician Artemidorus handed Caesar a scroll detailing the plot, but Caesar neglected to read it amid the crowd."
    },
    {
      "id": "s1-hist-4",
      "category": "historical_fact",
      "prompt": "Where did the assassination of Julius Caesar actually take place?",
      "options": [
        {
          "id": "a",
          "text": "Inside the Colosseum arena",
          "isCorrect": false
        },
        {
          "id": "b",
          "text": "At the meeting hall in the portico of the Theatre of Pompey",
          "isCorrect": true
        },
        {
          "id": "c",
          "text": "Inside Caesar's private palace on the Palatine Hill",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "At the Temple of Jupiter on the Capitoline",
          "isCorrect": false
        }
      ],
      "explanation": "The Curia Hostilia was under repair; the Senate met in the Curia of Pompey attached to the Theatre of Pompey, where Caesar fell at the base of Pompey's statue."
    },
    {
      "id": "s1-hist-5",
      "category": "historical_fact",
      "prompt": "How did Cato the Younger conclude his resistance against Caesar in Utica?",
      "options": [
        {
          "id": "a",
          "text": "He negotiated a peaceful surrender and returned to Rome",
          "isCorrect": false
        },
        {
          "id": "b",
          "text": "He chose suicide by his own sword rather than accept Caesar's pardon",
          "isCorrect": true
        },
        {
          "id": "c",
          "text": "He fled to Parthia to raise an eastern army",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "He was assassinated by his own centurions",
          "isCorrect": false
        }
      ],
      "explanation": "Cato the Younger, a legendary Stoic, committed suicide in 46 BCE in Utica to prevent Caesar from demonstrating clemency over his republican principles."
    },
    {
      "id": "s1-hist-6",
      "category": "historical_fact",
      "prompt": "What key blunder did the conspirators make after assassinating Caesar?",
      "options": [
        {
          "id": "a",
          "text": "They failed to secure the support of the populace with inspiring appeals and spared Mark Antony",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "They burned down the Forum Romanum by mistake",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "They surrendered immediately to the Praetorian Guard",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "They proclaimed themselves kings of Rome",
          "isCorrect": false
        }
      ],
      "explanation": "Brutus and Cassius spared Antony and issued cold, aristocratic declarations that failed to resonate with the plebeians, who loved Caesar."
    },
    {
      "id": "s1-hist-7",
      "category": "historical_fact",
      "prompt": "How did Mark Antony turn the Roman populace decisively against Caesar's assassins?",
      "options": [
        {
          "id": "a",
          "text": "He hired gladiator mercenaries to hunt down the senators",
          "isCorrect": false
        },
        {
          "id": "b",
          "text": "He displayed Caesar's bloodstained tunic and read his will granting money to each citizen",
          "isCorrect": true
        },
        {
          "id": "c",
          "text": "He crowned himself emperor during the public funeral games",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "He declared martial law and closed the Forum",
          "isCorrect": false
        }
      ],
      "explanation": "Antony delivered an electrifying funeral speech and revealed Caesar's legacy to the citizens, inciting an uncontrollable riot against the conspirators."
    },
    {
      "id": "s1-hist-8",
      "category": "historical_fact",
      "prompt": "What was the ultimate political consequence of the assassination of Caesar?",
      "options": [
        {
          "id": "a",
          "text": "The successful restoration of a peaceful democratic Republic for 200 years",
          "isCorrect": false
        },
        {
          "id": "b",
          "text": "Renewed civil wars leading directly to the establishment of the Roman Empire under Augustus",
          "isCorrect": true
        },
        {
          "id": "c",
          "text": "The immediate collapse of Roman power under Germanic invasions",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "The permanent abolition of the Roman Senate",
          "isCorrect": false
        }
      ],
      "explanation": "Instead of restoring the Republic, the assassination triggered brutal civil wars from which Octavian emerged as Augustus, Rome's first emperor."
    },
    {
      "id": "s1-hist-9",
      "category": "historical_fact",
      "prompt": "Which ancient political idealist was portrayed as believing the Republic would spontaneously recover once the dictator died?",
      "options": [
        {
          "id": "a",
          "text": "Marcus Junius Brutus",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "Gaius Julius Caesar",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "Mark Antony",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "Artemidorus",
          "isCorrect": false
        }
      ],
      "explanation": "Brutus held a high-minded, quixotic philosophical conviction that simply eliminating Caesar was sufficient to restore ancient republican freedom."
    },
    {
      "id": "s1-hist-10",
      "category": "historical_fact",
      "prompt": "What honor were obsequious senators proposing for Caesar prior to his assassination?",
      "options": [
        {
          "id": "a",
          "text": "To deify him as an immortal living god",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "To rename Rome after his family",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "To send him as an ambassador to Egypt",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "To exile all senators who did not own land",
          "isCorrect": false
        }
      ],
      "explanation": "Sycophantic senators sought to deify Caesar, voting to build temples and dedicate statues to him as a living deity, outraging traditionalists."
    },
    {
      "id": "s1-vocab-1",
      "category": "vocab_in_context",
      "targetWord": "austere",
      "prompt": "In paragraph 1, the Roman Republic is described as an 'austere society'. What does 'austere' mean in this context?",
      "options": [
        {
          "id": "a",
          "text": "Obsessed with luxurious foreign feasts and jewels",
          "isCorrect": false
        },
        {
          "id": "b",
          "text": "Severe, strict, simple, and unadorned in morals and lifestyle",
          "isCorrect": true
        },
        {
          "id": "c",
          "text": "Heavily reliant on imported grain and mercenary soldiers",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "Chaotic and lacking any written legal codes",
          "isCorrect": false
        }
      ],
      "explanation": "'Austere' means severe or strict in manner, attitude, or appearance, or having an extremely plain, unadorned lifestyle."
    },
    {
      "id": "s1-vocab-2",
      "category": "vocab_in_context",
      "targetWord": "belie",
      "prompt": "In the sentence: 'His cheerful courtesy seemed to belie the iron resolve that had subdued Gaul...', what is the meaning of 'belie'?",
      "options": [
        {
          "id": "a",
          "text": "To praise publicly in the marketplace",
          "isCorrect": false
        },
        {
          "id": "b",
          "text": "To betray an ally during battle",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "To give a false impression of; contradict or disguise",
          "isCorrect": true
        },
        {
          "id": "d",
          "text": "To reinforce and confirm directly",
          "isCorrect": false
        }
      ],
      "explanation": "'Belie' means to fail to give a true notion or impression of something, or to disguise and contradict the underlying reality."
    },
    {
      "id": "s1-vocab-3",
      "category": "vocab_in_context",
      "targetWord": "obsequious",
      "prompt": "Why are the senators described as 'obsequious' in paragraph 3?",
      "options": [
        {
          "id": "a",
          "text": "They were obedient to an excessive, servile, and fawning degree",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "They had formally declared war on Caesar's legions",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "They refused to speak Latin in public assemblies",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "They were armed with heavy armor on the Senate floor",
          "isCorrect": false
        }
      ],
      "explanation": "'Obsequious' means obedient or attentive to an excessive or servile degree; sycophantic and fawning."
    },
    {
      "id": "s1-vocab-4",
      "category": "vocab_in_context",
      "targetWord": "quixotic",
      "prompt": "The narrative refers to Brutus's dream of effortlessly restoring the Republic as 'quixotic'. What does this imply?",
      "options": [
        {
          "id": "a",
          "text": "It was backed by immense financial gold reserves",
          "isCorrect": false
        },
        {
          "id": "b",
          "text": "It was exceedingly idealistic, unrealistic, and impractical",
          "isCorrect": true
        },
        {
          "id": "c",
          "text": "It was devised by foreign Egyptian astrologers",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "It was completely cynical and devoid of morality",
          "isCorrect": false
        }
      ],
      "explanation": "'Quixotic' means exceedingly idealistic, unrealistic, romanticized, and impractical (derived from Don Quixote)."
    },
    {
      "id": "s1-vocab-5",
      "category": "vocab_in_context",
      "targetWord": "didactic",
      "prompt": "Cicero is noted for writing 'didactic treatises'. What was the primary purpose of these writings?",
      "options": [
        {
          "id": "a",
          "text": "To mock and satirize the Roman gods",
          "isCorrect": false
        },
        {
          "id": "b",
          "text": "To instruct, educate, and impart moral lessons",
          "isCorrect": true
        },
        {
          "id": "c",
          "text": "To record daily accounting balances of merchant ships",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "To conceal confidential battle plans in code",
          "isCorrect": false
        }
      ],
      "explanation": "'Didactic' means intended to teach, particularly in having moral instruction as an ulterior motive."
    },
    {
      "id": "s1-vocab-6",
      "category": "vocab_in_context",
      "targetWord": "loquacious",
      "prompt": "Cicero is contrasted as usually being 'loquacious' but now choosing to be 'taciturn'. What does 'loquacious' mean?",
      "options": [
        {
          "id": "a",
          "text": "Tending to talk a great deal; talkative and communicative",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "Prone to sudden physical violence",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "Greedy for political offices and bribes",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "Deeply religious and observant of rituals",
          "isCorrect": false
        }
      ],
      "explanation": "'Loquacious' means tending to talk a great deal; talkative, wordy, or garrulous."
    },
    {
      "id": "s1-vocab-7",
      "category": "vocab_in_context",
      "targetWord": "placate",
      "prompt": "In the final paragraph, when Antony spoke to the Roman mob, he 'made no effort to placate the crowd'. What does 'placate' mean?",
      "options": [
        {
          "id": "a",
          "text": "To make someone less angry or hostile; appease or soothe",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "To imprison someone without trial",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "To bribe citizens with foreign grain",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "To instruct in public philosophy",
          "isCorrect": false
        }
      ],
      "explanation": "'Placate' means to make someone less angry or hostile; appease, pacify, or mollify."
    },
    {
      "id": "s1-vocab-8",
      "category": "vocab_in_context",
      "targetWord": "flout",
      "prompt": "The assassins were prepared to 'flout the ancient sacrosanct protection of magistrates'. What does 'flout' mean?",
      "options": [
        {
          "id": "a",
          "text": "To openly disregard, defy, or treat with contempt",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "To uphold and protect with armed force",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "To translate into a foreign language",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "To discuss quietly in private committee",
          "isCorrect": false
        }
      ],
      "explanation": "'Flout' means to openly disregard or mock a rule, law, or convention with insolent defiance."
    },
    {
      "id": "s1-vocab-9",
      "category": "vocab_in_context",
      "targetWord": "spendthrift",
      "prompt": "Mark Antony is called a 'shameless spendthrift'. Which behavior exemplifies a spendthrift?",
      "options": [
        {
          "id": "a",
          "text": "Carefully hoarding every denarius in an iron chest",
          "isCorrect": false
        },
        {
          "id": "b",
          "text": "Spending money recklessly and wastefully on luxury and banquets",
          "isCorrect": true
        },
        {
          "id": "c",
          "text": "Investing solely in public road building",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "Refusing to accept political donations",
          "isCorrect": false
        }
      ],
      "explanation": "'Spendthrift' denotes a person who spends money in an extravagant, irresponsible, and wasteful manner; a profligate."
    },
    {
      "id": "s1-vocab-10",
      "category": "vocab_in_context",
      "targetWord": "insipid",
      "prompt": "Why did the conspirators' proclamations sound 'insipid' to the plebeians?",
      "options": [
        {
          "id": "a",
          "text": "They were delivered in rhyming poetry",
          "isCorrect": false
        },
        {
          "id": "b",
          "text": "They were written on expensive parchment",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "They lacked flavor, vigor, passion, and emotional interest",
          "isCorrect": true
        },
        {
          "id": "d",
          "text": "They were shouting too loudly for anyone to comprehend",
          "isCorrect": false
        }
      ],
      "explanation": "'Insipid' means lacking flavor, vigor, interest, or stimulation; dull, bland, and uninspiring."
    }
  ]
},
  2: {
  "setNumber": 2,
  "title": "The Trial of Galileo Galilei: Astronomy, Heresy, and the Shattered Cosmos (1610\u20131633)",
  "subtitle": "Witness the birth of modern science and the clash between empirical truth and papal inquisition through all 30 Set 2 vocabulary words.",
  "historicalPeriod": "Florence & Rome \u2022 1610\u20131633",
  "readTimeMinutes": 6,
  "heroBadge": "The Scientific Revolution & Inquisition",
  "introSummary": "When Galileo Galilei pointed his handmade spyglass toward the night sky in 1610, he saw moons around Jupiter and mountains on the Moon\u2014shattering 1,500 years of Aristotelian physics. His subsequent struggle against Cardinal Bellarmine, Pope Urban VIII, and the Roman Inquisition illustrates the fraught dawn of the Scientific Revolution. All 30 words of Set 2 are embedded directly into this historic trial.",
  "keyFigures": [
    {
      "name": "Galileo Galilei",
      "role": "Tuscan astronomer, physicist, and champion of Copernican heliocentrism"
    },
    {
      "name": "Pope Urban VIII (Maffeo Barberini)",
      "role": "Former patron and intellectual pope whose friendship turned to wrath"
    },
    {
      "name": "Cardinal Robert Bellarmine",
      "role": "Influential Jesuit theologian who delivered the 1616 injunction"
    },
    {
      "name": "Grand Duchess Christina",
      "role": "Tuscan royal to whom Galileo addressed his defense of science and faith"
    },
    {
      "name": "Simplicio",
      "role": "The Aristotelian fictional character whose portrayal incensed the Pope"
    }
  ],
  "paragraphs": [
    {
      "id": 1,
      "subtitle": "The Spyglass of Padua",
      "text": "In the cold winter of 1610 at the University of Padua, Galileo Galilei applied his deft hands to grinding convex and concave lenses. While optical devices produced by northern artisans were merely derivative toys of limited power, Galileo crafted an instrument with thirty-fold magnification. When he turned the cylinder toward the night sky, the celestial spheres shattered: the Moon was not a flawless crystal but a pitted sphere, and four bright moons circled Jupiter in steady orbits.",
      "targetWords": [
        "deft",
        "derivative"
      ]
    },
    {
      "id": 2,
      "subtitle": "The Starry Messenger",
      "text": "Galileo published his findings with breathtaking alacrity in the treatise Sidereus Nuncius. Emboldened by his observations, he resolved to advocate openly for the Copernican model of a Sun-centered universe. To conservative university professors, treating the moving Earth as real seemed like an anachronistic absurdity against Aristotle, yet Galileo believed his telescope would ameliorate human ignorance and revolutionize natural philosophy.",
      "targetWords": [
        "alacrity",
        "advocate",
        "anachronistic",
        "ameliorate"
      ]
    },
    {
      "id": 3,
      "subtitle": "Imperial Ambitions and the Medici Stars",
      "text": "Seeking freedom from mundane teaching, Galileo made an audacious move: he named Jupiter's satellites the Medicean Stars after Grand Duke Cosimo II of Tuscany. Cynics at court whispered that this was a shameless scheme to aggrandize his personal reputation, yet the Medici welcomed him to Florence as Chief Court Mathematician.",
      "targetWords": [
        "audacious",
        "aggrandize"
      ]
    },
    {
      "id": 4,
      "subtitle": "Pulpit Fury in Florence",
      "text": "Traditional academics felt humiliated when students abandoned their banal lectures on medieval physics to debate the new astronomy. In response, conservative friars mounted a vicious diatribe from the pulpit of Santa Maria Novella, accusing Galileo of heresy and claiming his telescope was an unholy contrivance designed to adulterate Catholic doctrine.",
      "targetWords": [
        "banal",
        "diatribe",
        "adulterate"
      ]
    },
    {
      "id": 5,
      "subtitle": "The Letter to Christina",
      "text": "Galileo defended his work in a remarkably candid open letter to the Dowager Grand Duchess Christina. He insisted that the Bible was written to teach how to go to heaven, not how the heavens go, and that poetic scriptural passages must not be construed as literal scientific treatises. He was openly incredulous that ecclesiastical scholars would dismiss verifiable physical phenomena that any person could see with their own eyes.",
      "targetWords": [
        "candid",
        "construe",
        "incredulous"
      ]
    },
    {
      "id": 6,
      "subtitle": "The Injunction of Cardinal Bellarmine",
      "text": "In 1616, Galileo was summoned to Rome before Cardinal Robert Bellarmine. Bellarmine held an ambivalent stance: while he respected Galileo's mathematical genius, he insisted that the Church could only be amenable to heliocentrism if it remained a purely theoretical hypothesis. When Bellarmine formally commanded Galileo to abandon Copernican teaching, the astronomer chose not to demur, bowing politely to ecclesiastical authority with solemn decorum.",
      "targetWords": [
        "ambivalent",
        "amenable",
        "demur",
        "decorum"
      ]
    },
    {
      "id": 7,
      "subtitle": "The Election of the Barberini Pope",
      "text": "For seven years, Galileo observed cautious restraint. But when his long-time admirer Maffeo Barberini became Pope Urban VIII in 1623, the astronomer felt safe once more. Urban VIII was an intellectual who had shown a benign fascination with scientific debate. Galileo harbored the ingenuous belief that the Pope's personal friendship would shield him from inquisitorial scrutiny.",
      "targetWords": [
        "benign",
        "ingenuous"
      ]
    },
    {
      "id": 8,
      "subtitle": "Dialogue of Two World Systems",
      "text": "In 1632, Galileo published his masterpiece, Dialogue Concerning the Two Chief World Systems, written in vibrant vernacular Italian. Crucially, Galileo placed the Pope's favorite philosophical argument into the mouth of a foolish character named Simplicio. Urban VIII interpreted this as a brazen insult to his papal dignity, and his former friendship curdled into caustic indignation.",
      "targetWords": [
        "brazen",
        "caustic"
      ]
    },
    {
      "id": 9,
      "subtitle": "The Web of Calumny",
      "text": "Rival astronomers and avaricious courtiers, who had long wished to covet Galileo's lucrative court salary, seized the moment. They whispered venomous calumny into the Pope's ear, claiming Galileo's mechanistic cosmos would desiccate the faith of the populace and weaken Catholic authority amid the horrors of the Thirty Years' War.",
      "targetWords": [
        "avaricious",
        "covet",
        "calumny",
        "desiccate"
      ]
    },
    {
      "id": 10,
      "subtitle": "The Inquisition's Judgment",
      "text": "In 1633, frail and suffering from failing eyesight, Galileo was hauled before the Roman Inquisition. While craven former colleagues abandoned him in fear of arrest, Inquisitors subjected him to convoluted theological interrogations. Determined to castigate the aging pioneer, the tribunal declared him vehemently suspect of heresy.",
      "targetWords": [
        "craven",
        "convoluted",
        "castigate"
      ]
    },
    {
      "id": 11,
      "subtitle": "And Yet It Moves",
      "text": "On June 22, 1633, on his knees in the church of Santa Maria sopra Minerva, Galileo recited a contrite abjuration, swearing to renounce his Copernican teachings forever. Sentenced to perpetual house arrest in Arcetri, Galileo continued writing until his death, having laid the empirical foundation that would forever overturn the ancient world.",
      "targetWords": [
        "contrite"
      ]
    }
  ],
  "allTargetWords": [
    "adulterate",
    "advocate",
    "aggrandize",
    "alacrity",
    "ambivalent",
    "ameliorate",
    "amenable",
    "anachronistic",
    "audacious",
    "avaricious",
    "banal",
    "benign",
    "brazen",
    "calumny",
    "candid",
    "castigate",
    "caustic",
    "construe",
    "contrite",
    "convoluted",
    "covet",
    "craven",
    "decorum",
    "deft",
    "demur",
    "derivative",
    "desiccate",
    "diatribe",
    "incredulous",
    "ingenuous"
  ],
  "questions": [
    {
      "id": "s2-hist-1",
      "category": "historical_fact",
      "prompt": "What pivotal scientific discovery did Galileo announce in his 1610 book 'Sidereus Nuncius'?",
      "options": [
        {
          "id": "a",
          "text": "The discovery of oxygen in Earth's atmosphere",
          "isCorrect": false
        },
        {
          "id": "b",
          "text": "The existence of Jupiter's orbiting moons and craters on the Moon",
          "isCorrect": true
        },
        {
          "id": "c",
          "text": "The mathematical laws of universal gravitation",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "The circulation of blood in the human body",
          "isCorrect": false
        }
      ],
      "explanation": "Through his improved telescope in 1610, Galileo discovered the four largest moons of Jupiter (Io, Europa, Ganymede, Callisto) and observed that the Moon was mountainous."
    },
    {
      "id": "s2-hist-2",
      "category": "historical_fact",
      "prompt": "Whom did Galileo name Jupiter's newly discovered moons after to gain court patronage?",
      "options": [
        {
          "id": "a",
          "text": "The Medici dynasty (Grand Duke Cosimo II of Tuscany)",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "The Pope and the College of Cardinals",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "King Philip II of Spain",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "Ancient Roman deities",
          "isCorrect": false
        }
      ],
      "explanation": "Galileo strategically christened the Jovian satellites the 'Medicean Stars' after Cosimo II de' Medici, securing his prestigious position as Tuscan Court Philosopher."
    },
    {
      "id": "s2-hist-3",
      "category": "historical_fact",
      "prompt": "What core argument did Galileo advance in his famous 1615 'Letter to the Grand Duchess Christina'?",
      "options": [
        {
          "id": "a",
          "text": "That the Church should immediately excommunicate all non-astronomers",
          "isCorrect": false
        },
        {
          "id": "b",
          "text": "That scriptural poetry should not be construed as literal physical science",
          "isCorrect": true
        },
        {
          "id": "c",
          "text": "That Latin should be banned from all theological schools",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "That the Sun was stationary at the center of a flat Earth",
          "isCorrect": false
        }
      ],
      "explanation": "Galileo famously argued that the Bible teaches 'how to go to heaven, not how heaven goes', meaning scriptural language uses figurative metaphors rather than astronomical laws."
    },
    {
      "id": "s2-hist-4",
      "category": "historical_fact",
      "prompt": "What compromise did Cardinal Robert Bellarmine propose to Galileo during their 1616 meeting?",
      "options": [
        {
          "id": "a",
          "text": "Heliocentrism could be discussed as a mathematical calculation tool, but not as physical truth",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "Galileo must relocate permanently to Spain",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "Galileo had to destroy all his optical lenses in front of the Pope",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "The Inquisition would purchase his telescope for the Vatican library",
          "isCorrect": false
        }
      ],
      "explanation": "Bellarmine ruled that Copernicanism could be entertained strictly as a computational hypothesis (*ex suppositione*) to predict planetary orbits, but not defended as reality."
    },
    {
      "id": "s2-hist-5",
      "category": "historical_fact",
      "prompt": "Why did Pope Urban VIII become personally enraged by Galileo's 1632 'Dialogue Concerning the Two Chief World Systems'?",
      "options": [
        {
          "id": "a",
          "text": "Galileo refused to dedicate the book to the Church",
          "isCorrect": false
        },
        {
          "id": "b",
          "text": "The Pope's favorite philosophical argument was placed into the mouth of the buffoon character 'Simplicio'",
          "isCorrect": true
        },
        {
          "id": "c",
          "text": "The book was published in Germany in German rather than Italian",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "Galileo publicly accused the Pope of financial embezzling",
          "isCorrect": false
        }
      ],
      "explanation": "Urban VIII felt deeply mocked and insulted when his own argument about God's omnipotence was voiced by Simplicio, the dogmatic simpleton in the dialogue."
    },
    {
      "id": "s2-hist-6",
      "category": "historical_fact",
      "prompt": "In what language did Galileo intentionally write his major dialogues instead of scholarly Latin?",
      "options": [
        {
          "id": "a",
          "text": "Vernacular Italian",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "Ancient Greek",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "French",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "Spanish",
          "isCorrect": false
        }
      ],
      "explanation": "By writing in everyday Tuscan Italian rather than Latin, Galileo bypassed the academic gatekeepers to appeal directly to curious educated laypeople across Italy."
    },
    {
      "id": "s2-hist-7",
      "category": "historical_fact",
      "prompt": "Where was Galileo forced to recite his humiliating formal abjuration in June 1633?",
      "options": [
        {
          "id": "a",
          "text": "In the Roman convent church of Santa Maria sopra Minerva",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "At the summit of Saint Peter's Basilica",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "Inside the Leaning Tower of Pisa",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "At the Ducal Palace in Venice",
          "isCorrect": false
        }
      ],
      "explanation": "The Inquisition forced Galileo onto his knees at the Dominican convent of Santa Maria sopra Minerva in Rome to formally renounce his Copernican beliefs."
    },
    {
      "id": "s2-hist-8",
      "category": "historical_fact",
      "prompt": "What penalty did the Roman Inquisition impose on Galileo following his trial in 1633?",
      "options": [
        {
          "id": "a",
          "text": "Execution by burning at the stake like Giordano Bruno",
          "isCorrect": false
        },
        {
          "id": "b",
          "text": "Perpetual house arrest at his villa in Arcetri near Florence",
          "isCorrect": true
        },
        {
          "id": "c",
          "text": "Exile to the New World",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "A brief fine with no loss of liberty",
          "isCorrect": false
        }
      ],
      "explanation": "Galileo was sentenced to perpetual house arrest, spending his final decade confined to his villa 'Il Gioiello' in Arcetri near Florence under ecclesiastical supervision."
    },
    {
      "id": "s2-hist-9",
      "category": "historical_fact",
      "prompt": "What famous defiant phrase does legend attribute to Galileo after he rose from his abjuration?",
      "options": [
        {
          "id": "a",
          "text": "'Veni, vidi, vici'",
          "isCorrect": false
        },
        {
          "id": "b",
          "text": "'Eppur si muove' ('And yet it moves')",
          "isCorrect": true
        },
        {
          "id": "c",
          "text": "'Cogito, ergo sum'",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "'In hoc signo vinces'",
          "isCorrect": false
        }
      ],
      "explanation": "According to famous lore, as Galileo rose from his knees, he stamped his foot and whispered 'Eppur si muove' ('And yet it moves'), asserting that the Earth orbits the Sun regardless of church decrees."
    },
    {
      "id": "s2-hist-10",
      "category": "historical_fact",
      "prompt": "How did traditional university professors react when invited to inspect the telescope in 1610?",
      "options": [
        {
          "id": "a",
          "text": "Many refused to look through the tube, asserting Aristotle's texts were infallible",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "They immediately purchased 100 telescopes for their students",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "They organized a protest in Venice against the glassmakers",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "They abandoned astronomy to study biology",
          "isCorrect": false
        }
      ],
      "explanation": "Entrenched Aristotelian philosophers like Cesare Cremonini notoriously refused to even look through Galileo's telescope, claiming optical illusions or demonic trickery."
    },
    {
      "id": "s2-vocab-1",
      "category": "vocab_in_context",
      "targetWord": "deft",
      "prompt": "Paragraph 1 notes Galileo used his 'deft hands' to grind lenses. What does 'deft' mean here?",
      "options": [
        {
          "id": "a",
          "text": "Trembling and clumsy from extreme age",
          "isCorrect": false
        },
        {
          "id": "b",
          "text": "Skillful, nimble, and quick in manual technique",
          "isCorrect": true
        },
        {
          "id": "c",
          "text": "Rigid and unable to hold fragile instruments",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "Covered in expensive metallic paint",
          "isCorrect": false
        }
      ],
      "explanation": "'Deft' means neatly skillful and quick in one's movements; demonstrating dexterity and adeptness."
    },
    {
      "id": "s2-vocab-2",
      "category": "vocab_in_context",
      "targetWord": "alacrity",
      "prompt": "Galileo published 'Sidereus Nuncius' with 'breathtaking alacrity'. What is the meaning of 'alacrity'?",
      "options": [
        {
          "id": "a",
          "text": "Reluctant hesitation and bureaucratic delay",
          "isCorrect": false
        },
        {
          "id": "b",
          "text": "Brisk and cheerful readiness, speed, and eagerness",
          "isCorrect": true
        },
        {
          "id": "c",
          "text": "Deep sorrow and mourning for lost colleagues",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "Extreme secrecy and covert maneuvering",
          "isCorrect": false
        }
      ],
      "explanation": "'Alacrity' means brisk and cheerful readiness; eager and rapid speed in execution."
    },
    {
      "id": "s2-vocab-3",
      "category": "vocab_in_context",
      "targetWord": "anachronistic",
      "prompt": "To Aristotelian traditionalists, heliocentrism appeared 'anachronistic'. What does this term indicate?",
      "options": [
        {
          "id": "a",
          "text": "Belonging to a different chronological era; out of place in time",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "Derived exclusively from mathematical arithmetic",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "Written in poetic rhymed stanzas",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "Universally accepted by all church leaders",
          "isCorrect": false
        }
      ],
      "explanation": "'Anachronistic' means belonging or appropriate to a period other than that in which it exists; outdated or temporally mismatched."
    },
    {
      "id": "s2-vocab-4",
      "category": "vocab_in_context",
      "targetWord": "ameliorate",
      "prompt": "Galileo believed scientific discoveries would 'ameliorate human ignorance'. What does 'ameliorate' mean?",
      "options": [
        {
          "id": "a",
          "text": "To make something bad or deficient better; improve",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "To deepen and worsen over time",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "To hide from public scrutiny",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "To translate into scholarly Latin",
          "isCorrect": false
        }
      ],
      "explanation": "'Ameliorate' means to make something bad, unsatisfactory, or deficient better; to improve or alleviate."
    },
    {
      "id": "s2-vocab-5",
      "category": "vocab_in_context",
      "targetWord": "audacious",
      "prompt": "Galileo naming Jupiter's moons after the Grand Duke is called an 'audacious move'. What does 'audacious' convey?",
      "options": [
        {
          "id": "a",
          "text": "Showing a willingness to take surprisingly bold risks; daring",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "Timid and excessively fearful of offending others",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "Quiet and meditative in personal habit",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "Carefully audited by professional accountants",
          "isCorrect": false
        }
      ],
      "explanation": "'Audacious' means showing a willingness to take surprisingly bold risks, or showing an impudent lack of respect."
    },
    {
      "id": "s2-vocab-6",
      "category": "vocab_in_context",
      "targetWord": "diatribe",
      "prompt": "Friars in Florence mounted a 'vicious diatribe' against Galileo. What is a 'diatribe'?",
      "options": [
        {
          "id": "a",
          "text": "A forceful and bitter verbal attack against someone",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "A musical performance by church choirs",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "A mathematical proof concerning geometry",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "A diplomatic treaty signed between nations",
          "isCorrect": false
        }
      ],
      "explanation": "'Diatribe' is a forceful and bitter verbal attack or denunciation against someone or something."
    },
    {
      "id": "s2-vocab-7",
      "category": "vocab_in_context",
      "targetWord": "construe",
      "prompt": "Galileo stated that biblical verses must not be 'construed' as literal manuals of physics. What does 'construe' mean?",
      "options": [
        {
          "id": "a",
          "text": "To interpret, translate, or understand the meaning of something in a particular way",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "To erase and delete from library archives",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "To burn publicly in the city square",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "To bind into leather book covers",
          "isCorrect": false
        }
      ],
      "explanation": "'Construe' means to interpret or deduce the meaning of words or actions in a particular way."
    },
    {
      "id": "s2-vocab-8",
      "category": "vocab_in_context",
      "targetWord": "caustic",
      "prompt": "The Pope's feelings turned into 'caustic indignation'. What does 'caustic' mean here?",
      "options": [
        {
          "id": "a",
          "text": "Sarcastic in a scathing, bitter, and biting way; corrosive",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "Gentle, warm, and comforting",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "Puzzled and completely indecisive",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "Joyful and full of celebration",
          "isCorrect": false
        }
      ],
      "explanation": "'Caustic' literally means able to burn or corrode organic tissue; metaphorically it means sarcastic in a scathing, biting, and bitter way."
    },
    {
      "id": "s2-vocab-9",
      "category": "vocab_in_context",
      "targetWord": "calumny",
      "prompt": "Galileo's adversaries spread 'venomous calumny'. What is 'calumny'?",
      "options": [
        {
          "id": "a",
          "text": "Making false, defamatory statements in order to damage someone's reputation; slander",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "Honest constructive feedback given in private",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "Academic peer review by mathematicians",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "Charitable gifts distributed to the poor",
          "isCorrect": false
        }
      ],
      "explanation": "'Calumny' means the making of false and defamatory statements about someone in order to damage their reputation; slander."
    },
    {
      "id": "s2-vocab-10",
      "category": "vocab_in_context",
      "targetWord": "contrite",
      "prompt": "In paragraph 11, Galileo recited a 'contrite abjuration'. What does 'contrite' signify?",
      "options": [
        {
          "id": "a",
          "text": "Feeling or expressing sincere remorse or sorrow for an offense; repentant",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "Defiant and proud of past victories",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "Playful and comedic in tone",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "Completely indifferent and bored",
          "isCorrect": false
        }
      ],
      "explanation": "'Contrite' means feeling or expressing remorse at the recognition that one has done wrong; deeply repentant and apologetic."
    }
  ]
}
,
  4: {
  "setNumber": 4,
  "title": "The Forge of the Republic: Federalists, Anti-Federalists, and the Constitutional Crucible (1787–1791)",
  "subtitle": "Step into the sweltering Assembly Room of Philadelphia and the fiery convention of Richmond as Alexander Hamilton, James Madison, Thomas Jefferson, and Patrick Henry clash over sovereignty, human nature, and the future of self-governance.",
  "historicalPeriod": "1787 – 1791 CE (Constitutional Convention & Ratification)",
  "readTimeMinutes": 10,
  "heroBadge": "American Constitutional History",
  "introSummary": "In the humid summer of 1787, fifty-five delegates gathered in Philadelphia behind locked doors and drawn curtains. The Articles of Confederation were broken, credit was ruined, and Shays' Rebellion had exposed the fragility of an infant nation. Over the next four years, across fierce closed-door debates, brilliant pamphlets signed 'Publius', and electrifying state ratification battles, American thinkers wrestled with a fundamental question: Can human societies establish good government from reflection and choice, or are they forever destined to depend on accident and force?",
  "keyFigures": [
    {
      "name": "James Madison",
      "role": "Virginian delegate, note-taker, and primary architect of the Virginia Plan and Bill of Rights"
    },
    {
      "name": "Alexander Hamilton",
      "role": "New York delegate, champion of energetic federal governance, and co-author of The Federalist Papers"
    },
    {
      "name": "Patrick Henry",
      "role": "Legendary orator and fierce Anti-Federalist leader who boycotted Philadelphia and contested ratification"
    },
    {
      "name": "Benjamin Franklin",
      "role": "Elder statesman and diplomat whose gentle compromises prevented delegates from walking out"
    },
    {
      "name": "Thomas Jefferson",
      "role": "Minister to France whose transatlantic letters insisted upon a bill of rights and term limits"
    }
  ],
  "paragraphs": [
    {
      "id": 1,
      "subtitle": "I. The Impotence of the Old Confederation",
      "text": "By the spring of 1787, the fledgling United States stood near financial paralysis. Under the Articles of Confederation, the national government had no power to levy taxes, regulate commerce, or enforce treaties, rendering the existing compact practically obsolete in the eyes of nationalist reformers. In Massachusetts, destitute war veterans had taken up arms in Shays' Rebellion, an uprising that threatened to enervate the fragile authority of state courts and commercial centers. Across the thirteen sovereign states, conflicting tariffs and disparate currencies bred profound mutual distrust.",
      "targetWords": [
        "obsolete",
        "enervate",
        "disparate"
      ]
    },
    {
      "id": 2,
      "subtitle": "II. The Locked Chamber in Philadelphia",
      "text": "On May 25, 1787, fifty-five men convened in the Pennsylvania State House under a strict oath of secrecy. James Madison of Virginia arrived with trunks of historical treatises on ancient confederacies. With punctilious discipline, Madison positioned himself near the presiding officer, George Washington, recording every word uttered in the chamber. Madison was scrupulous in avoiding partisan bias in his journal, believing the delegates were crafting a paradigmatic charter that would instruct future generations on the architecture of human liberty.",
      "targetWords": [
        "punctilious",
        "scrupulous",
        "paradigmatic"
      ]
    },
    {
      "id": 3,
      "subtitle": "III. The Clashing Plans of Representation",
      "text": "Tension ignited when Edmund Randolph presented the Virginia Plan, calling for proportional representation based on population. Small states recoiled; William Paterson of New Jersey argued that such an arrangement was inimical to the sovereignty of smaller commonwealths. For weeks, delegates appeared ready to vacillate between total dissolution and hollow appeasement. It required the Connecticut Compromise—brokered by Roger Sherman—to mitigate regional acrimony by establishing a House apportioned by population and a Senate of equal state representation.",
      "targetWords": [
        "inimical",
        "vacillate",
        "mitigate"
      ]
    },
    {
      "id": 4,
      "subtitle": "IV. Hamilton's Vision of an Energetic Executive",
      "text": "On June 18, Alexander Hamilton delivered a famous six-hour address that shocked the hall. Speaking with fervid eloquence, the thirty-year-old New Yorker argued that a weak executive invited anarchy. Hamilton proposed an executive and senate elected for life on good behavior, daring to emulate the stability of the British constitutional model while eschewing hereditary titles. Though delegates rejected his extreme plan, Hamilton's core conviction—that energetic government does not destroy liberty but rather serves to invigorate commercial expansion and national defense—became the bedrock of modern federalism.",
      "targetWords": [
        "fervid",
        "emulate",
        "invigorate"
      ]
    },
    {
      "id": 5,
      "subtitle": "V. The Sage of Pennsylvania and the Rising Sun",
      "text": "As arguments grew bitter over slavery and federal commerce powers, eighty-one-year-old Benjamin Franklin acted as the moral anchor of the convention. Possessing a placid demeanor that calmed fiery tempers, Franklin urged delegates to bury their private dogmas. On the convention's final day, September 17, Franklin spoke with characteristic profundity, confessing that while he did not approve of every part of the Constitution, he doubted anyone could make a better one. A prudent leader, he observed, knows when to doubt his own infallibility.",
      "targetWords": [
        "placid",
        "profundity",
        "prudent"
      ]
    },
    {
      "id": 6,
      "subtitle": "VI. The War of the Quill: Publius Takes the Field",
      "text": "Signing the parchment was merely the opening skirmish; ratification required nine states. In New York, where Governor George Clinton opposed the charter, Hamilton enlisted James Madison and John Jay to write a series of newspaper essays under the pseudonym 'Publius'. Their essays were not garrulous diatribes, but systematic, polemical defenses of constitutional republicanism that dismantled Anti-Federalist alarms. Through these eighty-five essays, now known as The Federalist Papers, the authors sought public approbation for a divided, balanced government.",
      "targetWords": [
        "garrulous",
        "polemical",
        "approbation"
      ]
    },
    {
      "id": 7,
      "subtitle": "VII. The Fiery Crucible in Richmond",
      "text": "In June 1788, the decisive ratification battle erupted in Richmond, Virginia. The great revolutionary orator Patrick Henry took the floor, delivering incendiary speeches that condemned the preamble's words 'We the People' as a betrayal of state sovereignty. Henry warned that an imperial president would precipitate tyranny, taxing citizens into servitude. Madison, physically frail and speaking in quiet tones, rebutted each accusation methodically, persuading undecided delegates that they could not abstain from building a stable continental union.",
      "targetWords": [
        "incendiary",
        "precipitate",
        "abstain"
      ]
    },
    {
      "id": 8,
      "subtitle": "VIII. Transatlantic Warnings from Paris",
      "text": "Across the Atlantic, Thomas Jefferson observed the proceedings from his diplomatic post in Paris. Jefferson admired the delegates' intellectual boldness, yet he refused to cherish an unchecked centralized apparatus. In letters to Madison, Jefferson ventured to intimate his grave anxiety: the absence of a explicit bill of rights and the perpetual re-eligibility of the president. Jefferson's letters proved prophetic, correctly foreseeing that free citizens would never trust a central government lacking explicit guarantees for free speech, assembly, and trial by jury.",
      "targetWords": [
        "cherish",
        "intimate",
        "prophetic"
      ]
    },
    {
      "id": 9,
      "subtitle": "IX. Federalist No. 51 and the Science of Factions",
      "text": "To convince skeptics, Madison articulated the deep philosophical framework of the new government in Federalist No. 51. Rather than relying on recondite legal jargon, he laid bare the realities of human self-interest: 'Ambition must be made to counteract ambition.' Critics argued that republican government could only flourish across small territories, but Madison showed that in a large republic, an opaque coalition of factions would neutralize one another. Historical data from ancient Greece and Rome was marshaled to corroborate his revolutionary theory of separated powers.",
      "targetWords": [
        "recondite",
        "opaque",
        "corroborate"
      ]
    },
    {
      "id": 10,
      "subtitle": "X. The Bill of Rights and the Living Compact",
      "text": "To fulfill the promise made to wavering states, Madison drafted twelve constitutional amendments in the First Federal Congress, ten of which were ratified in December 1791 as the Bill of Rights. Rather than indulging pedantic squabbles, Congress acted decisively to protect the liberty of conscience. The American Constitution avoided becoming an ephemeral experiment, providing a tranquil yet adaptable framework that weathered civil war, depression, and global conflict for centuries to come.",
      "targetWords": [
        "pedantic",
        "ephemeral",
        "tranquil"
      ]
    }
  ],
  "allTargetWords": [
    "abstain",
    "approbation",
    "cherish",
    "corroborate",
    "disparate",
    "emulate",
    "enervate",
    "ephemeral",
    "fervid",
    "garrulous",
    "incendiary",
    "inimical",
    "intimate",
    "invigorate",
    "mitigate",
    "obsolete",
    "opaque",
    "paradigmatic",
    "pedantic",
    "placid",
    "polemical",
    "precipitate",
    "profundity",
    "prophetic",
    "prudent",
    "punctilious",
    "recondite",
    "scrupulous",
    "tranquil",
    "vacillate"
  ],
  "questions": [
    {
      "id": "set4-q1",
      "category": "historical_fact",
      "prompt": "Under the Articles of Confederation, which major institutional deficiency prompted nationalist leaders to call for the Constitutional Convention in 1787?",
      "options": [
        {
          "id": "a",
          "text": "The national government lacked the power to tax, enforce treaties, or regulate interstate commerce",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "The executive branch possessed excessive unilateral veto power over the states",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "The Supreme Court had declared all state militias unconstitutional",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "A hereditary monarchy had been established in Virginia",
          "isCorrect": false
        }
      ],
      "explanation": "Under the Articles of Confederation, Congress could not levy taxes directly, regulate interstate or international commerce, or compel states to provide revenue, leading to severe financial paralysis and uprisings like Shays' Rebellion."
    },
    {
      "id": "set4-q2",
      "category": "historical_fact",
      "prompt": "What compromise resolved the bitter dispute between large and small states regarding congressional representation?",
      "options": [
        {
          "id": "a",
          "text": "The Connecticut (Great) Compromise",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "The Missouri Compromise",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "The Treaty of Paris",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "The Three-Fifths Compromise",
          "isCorrect": false
        }
      ],
      "explanation": "Brokered by Roger Sherman and Oliver Ellsworth of Connecticut, the Great Compromise established a bicameral legislature: the House of Representatives apportioned by population, and the Senate with equal representation (two senators per state)."
    },
    {
      "id": "set4-q3",
      "category": "historical_fact",
      "prompt": "Who were the three authors who wrote under the shared pseudonym 'Publius' to produce The Federalist Papers?",
      "options": [
        {
          "id": "a",
          "text": "Alexander Hamilton, James Madison, and John Jay",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "Thomas Jefferson, Patrick Henry, and Samuel Adams",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "George Washington, Benjamin Franklin, and John Adams",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "James Monroe, George Mason, and Thomas Paine",
          "isCorrect": false
        }
      ],
      "explanation": "Hamilton, Madison, and Jay collaborated under the pen name 'Publius' in 1787–1788 to write 85 essays urging the citizens of New York to ratify the new United States Constitution."
    },
    {
      "id": "set4-q4",
      "category": "historical_fact",
      "prompt": "What was Patrick Henry's primary objection to the Constitution during the Virginia Ratification Convention?",
      "options": [
        {
          "id": "a",
          "text": "He feared a consolidated national government and powerful president would usurp state sovereignty and individual liberties",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "He demanded that the capital city be placed in Massachusetts rather than the South",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "He wanted to abolish the Senate and establish direct democratic referendums",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "He objected to creating any federal court system whatsoever",
          "isCorrect": false
        }
      ],
      "explanation": "Patrick Henry warned that the phrase 'We the People' signaled an imperial consolidation of power that would crush state autonomy and potentially degenerate into monarchical tyranny without strong safeguards."
    },
    {
      "id": "set4-q5",
      "category": "historical_fact",
      "prompt": "What key condition did Thomas Jefferson and several state conventions insist upon in exchange for ratifying the Constitution?",
      "options": [
        {
          "id": "a",
          "text": "The addition of a Bill of Rights guaranteeing fundamental individual liberties",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "The complete dissolution of the federal judiciary",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "A constitutional mandate requiring unanimous consent for all foreign treaties",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "The immediate re-institution of British commercial tariffs",
          "isCorrect": false
        }
      ],
      "explanation": "Jefferson and key Anti-Federalist figures insisted that a bill of rights was necessary to protect freedom of religion, speech, assembly, and trial by jury against potential federal overreach."
    },
    {
      "id": "set4-q6",
      "category": "historical_fact",
      "prompt": "What famous principle was articulated by James Madison in Federalist No. 51 to justify checks and balances?",
      "options": [
        {
          "id": "a",
          "text": "'Ambition must be made to counteract ambition'",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "'Give me liberty, or give me death'",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "'No taxation without representation'",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "'A house divided against itself cannot stand'",
          "isCorrect": false
        }
      ],
      "explanation": "In Federalist No. 51, Madison explained that because human beings are flawed, constitutional structures must pit the personal ambitions of leaders in different branches against each other to preserve liberty."
    },
    {
      "id": "set4-q7",
      "category": "historical_fact",
      "prompt": "How many states were required to ratify the Constitution for it to take effect among the agreeing states?",
      "options": [
        {
          "id": "a",
          "text": "Nine out of the thirteen states",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "All thirteen states unanimously",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "Seven out of thirteen states",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "Ten out of thirteen states",
          "isCorrect": false
        }
      ],
      "explanation": "Article VII of the U.S. Constitution stipulated that ratification by conventions of nine states would be sufficient for the establishment of the Constitution between the states so ratifying."
    },
    {
      "id": "set4-q8",
      "category": "historical_fact",
      "prompt": "What was the significance of Benjamin Franklin's observation regarding the sun carved on George Washington's chair at the close of the convention?",
      "options": [
        {
          "id": "a",
          "text": "He concluded it was a rising sun symbolizing the birth of a viable republic, not a setting sun of failure",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "He warned that a solar eclipse would bring bad luck to the new Congress",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "He argued the emblem represented British royal supremacy",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "He asked that the chair be donated to the University of Pennsylvania",
          "isCorrect": false
        }
      ],
      "explanation": "As the last delegates signed the document, Franklin noted that throughout the difficult summer he had wondered whether the painted sun on Washington's chair was rising or setting, but now had the happiness to know it was a rising sun."
    },
    {
      "id": "set4-q9",
      "category": "historical_fact",
      "prompt": "Which armed rebellion in 1786–1787 underscored the weakness of the Articles of Confederation and spurred attendance at the Philadelphia Convention?",
      "options": [
        {
          "id": "a",
          "text": "Shays' Rebellion in western Massachusetts",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "The Whiskey Rebellion in Pennsylvania",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "Nat Turner's Rebellion in Virginia",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "Bacon's Rebellion in colonial Jamestown",
          "isCorrect": false
        }
      ],
      "explanation": "Led by Revolutionary War veteran Daniel Shays, Massachusetts farmers shut down debt courts in 1786, demonstrating that the Confederation Congress had neither funds nor troops to maintain public order."
    },
    {
      "id": "set4-q10",
      "category": "historical_fact",
      "prompt": "When were the first ten amendments (the Bill of Rights) officially ratified by the states?",
      "options": [
        {
          "id": "a",
          "text": "December 1791",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "July 1776",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "September 1787",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "January 1800",
          "isCorrect": false
        }
      ],
      "explanation": "Drafted by James Madison in 1789 to satisfy anti-federalist critics, ten of the proposed amendments received final state ratification on December 15, 1791."
    },
    {
      "id": "set4-q11",
      "category": "vocab_in_context",
      "targetWord": "obsolete",
      "prompt": "In Paragraph 1, the Articles of Confederation were described as 'practically obsolete'. What does 'obsolete' mean in this context?",
      "options": [
        {
          "id": "a",
          "text": "No longer produced or used; out of date and ineffective",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "Revered as sacred and untouchable",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "Wildly popular and universally praised",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "Extremely costly to purchase",
          "isCorrect": false
        }
      ],
      "explanation": "'Obsolete' means out of date or no longer useful, referring to how the Articles of Confederation could no longer govern the nation effectively."
    },
    {
      "id": "set4-q12",
      "category": "vocab_in_context",
      "targetWord": "enervate",
      "prompt": "In Paragraph 1, Shays' Rebellion threatened to 'enervate the fragile authority' of state courts. What is the meaning of 'enervate'?",
      "options": [
        {
          "id": "a",
          "text": "To make someone or something feel drained of energy or vitality; weaken",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "To aggressively expand and fortify",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "To celebrate with high honors",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "To replace through election",
          "isCorrect": false
        }
      ],
      "explanation": "'Enervate' means to weaken, exhaust, or drain of energy and capacity to act."
    },
    {
      "id": "set4-q13",
      "category": "vocab_in_context",
      "targetWord": "punctilious",
      "prompt": "In Paragraph 2, Madison recorded the debates with 'punctilious discipline'. What does 'punctilious' mean?",
      "options": [
        {
          "id": "a",
          "text": "Showing great attention to detail, precision, or correct procedure",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "Careless, rushed, and sloppy",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "Overly loud and boastful",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "Deceitful and evasive",
          "isCorrect": false
        }
      ],
      "explanation": "'Punctilious' means showing great attention to detail or correct behavior; meticulous and precise."
    },
    {
      "id": "set4-q14",
      "category": "vocab_in_context",
      "targetWord": "paradigmatic",
      "prompt": "In Paragraph 2, delegates believed they were crafting a 'paradigmatic charter'. What does 'paradigmatic' signify?",
      "options": [
        {
          "id": "a",
          "text": "Serving as a typical, exemplary, or archetypal model",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "Temporary and intended to be discarded quickly",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "Cryptic and hidden from common understanding",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "Financially ruinous to its creators",
          "isCorrect": false
        }
      ],
      "explanation": "'Paradigmatic' means serving as a standard model, pattern, or exemplary instance of something."
    },
    {
      "id": "set4-q15",
      "category": "vocab_in_context",
      "targetWord": "inimical",
      "prompt": "In Paragraph 3, small states argued proportional representation was 'inimical to the sovereignty of smaller commonwealths'. What does 'inimical' mean?",
      "options": [
        {
          "id": "a",
          "text": "Tending to obstruct, harm, or be hostile toward",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "Deeply supportive and friendly",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "Insignificant and trivial",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "Ancient and historic in origin",
          "isCorrect": false
        }
      ],
      "explanation": "'Inimical' means tending to obstruct or harm; unfavorable, hostile, or adverse."
    },
    {
      "id": "set4-q16",
      "category": "vocab_in_context",
      "targetWord": "vacillate",
      "prompt": "In Paragraph 3, delegates appeared ready to 'vacillate between total dissolution and hollow appeasement'. What does 'vacillate' mean?",
      "options": [
        {
          "id": "a",
          "text": "To waver indecisively between different opinions or actions",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "To march forward with absolute certainty",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "To refuse to speak in public",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "To applaud enthusiastically",
          "isCorrect": false
        }
      ],
      "explanation": "'Vacillate' means to waver between different opinions or courses of action; to be irresolute or indecisive."
    },
    {
      "id": "set4-q17",
      "category": "vocab_in_context",
      "targetWord": "fervid",
      "prompt": "In Paragraph 4, Hamilton spoke with 'fervid eloquence'. What is the meaning of 'fervid'?",
      "options": [
        {
          "id": "a",
          "text": "Intensely enthusiastic, passionate, or burning with zeal",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "Cold, detached, and indifferent",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "Hesitant, stuttering, and nervous",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "Deceptive and fraudulent",
          "isCorrect": false
        }
      ],
      "explanation": "'Fervid' means intensely enthusiastic or passionate, especially to an ardent or burning degree."
    },
    {
      "id": "set4-q18",
      "category": "vocab_in_context",
      "targetWord": "polemical",
      "prompt": "In Paragraph 6, The Federalist Papers were described as 'systematic, polemical defenses'. What does 'polemical' mean?",
      "options": [
        {
          "id": "a",
          "text": "Involving strongly critical, disputatious, or argumentative writing or speech",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "Lyrical and musical in tone",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "Completely neutral and objective",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "Satirical and purely comedic",
          "isCorrect": false
        }
      ],
      "explanation": "'Polemical' relates to or involves a passionate, strongly critical, or disputatious argument attacking an opposing view."
    },
    {
      "id": "set4-q19",
      "category": "vocab_in_context",
      "targetWord": "incendiary",
      "prompt": "In Paragraph 7, Patrick Henry delivered 'incendiary speeches'. In this rhetorical context, what does 'incendiary' mean?",
      "options": [
        {
          "id": "a",
          "text": "Tending to stir up conflict, passion, or intense strife",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "Physically wet and waterlogged",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "Quiet and whispering in volume",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "Humorous and lighthearted",
          "isCorrect": false
        }
      ],
      "explanation": "'Incendiary' metaphorically means tending to inflame passions, stir up conflict, or agitate rebellion."
    },
    {
      "id": "set4-q20",
      "category": "vocab_in_context",
      "targetWord": "ephemeral",
      "prompt": "In Paragraph 10, the Constitution avoided becoming an 'ephemeral experiment'. What does 'ephemeral' mean?",
      "options": [
        {
          "id": "a",
          "text": "Lasting for a very short time; fleeting or transient",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "Perpetual, eternal, and unchanging",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "Complicated and hard to decipher",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "Universally despised by citizens",
          "isCorrect": false
        }
      ],
      "explanation": "'Ephemeral' means lasting for a very brief time; short-lived, transient, or fleeting."
    }
  ]
},
  5: {
  "setNumber": 5,
  "title": "The Divided Sky: Cold War, Stasi Secrets, and the Fall of the Berlin Wall (1961–1990)",
  "subtitle": "Experience the division and peaceful reunification of Germany through the merged eyes of an East Berlin dissident, a Kreuzberg observer, a stunned border guard at Bornholmer Straße, and Chancellor Helmut Kohl.",
  "historicalPeriod": "1961 – 1990 CE (Divided Berlin, Die Wende & Reunification)",
  "readTimeMinutes": 10,
  "heroBadge": "Modern German History",
  "introSummary": "In the dead of night on August 13, 1961, barbed wire unspooled across Berlin, severing families, subways, and streets. For twenty-eight years, the Berlin Wall stood as the most concrete symbol of the Iron Curtain—a 155-kilometer perimeter guarded by watchtowers, attack dogs, and tripwire machine guns. Yet behind the concrete facade, a quiet revolution was germinating. In autumn 1989, candlelit Monday demonstrations in Leipzig, courage in underground churches, and a bureaucratic blunder in an East Berlin press room converged to dismantle the barrier without a single shot fired.",
  "keyFigures": [
    {
      "name": "Harald Jäger",
      "role": "Stasi border lieutenant-colonel on duty at Bornholmer Straße on November 9, 1989"
    },
    {
      "name": "Katrin Weber",
      "role": "East Berlin environmental activist and dissident participating in the Leipzig Monday marches"
    },
    {
      "name": "Günter Schabowski",
      "role": "SED Politburo spokesman whose improvised press conference opened the gates"
    },
    {
      "name": "Helmut Kohl",
      "role": "Chancellor of the Federal Republic of Germany and architect of the Ten-Point Plan for German Unity"
    },
    {
      "name": "Hans-Dietrich Genscher",
      "role": "West German Foreign Minister who championed diplomacy and the Two-Plus-Four Treaty"
    }
  ],
  "paragraphs": [
    {
      "id": 1,
      "subtitle": "I. The Night the Wire Unspooled (August 1961)",
      "text": "In the pre-dawn darkness of August 13, 1961, East German combat groups sealed the border under Operation Rose. Overnight, families became estranged, separated by coils of razor wire that severed Bernauer Straße and Potsdamer Platz. The metallic clangor of pneumatic drills and construction crews echoed across the Spree as concrete cinder blocks rose into a lethal barrier. To Western observers in Kreuzberg, the sudden wall proved that Soviet control was anything but lax; it was a desperate bid to halt the flight of millions fleeing communist rule.",
      "targetWords": [
        "estranged",
        "clangor",
        "lax"
      ]
    },
    {
      "id": 2,
      "subtitle": "II. The Invisible Web of the Stasi",
      "text": "Within the German Democratic Republic (GDR), the Ministry for State Security—the Stasi—constructed an invasive apparatus of domestic surveillance. Operating under Erich Mielke, hundreds of thousands of full-time agents and civilian informants combed mail, wiretapped apartments, and gathered scent samples in glass jars. The state sought to stigmatize any independent intellectual or rock musician who dared question the socialist order, systematically acting to marginalize dissidents through psychological subversion known as 'Zersetzung'.",
      "targetWords": [
        "invasive",
        "stigmatize",
        "marginalize"
      ]
    },
    {
      "id": 3,
      "subtitle": "III. Two Worlds Across the Death Strip",
      "text": "By the 1980s, the physical contrast between the two halves of the city was striking. On the western side of the Wall, West Berlin pulsed with extravagant counterculture, neon billboards on Kurfürstendamm, and avant-garde art scrawled across the concrete face. In contrast, life in East Berlin often felt utilitarian and plodding, marked by lengthy queues for basic goods and the prosaic rhythm of state-allocated Trabant automobiles and prefabricated Plattenbau housing estates.",
      "targetWords": [
        "extravagant",
        "plodding",
        "prosaic"
      ]
    },
    {
      "id": 4,
      "subtitle": "IV. The Monday Prayers: 'Wir sind das Volk!'",
      "text": "In September 1989, dissent found a sanctuary inside Leipzig's Church of St. Nicholas. Pastor Christian Führer opened the sanctuary for weekly peace prayers, which soon spilled onto the Karl Marx Square. A restive population, inspired by Mikhail Gorbachev's glasnost, began chanting 'Wir sind das Volk!' ('We are the people!'). Despite threats of a Tiananmen Square-style crackdown, zealous marchers carried candles with both hands so they could hold no stones, presenting a peaceful, laudable testament to nonviolent resistance that paralyzed security forces.",
      "targetWords": [
        "restive",
        "zealous",
        "laudable"
      ]
    },
    {
      "id": 5,
      "subtitle": "V. The Monolith Begins to Crack",
      "text": "In East Berlin, the imperious leader Erich Honecker boasted that the Wall would stand for another fifty or one hundred years. Yet behind the palace facade, the regime was collapsing. Tens of thousands of East German citizens were fleeing through the newly opened Hungarian border and crowding into West German embassies in Prague. Stunned by the scale of the exodus, the Politburo ousted Honecker, but replacement leaders proved irresolute, unable to resolve the economic rot that continued to undermine the foundation of the state.",
      "targetWords": [
        "imperious",
        "irresolute",
        "undermine"
      ]
    },
    {
      "id": 6,
      "subtitle": "VI. The Press Conference of November 9, 1989",
      "text": "At 6:00 PM on November 9, 1989, Politburo spokesman Günter Schabowski took the podium before international journalists to explain new travel regulations. When Italian journalist Riccardo Ehrman asked an impertinent question about when the travel rules would take effect, an exhausted Schabowski shuffled his notes. He gave an enigmatic, rambling answer before uttering the fateful words: 'Das tritt nach meiner Kenntnis... ist das sofort, unverzüglich' ('To my knowledge... this takes effect immediately, without delay'). The announcement was not frivolous gossip; within minutes, West German television broadcast that the Wall was open.",
      "targetWords": [
        "impertinent",
        "enigmatic",
        "frivolous"
      ]
    },
    {
      "id": 7,
      "subtitle": "VII. The Standoff at Bornholmer Straße",
      "text": "At the Bornholmer Straße border crossing, Lieutenant-Colonel Harald Jäger stared through his command hut window in disbelief. Thousands of shouting East Berliners were surging against the barriers, brandishing their identity cards. Jäger called his superiors at the Ministry of State Security, but high-ranking generals remained aloof, offering no clear orders and refusing responsibility. Facing a weary, overwhelming sea of citizens, Jäger realized that using armed force would result in a bloodbath, leaving the crossing utterly indefensible without lethal carnage.",
      "targetWords": [
        "aloof",
        "weary",
        "utterly"
      ]
    },
    {
      "id": 8,
      "subtitle": "VIII. The Midnight Tsunami of Joy",
      "text": "At 11:30 PM, Jäger made the unilateral decision: 'Open the barrier!' Tens of thousands surged across the bridge into West Berlin in tears, greeted by West Berliners with flowers, chocolate, and champagne. Young 'Mauerspechte' (wall peckers) climbed atop the ramparts at the Brandenburg Gate with panache, dancing in the glare of camera spotlights. The physical boundary was breached, and a discernible sense of euphoria swept across Europe, turning what had seemed a fanciful dream into an undeniable living reality.",
      "targetWords": [
        "panache",
        "discernible",
        "fanciful"
      ]
    },
    {
      "id": 9,
      "subtitle": "IX. The Two-Plus-Four Diplomatic Marathon",
      "text": "Tearing down concrete was fast, but unifying two distinct states required unprecedented diplomacy. Chancellor Helmut Kohl seized the historic moment with his Ten-Point Plan, while Foreign Minister Hans-Dietrich Genscher negotiated with the four Allied victor powers: the United States, the Soviet Union, Britain, and France. Rather than relying on conventional diplomatic slow-walking or piecemeal remedial measures, they worked feverishly to craft the Two-Plus-Four Treaty. They managed to debunk international fears of a resurgent, aggressive Germany by guaranteeing the Polish border and anchoring unified Germany inside NATO.",
      "targetWords": [
        "conventional",
        "debunk",
        "remedial"
      ]
    },
    {
      "id": 10,
      "subtitle": "X. Reunification: The Heterogeneous Nation",
      "text": "On October 3, 1990, less than eleven months after the Wall fell, the German Democratic Republic ceased to exist, and the five eastern states acceded to the Federal Republic. Germany became a heterogeneous nation uniting forty years of starkly divergent economic systems, cultural outlooks, and social memory. Though diminutive in geographic comparison to continental superpowers, the unified Federal Republic overcame sporadic economic friction to become the democratic and industrial pillar of a united Europe.",
      "targetWords": [
        "heterogeneous",
        "diminutive",
        "sporadic"
      ]
    }
  ],
  "allTargetWords": [
    "aloof",
    "clangor",
    "conventional",
    "debunk",
    "diminutive",
    "discernible",
    "enigmatic",
    "estranged",
    "extravagant",
    "fanciful",
    "frivolous",
    "heterogeneous",
    "imperious",
    "impertinent",
    "invasive",
    "irresolute",
    "laudable",
    "lax",
    "marginalize",
    "panache",
    "plodding",
    "prosaic",
    "remedial",
    "restive",
    "sporadic",
    "stigmatize",
    "undermine",
    "utterly",
    "weary",
    "zealous"
  ],
  "questions": [
    {
      "id": "set5-q1",
      "category": "historical_fact",
      "prompt": "On what exact date did East German authorities begin constructing the Berlin Wall (Operation Rose)?",
      "options": [
        {
          "id": "a",
          "text": "August 13, 1961",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "November 9, 1989",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "May 8, 1945",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "October 3, 1990",
          "isCorrect": false
        }
      ],
      "explanation": "In the early morning hours of Sunday, August 13, 1961, East German military, police, and workers closed the sector borders in Berlin and began tearing up streets and stringing barbed wire, known as Operation Rose."
    },
    {
      "id": "set5-q2",
      "category": "historical_fact",
      "prompt": "What was the official name of the East German secret police agency renowned for its extensive domestic surveillance and civilian informants?",
      "options": [
        {
          "id": "a",
          "text": "The Stasi (Ministerium für Staatssicherheit)",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "The Gestapo",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "The KGB",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "The Bundesgrenzschutz",
          "isCorrect": false
        }
      ],
      "explanation": "The Ministry for State Security, commonly called the Stasi, operated one of the most pervasive surveillance and espionage networks in modern history, employing tens of thousands of officers and over 170,000 unofficial collaborators."
    },
    {
      "id": "set5-q3",
      "category": "historical_fact",
      "prompt": "In which East German city did the crucial 1989 Monday Demonstrations for peace and democratic freedom originate?",
      "options": [
        {
          "id": "a",
          "text": "Leipzig (at St. Nicholas Church)",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "Dresden",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "Potsdam",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "Munich",
          "isCorrect": false
        }
      ],
      "explanation": "The Monday Demonstrations began at St. Nicholas Church (Nikolaikirche) in Leipzig under Pastor Christian Führer, growing from small prayer meetings into massive nonviolent protests of hundreds of thousands chanting 'Wir sind das Volk!'."
    },
    {
      "id": "set5-q4",
      "category": "historical_fact",
      "prompt": "What accidental remark by SED spokesman Günter Schabowski at a televised press conference sparked the rush to the Berlin Wall on November 9, 1989?",
      "options": [
        {
          "id": "a",
          "text": "Stating that new private travel regulations took effect 'immediately, without delay'",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "Declaring that the Berlin Wall was to be demolished by dynamite that evening",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "Announcing that East Germany had officially merged with West Germany",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "Ordering the border guards to arrest anyone holding a foreign passport",
          "isCorrect": false
        }
      ],
      "explanation": "When asked by an Italian journalist when the GDR's new travel regulations would take effect, Schabowski improvised from his notes, stating: 'Das tritt nach meiner Kenntnis... ist das sofort, unverzüglich' ('immediately, without delay'), causing thousands to flock to border crossings."
    },
    {
      "id": "set5-q5",
      "category": "historical_fact",
      "prompt": "Which border crossing in Berlin was the very first to open its gates to the crowds on the night of November 9, 1989?",
      "options": [
        {
          "id": "a",
          "text": "Bornholmer Straße",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "Checkpoint Charlie",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "Brandenburg Gate",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "Invalidenstraße",
          "isCorrect": false
        }
      ],
      "explanation": "Under the pressure of thousands of citizens and without clear orders from headquarters, border commander Harald Jäger opened the gates at Bornholmer Straße at approximately 11:30 PM on November 9, 1989."
    },
    {
      "id": "set5-q6",
      "category": "historical_fact",
      "prompt": "What treaty between the two German states and the four Allied powers formally settled the external aspects of German reunification?",
      "options": [
        {
          "id": "a",
          "text": "The Two-Plus-Four Treaty (Treaty on the Final Settlement with Respect to Germany)",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "The Treaty of Versailles",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "The Dayton Agreement",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "The Warsaw Pact Treaty",
          "isCorrect": false
        }
      ],
      "explanation": "Signed in Moscow in September 1990 by the two German states and the Four Powers (USA, USSR, UK, France), the Two-Plus-Four Treaty restored full sovereignty to a united Germany."
    },
    {
      "id": "set5-q7",
      "category": "historical_fact",
      "prompt": "What is the official national holiday celebrated in modern Germany to mark the date of German Reunification in 1990?",
      "options": [
        {
          "id": "a",
          "text": "Tag der Deutschen Einheit (German Unity Day) on October 3",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "Constitution Day on May 23",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "Fall of the Wall Day on November 9",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "Liberation Day on May 8",
          "isCorrect": false
        }
      ],
      "explanation": "Reunification officially took effect on October 3, 1990, which is celebrated as the national holiday 'Tag der Deutschen Einheit' (German Unity Day)."
    },
    {
      "id": "set5-q8",
      "category": "historical_fact",
      "prompt": "Which West German Chancellor famously presented the 'Ten-Point Plan' for overcoming the division of Germany in November 1989?",
      "options": [
        {
          "id": "a",
          "text": "Helmut Kohl",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "Willy Brandt",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "Konrad Adenauer",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "Helmut Schmidt",
          "isCorrect": false
        }
      ],
      "explanation": "On November 28, 1989, Chancellor Helmut Kohl caught the world by surprise when he outlined his Ten-Point Plan to the Bundestag, charting a direct course from confederation to complete German unity."
    },
    {
      "id": "set5-q9",
      "category": "historical_fact",
      "prompt": "What nickname was given to citizens and souvenir hunters who chipped away pieces of the Berlin Wall with hammers and chisels?",
      "options": [
        {
          "id": "a",
          "text": "Mauerspechte (wall peckers)",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "Trabis",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "Ostalgiker",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "Grenzsoldaten",
          "isCorrect": false
        }
      ],
      "explanation": "'Mauerspechte' (wall woodpeckers/peckers) was the popular German term for people who used hammers and chisels to chip off chunks of the painted concrete wall as souvenirs."
    },
    {
      "id": "set5-q10",
      "category": "historical_fact",
      "prompt": "Which neighboring country opened its barbed-wire border with Austria in the summer of 1989, allowing thousands of East Germans to escape to the West?",
      "options": [
        {
          "id": "a",
          "text": "Hungary",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "Poland",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "Romania",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "Yugoslavia",
          "isCorrect": false
        }
      ],
      "explanation": "In May 1989, Hungary began dismantling its electric border fence with Austria, creating the first tear in the Iron Curtain through which tens of thousands of vacationing East Germans escaped."
    },
    {
      "id": "set5-q11",
      "category": "vocab_in_context",
      "targetWord": "clangor",
      "prompt": "In Paragraph 1, the metallic 'clangor' of pneumatic drills echoed across Berlin. What does 'clangor' mean?",
      "options": [
        {
          "id": "a",
          "text": "A continuous loud, resonant banging, clattering, or ringing sound",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "A gentle, melodious flute tune",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "Absolute, dead silence",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "A foul, pungent odor",
          "isCorrect": false
        }
      ],
      "explanation": "'Clangor' denotes a continuous loud, resonant clashing or banging metallic noise."
    },
    {
      "id": "set5-q12",
      "category": "vocab_in_context",
      "targetWord": "estranged",
      "prompt": "In Paragraph 1, overnight families became 'estranged' by coils of razor wire. What does 'estranged' mean in this context?",
      "options": [
        {
          "id": "a",
          "text": "Physically or emotionally separated, alienated, or no longer close",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "Brought closer together in great joy",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "Wealthy beyond imagination",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "Politically elected to high office",
          "isCorrect": false
        }
      ],
      "explanation": "'Estranged' means alienated, distanced, or separated from former close relations or attachments."
    },
    {
      "id": "set5-q13",
      "category": "vocab_in_context",
      "targetWord": "invasive",
      "prompt": "In Paragraph 2, the Stasi constructed an 'invasive apparatus' of surveillance. What does 'invasive' mean?",
      "options": [
        {
          "id": "a",
          "text": "Tending to spread intrusively, undesirably, and harmfully into private life",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "Gentle and completely respectful of boundaries",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "Invisible to the naked eye",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "Cost-free and open source",
          "isCorrect": false
        }
      ],
      "explanation": "'Invasive' describes something that intrudes or spreads aggressively into personal boundaries or private affairs."
    },
    {
      "id": "set5-q14",
      "category": "vocab_in_context",
      "targetWord": "marginalize",
      "prompt": "In Paragraph 2, the state acted to 'marginalize dissidents' through psychological subversion. What does 'marginalize' mean?",
      "options": [
        {
          "id": "a",
          "text": "To treat a person or group as insignificant, powerless, or peripheral",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "To promote someone to a central leadership role",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "To write copious notes in the margins of a book",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "To compensate with financial bonuses",
          "isCorrect": false
        }
      ],
      "explanation": "'Marginalize' means to push someone to the edges of society, treating them as unimportant or without power."
    },
    {
      "id": "set5-q15",
      "category": "vocab_in_context",
      "targetWord": "prosaic",
      "prompt": "In Paragraph 3, daily life in East Berlin had a 'prosaic rhythm'. What is the meaning of 'prosaic'?",
      "options": [
        {
          "id": "a",
          "text": "Lacking poetic beauty; commonplace, unromantic, or mundane",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "Wildly imaginative and thrilling",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "Written entirely in rhyming verse",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "Extremely wealthy and luxurious",
          "isCorrect": false
        }
      ],
      "explanation": "'Prosaic' means ordinary, commonplace, matter-of-fact, or lacking excitement and poetic imagination."
    },
    {
      "id": "set5-q16",
      "category": "vocab_in_context",
      "targetWord": "restive",
      "prompt": "In Paragraph 4, a 'restive population' spilled onto the square in Leipzig. What does 'restive' mean?",
      "options": [
        {
          "id": "a",
          "text": "Unable to remain still, silent, or submissive; restless, impatient, and fidgety",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "Soundly asleep and fully rested",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "Completely obedient and docile",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "Celebratory and partying happily",
          "isCorrect": false
        }
      ],
      "explanation": "'Restive' describes individuals or groups unable to remain still or submissive, especially due to growing dissatisfaction or impatience with control."
    },
    {
      "id": "set5-q17",
      "category": "vocab_in_context",
      "targetWord": "imperious",
      "prompt": "In Paragraph 5, Honecker was described as an 'imperious leader'. What does 'imperious' convey?",
      "options": [
        {
          "id": "a",
          "text": "Arrogant, dictatorial, and domineering",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "Humble, modest, and self-effacing",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "Easily persuaded by subordinates",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "Friendly and jovial in private",
          "isCorrect": false
        }
      ],
      "explanation": "'Imperious' means assuming authority without justification; arrogant, domineering, or dictatorial."
    },
    {
      "id": "set5-q18",
      "category": "vocab_in_context",
      "targetWord": "enigmatic",
      "prompt": "In Paragraph 6, Schabowski gave an 'enigmatic, rambling answer'. What is the meaning of 'enigmatic'?",
      "options": [
        {
          "id": "a",
          "text": "Difficult to interpret or understand; mysterious and cryptic",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "Crystal clear and mathematically precise",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "Extremely humorous and witty",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "Written in elegant calligraphy",
          "isCorrect": false
        }
      ],
      "explanation": "'Enigmatic' means perplexing, mysterious, or difficult to interpret."
    },
    {
      "id": "set5-q19",
      "category": "vocab_in_context",
      "targetWord": "panache",
      "prompt": "In Paragraph 8, young wall peckers danced atop the ramparts with 'panache'. What does 'panache' mean?",
      "options": [
        {
          "id": "a",
          "text": "Flamboyant confidence of style, manner, or flair",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "Great sorrow and solemn grief",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "Stumbling awkwardness and clumsy fear",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "Severe physical exhaustion",
          "isCorrect": false
        }
      ],
      "explanation": "'Panache' refers to a grand, dashing, or flamboyant manner and style; swagger or distinctive flair."
    },
    {
      "id": "set5-q20",
      "category": "vocab_in_context",
      "targetWord": "heterogeneous",
      "prompt": "In Paragraph 10, Germany became a 'heterogeneous nation'. What does 'heterogeneous' mean?",
      "options": [
        {
          "id": "a",
          "text": "Diverse in character or content; composed of varied elements",
          "isCorrect": true
        },
        {
          "id": "b",
          "text": "Completely identical and uniform throughout",
          "isCorrect": false
        },
        {
          "id": "c",
          "text": "Strictly confined to a small island",
          "isCorrect": false
        },
        {
          "id": "d",
          "text": "Unable to produce industrial goods",
          "isCorrect": false
        }
      ],
      "explanation": "'Heterogeneous' describes something composed of parts of different kinds; diverse and varied in composition."
    }
  ]
}
};

export function getHistoricalStory(setNum: number): HistoricalStory | undefined {
  if (setNum === 1 || setNum === 2 || setNum === 4 || setNum === 5) {
    return HISTORICAL_STORIES[setNum as 1 | 2 | 4 | 5];
  }
  return undefined;
}
