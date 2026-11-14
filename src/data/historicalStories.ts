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
  setNumber: 1 | 2;
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


export const HISTORICAL_STORIES: Record<1 | 2, HistoricalStory> = {
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
};

export function getHistoricalStory(setNum: number): HistoricalStory | undefined {
  if (setNum === 1 || setNum === 2) {
    return HISTORICAL_STORIES[setNum as 1 | 2];
  }
  return undefined;
}
