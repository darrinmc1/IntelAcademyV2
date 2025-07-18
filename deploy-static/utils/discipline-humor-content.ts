export interface HumorContent {
  openingHook: string
  funFacts: string[]
  realityChecks: string[]
  professionalTips: string[]
  completionMessages: string[]
  analogies: string[]
  dailyLife: string[]
}

export const disciplineHumor: Record<string, HumorContent> = {
  osint: {
    openingHook:
      "🔍 Welcome to OSINT - where being a professional internet detective is not only legal, it's encouraged! Time to turn your social media stalking skills into a career.",
    funFacts: [
      "OSINT analysts have the most interesting browser history... and the most explaining to do to IT security.",
      "The difference between OSINT and stalking? A badge and a legitimate purpose.",
      "OSINT analysts can find your high school yearbook photo in under 5 minutes. Don't test them.",
      "Google Dorking sounds dirty but it's actually a legitimate research technique.",
      "OSINT analysts are the reason privacy settings exist.",
    ],
    realityChecks: [
      "🎬 Movies: 'Enhance that image!' 📱 Reality: 'This pixel might be a person... or a mailbox.'",
      "🎬 Movies: Instant results from any search 📱 Reality: 47 tabs open, 12 different search engines",
      "🎬 Movies: Hacking into any system 📱 Reality: Spending 3 hours finding a public Facebook profile",
    ],
    professionalTips: [
      "☕ Always have coffee ready - OSINT research can take hours",
      "🔖 Bookmark everything - you'll need it later (trust us)",
      "🕐 Set timers - it's easy to fall down the research rabbit hole",
      "📝 Document your sources - 'I found it somewhere' isn't a citation",
    ],
    completionMessages: [
      "🎉 Congratulations! You're now qualified to professionally stalk... I mean, research!",
      "🏆 Achievement unlocked: Can find anyone's LinkedIn in under 30 seconds!",
      "🎯 You've mastered the art of turning curiosity into intelligence!",
    ],
    analogies: [
      "OSINT is like being a detective, but instead of a magnifying glass, you have Google and way too much coffee.",
      "Think of the internet as a massive library where someone scattered all the books and you need to find the right page.",
      "OSINT analysts are like digital archaeologists, digging through layers of information to find buried treasure.",
    ],
    dailyLife: [
      "Explaining to family that yes, you do get paid to be on social media all day",
      "Having 47 browser tabs open and somehow still knowing what each one is for",
      "Getting excited when you find a new search engine or database",
      "Accidentally researching your friends when you're bored",
    ],
  },

  humint: {
    openingHook:
      "👥 Welcome to HUMINT - where your people skills finally pay off! If you can make friends with a brick wall and remember everyone's birthday, you're already halfway there.",
    funFacts: [
      "HUMINT officers are the only people who can expense a coffee meeting as 'source development.'",
      "The best HUMINT collectors never forget a name, face, or embarrassing story.",
      "HUMINT is 90% listening and 10% pretending you're interested in their cat photos.",
      "A good HUMINT officer can get information from a mime.",
      "HUMINT collectors have the best stories but can never tell them at parties.",
    ],
    realityChecks: [
      "🎬 Movies: Dramatic rooftop meetings 📱 Reality: Coffee shop conversations about the weather",
      "🎬 Movies: Instant trust and cooperation 📱 Reality: Three months of small talk before getting useful info",
      "🎬 Movies: Dangerous double agents 📱 Reality: Bob from accounting who knows about the budget cuts",
    ],
    professionalTips: [
      "🎂 Remember birthdays - it's the fastest way to someone's heart",
      "☕ Master the art of the casual coffee invitation",
      "👂 Listen more than you talk - people love to share",
      "📱 Keep your contact list organized - you'll thank yourself later",
    ],
    completionMessages: [
      "🎉 Congratulations! You're now professionally qualified to be everyone's best friend!",
      "🏆 Achievement unlocked: Can get life stories from strangers in elevators!",
      "🎯 You've mastered the art of making information gathering feel like friendship!",
    ],
    analogies: [
      "HUMINT is like being a professional friend who happens to have an excellent memory for useful details.",
      "Think of yourself as a human Google, but with better conversation skills and more empathy.",
      "HUMINT collectors are like bartenders with security clearances - everyone tells them everything.",
    ],
    dailyLife: [
      "Remembering more about your sources' families than your own",
      "Having the most diverse contact list in your phone",
      "Being genuinely interested in everyone's problems",
      "Accidentally collecting intelligence at family gatherings",
    ],
  },

  sigint: {
    openingHook:
      "📡 Welcome to SIGINT - where we turn radio static into intelligence gold! If you can hear patterns in white noise and speak fluent acronym, you're in the right place.",
    funFacts: [
      "SIGINT analysts can identify a radio by its electronic signature like a voice.",
      "The most exciting part of a SIGINT analyst's day might be a new frequency allocation.",
      "SIGINT equipment has more knobs and dials than a spaceship cockpit.",
      "SIGINT analysts dream in waveforms and wake up humming carrier frequencies.",
      "The phrase 'Can you hear me now?' has deep professional meaning in SIGINT.",
    ],
    realityChecks: [
      "🎬 Movies: Instantly decrypting any signal 📱 Reality: 'This might be a signal... or microwave interference'",
      "🎬 Movies: Crystal clear intercepts 📱 Reality: 'Was that a word or just atmospheric noise?'",
      "🎬 Movies: Dramatic eavesdropping 📱 Reality: Hours of listening to carrier tones",
    ],
    professionalTips: [
      "🎧 Invest in good headphones - your ears are your primary tool",
      "📊 Learn to love spreadsheets - frequency management is an art",
      "⚡ Understand your equipment - it's more complex than it looks",
      "🔇 Appreciate silence - sometimes no signal is the signal",
    ],
    completionMessages: [
      "🎉 Congratulations! You can now hear intelligence in the airwaves!",
      "🏆 Achievement unlocked: Can identify a cell tower by its electronic heartbeat!",
      "🎯 You've mastered the art of making the invisible visible!",
    ],
    analogies: [
      "SIGINT is like being a radio DJ, but instead of playing music, you're hunting for secrets in the static.",
      "Think of the electromagnetic spectrum as a massive highway where you're a traffic cop looking for suspicious vehicles.",
      "SIGINT analysts are like electronic bloodhounds, following signal trails through the digital wilderness.",
    ],
    dailyLife: [
      "Explaining to people that you don't actually 'hack' things",
      "Getting excited about new antenna configurations",
      "Having strong opinions about signal processing algorithms",
      "Unconsciously analyzing the WiFi signals around you",
    ],
  },

  geoint: {
    openingHook:
      "🛰️ Welcome to GEOINT - where we see everything from space and somehow make it useful! If you've ever wanted X-ray vision, satellite imagery is the next best thing.",
    funFacts: [
      "GEOINT analysts can spot a hot dog cart from 200 miles up.",
      "The phrase 'enhance and zoom' actually works in GEOINT (sometimes).",
      "GEOINT analysts know your neighborhood better than you do, and they've never been there.",
      "Cloud cover is the natural enemy of every GEOINT analyst.",
      "GEOINT analysts have the best view of Earth and the worst view of their computer screens.",
    ],
    realityChecks: [
      "🎬 Movies: 'Enhance that image!' *perfect clarity* 📱 Reality: 'That blob might be a building... or a shadow'",
      "🎬 Movies: Real-time satellite feeds 📱 Reality: 'This image is from last Tuesday'",
      "🎬 Movies: Seeing through walls 📱 Reality: 'The roof is definitely there'",
    ],
    professionalTips: [
      "☁️ Check weather forecasts - clouds are your nemesis",
      "🕐 Understand orbital mechanics - satellites have schedules too",
      "📏 Master scale and resolution - size matters in imagery",
      "🎨 Develop an eye for detail - patterns tell stories",
    ],
    completionMessages: [
      "🎉 Congratulations! You now have the closest thing to superpowers legally available!",
      "🏆 Achievement unlocked: Can navigate any city using only satellite imagery!",
      "🎯 You've mastered the art of seeing the big picture... literally!",
    ],
    analogies: [
      "GEOINT is like being a detective with a really, really good telescope that happens to be in space.",
      "Think of satellite imagery as Google Earth, but with the ability to time travel and see through some things.",
      "GEOINT analysts are like digital cartographers mapping a world that's constantly changing.",
    ],
    dailyLife: [
      "Automatically checking satellite imagery when planning vacation routes",
      "Getting frustrated with Google Maps' image quality",
      "Explaining that you can't actually see people from space (usually)",
      "Having strong opinions about image resolution and spectral bands",
    ],
  },

  masint: {
    openingHook:
      "🔬 Welcome to MASINT - where we measure things you didn't know could be measured! If you love sensors, signatures, and scientific mysteries, you've found your calling.",
    funFacts: [
      "MASINT analysts can identify a car by its acoustic signature.",
      "MASINT has sensors for things that don't even have names yet.",
      "The phrase 'that's not normal' is music to a MASINT analyst's ears.",
      "MASINT analysts see patterns in data that look like random noise to everyone else.",
      "MASINT is what happens when scientists get security clearances.",
    ],
    realityChecks: [
      "🎬 Movies: Instant analysis of any signature 📱 Reality: 'Let me run this through 47 different algorithms'",
      "🎬 Movies: Dramatic sensor readings 📱 Reality: 'This spike could be significant... or a calibration error'",
      "🎬 Movies: Clear, obvious signatures 📱 Reality: 'The signal is buried in the noise somewhere'",
    ],
    professionalTips: [
      "📊 Learn statistics - everything in MASINT is about probability",
      "🔧 Understand your sensors - garbage in, garbage out",
      "🧪 Think like a scientist - hypothesis, test, repeat",
      "📈 Master data visualization - patterns hide in plain sight",
    ],
    completionMessages: [
      "🎉 Congratulations! You can now measure the unmeasurable!",
      "🏆 Achievement unlocked: Can find signals in noise that others can't even see!",
      "🎯 You've mastered the art of making the invisible measurable!",
    ],
    analogies: [
      "MASINT is like being a scientific detective where the evidence is invisible and the clues are in the data.",
      "Think of MASINT as having super-sensitive scientific instruments that can detect a whisper in a thunderstorm.",
      "MASINT analysts are like data archaeologists, carefully excavating signals from layers of noise.",
    ],
    dailyLife: [
      "Getting excited about new sensor technologies",
      "Explaining that you don't actually 'see' most of what you analyze",
      "Having strong opinions about signal processing techniques",
      "Unconsciously analyzing the acoustic signatures of everyday objects",
    ],
  },

  finint: {
    openingHook:
      "💰 Welcome to FININT - where we follow the money trail like financial bloodhounds! If you can make Excel spreadsheets exciting and love financial puzzles, you're home.",
    funFacts: [
      "FININT analysts can trace a dollar through more shell companies than a Russian nesting doll.",
      "The phrase 'follow the money' isn't just a movie quote - it's a way of life.",
      "FININT analysts have the most interesting relationship with their bank statements.",
      "FININT can make accounting exciting (no, really!).",
      "FININT analysts see patterns in financial data like Neo sees the Matrix.",
    ],
    realityChecks: [
      "🎬 Movies: Instant financial analysis 📱 Reality: 'Let me cross-reference these 47 databases'",
      "🎬 Movies: Clear money trails 📱 Reality: 'This transaction went through 12 countries and 3 cryptocurrencies'",
      "🎬 Movies: Dramatic financial revelations 📱 Reality: 'The smoking gun is in cell B47 of this spreadsheet'",
    ],
    professionalTips: [
      "📊 Master Excel - it's your primary weapon",
      "🏦 Understand banking systems - money has rules",
      "🔍 Think like an accountant - every penny has a purpose",
      "🌐 Learn international finance - money crosses borders",
    ],
    completionMessages: [
      "🎉 Congratulations! You can now make money talk (figuratively)!",
      "🏆 Achievement unlocked: Can find financial needles in monetary haystacks!",
      "🎯 You've mastered the art of making numbers tell stories!",
    ],
    analogies: [
      "FININT is like being a financial detective where every transaction is a clue and every account is a suspect.",
      "Think of money as leaving digital footprints everywhere it goes, and you're the tracker.",
      "FININT analysts are like financial archaeologists, digging through layers of transactions to find buried connections.",
    ],
    dailyLife: [
      "Getting excited about new financial databases",
      "Explaining that you don't actually handle money, just data about money",
      "Having strong opinions about transaction analysis software",
      "Unconsciously analyzing the financial patterns in your own spending",
    ],
  },
}

export function getHumorForDiscipline(discipline: string): HumorContent {
  return disciplineHumor[discipline.toLowerCase()] || disciplineHumor.osint
}

export function getRandomHumorElement(discipline: string, type: keyof HumorContent): string {
  const humor = getHumorForDiscipline(discipline)
  const elements = humor[type]
  return Array.isArray(elements) ? elements[Math.floor(Math.random() * elements.length)] : elements
}
