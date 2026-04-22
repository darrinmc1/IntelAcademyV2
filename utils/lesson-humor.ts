export const lessonHumor = {
  // Opening hooks for different topics
  openingHooks: {
    "what-is-intelligence": {
      hook: "No, we're not talking about your IQ score (though that helps too).",
      subtitle: "Intelligence in our world means something completely different from your SAT scores.",
    },
    "intelligence-cycle": {
      hook: "It's like the circle of life, but with more spreadsheets and fewer singing animals.",
      subtitle: "The never-ending story of how raw data becomes actionable intelligence.",
    },
    "strategic-intelligence": {
      hook: "Think chess, not checkers. Also think years ahead, not just your lunch plans.",
      subtitle: "For when you need to predict the future but left your crystal ball at home.",
    },
    "tactical-intelligence": {
      hook: "When intelligence needs to be delivered faster than your pizza order.",
      subtitle: "Real-time analysis for people who don't have time for 'strategic thinking'.",
    },
    osint: {
      hook: "Professional stalking, but make it legal and call it 'research'.",
      subtitle: "Everything you need to know is already public - you just need to know where to look.",
    },
    "crime-series-analysis": {
      hook: "Like binge-watching a crime show, except the patterns are real and the stakes are higher.",
      subtitle: "Connecting the dots when criminals think they're being clever.",
    },
    "hot-spot-analysis": {
      hook: "Finding where crime likes to hang out (spoiler: it has favorite spots).",
      subtitle: "Because criminals are creatures of habit, just like your coffee shop routine.",
    },
  },

  // Fun facts that appear throughout lessons
  funFacts: {
    intelligence: [
      "The average intelligence analyst drinks 4.7 cups of coffee per day. The good ones drink more.",
      "Intelligence analysts are the only people who get excited about finding patterns in spreadsheets.",
      "The phrase 'that's classified' is used 73% more often at intelligence agency holiday parties.",
      "Intelligence analysts have been known to analyze the seating arrangements at family dinners.",
      "The most dangerous phrase in intelligence: 'I'm pretty sure that's what it means.'",
    ],
    osint: [
      "OSINT analysts can find your high school yearbook photo in under 10 minutes.",
      "The average OSINT researcher has 47 different browser bookmarks for 'totally legitimate research'.",
      "OSINT analysts are banned from most family game nights for 'excessive background checking'.",
      "Google Dorking sounds dirty but is actually a legitimate research technique.",
      "OSINT analysts read privacy policies for fun (and to find loopholes).",
    ],
    tactical: [
      "Tactical analysts are the emergency room doctors of the intelligence world.",
      "The tactical analyst motto: 'Good enough for government work, fast enough for government deadlines.'",
      "Tactical intelligence reports have a half-life shorter than fresh sushi.",
      "Tactical analysts can brief a situation in the time it takes you to microwave lunch.",
      "The difference between tactical and strategic analysts: tactical analysts actually get invited to operations meetings.",
    ],
  },

  // Humorous analogies for complex concepts
  analogies: {
    "intelligence-cycle": {
      planning: "Like planning a surprise party, except the person you're surprising might be armed and dangerous.",
      collection:
        "Gathering ingredients for a recipe when you don't know what you're cooking and half the ingredients are classified.",
      processing: "Like doing laundry, but instead of separating colors, you're separating facts from fiction.",
      analysis: "Putting together a jigsaw puzzle where half the pieces are missing and the box cover is classified.",
      dissemination: "Like explaining TikTok to your grandparents, but with national security implications.",
    },
    "strategic-vs-tactical": {
      strategic:
        "Strategic intelligence is like planning your retirement - important, long-term, and something you should probably think about more.",
      tactical:
        "Tactical intelligence is like deciding what to wear based on the weather forecast - immediate, practical, and wrong about 30% of the time.",
    },
  },

  // Analyst personality types (humorous)
  analystTypes: {
    "the-perfectionist": {
      description:
        "Spends 3 hours formatting a 2-page report. Color-codes everything. Has strong opinions about font choices.",
      catchphrase: "But what if we're missing something?",
    },
    "the-speed-demon": {
      description: "Delivers analysis before you finish asking the question. Accuracy is negotiable, speed is not.",
      catchphrase: "Good enough, ship it!",
    },
    "the-conspiracy-theorist": {
      description:
        "Sees patterns everywhere. Connects dots that probably shouldn't be connected. Makes excellent coffee though.",
      catchphrase: "Have you considered that maybe...",
    },
    "the-data-hoarder": {
      description: "Has 47 different spreadsheets for the same project. Knows where everything is. Shares nothing.",
      catchphrase: "I have a spreadsheet for that.",
    },
  },

  // Humorous warnings and tips
  warnings: {
    beginners: [
      "Warning: Learning intelligence analysis may cause you to overthink everything, including this warning.",
      "Side effects may include: excessive pattern recognition, coffee addiction, and the inability to watch spy movies without critiquing them.",
      "Caution: You may start analyzing your friends' social media posts for 'intelligence value'.",
    ],
    advanced: [
      "Advanced warning: You're now qualified to ruin action movies for everyone around you.",
      "Congratulations: You can now say 'that's not how intelligence works' with authority.",
      "Achievement unlocked: Professional skeptic level reached.",
    ],
  },

  // Lesson completion humor
  completionMessages: [
    "Congratulations! You're now 23% more dangerous at dinner parties.",
    "Achievement unlocked: Can now use 'intelligence analysis' as an excuse for knowing random facts.",
    "Level up! Your ability to overthink simple situations has been professionally certified.",
    "Success! You can now watch spy movies and point out all the inaccuracies (everyone loves that).",
    "Well done! You're now qualified to say 'That's classified' when someone asks what you learned today.",
    "Excellent! You've mastered the art of making educated guesses sound professional.",
    "Outstanding! You can now turn any conversation into a briefing (whether people want it or not).",
  ],
}

// Helper functions for injecting humor
export function getRandomFunFact(category: keyof typeof lessonHumor.funFacts): string {
  const facts = lessonHumor.funFacts[category] || lessonHumor.funFacts.intelligence
  return facts[Math.floor(Math.random() * facts.length)]
}

export function getOpeningHook(topicSlug: string) {
  return (
    lessonHumor.openingHooks[topicSlug as keyof typeof lessonHumor.openingHooks] || {
      hook: "Welcome to another thrilling episode of 'How to Think Like a Spy'!",
      subtitle: "Where we turn ordinary people into professional overthinkers.",
    }
  )
}

export function getRandomCompletionMessage(): string {
  const messages = lessonHumor.completionMessages
  return messages[Math.floor(Math.random() * messages.length)]
}

export function getAnalystPersonality() {
  const types = Object.values(lessonHumor.analystTypes)
  return types[Math.floor(Math.random() * types.length)]
}
