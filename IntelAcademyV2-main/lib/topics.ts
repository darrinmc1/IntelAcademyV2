interface TopicContent {
  title: string;
  description: string;
  readTime?: number;
  category?: string;
  publishDate?: string;
}

// A simple utility to get topic content based on slug
export function getTopicContent(slug: string): TopicContent | null {
  // Default topic data based on slug
  const title = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  // Map of known topics
  const topicsMap: Record<string, TopicContent> = {
    'what-is-intelligence': {
      title: 'What is Intelligence?',
      description: 'Understanding the fundamental concepts of intelligence',
      readTime: 15,
      category: 'foundations',
      publishDate: 'January 15, 2023',
    },
    'information-vs-intelligence': {
      title: 'Information vs. Intelligence: Key Differences',
      description: 'Understanding the distinction between raw information and processed intelligence',
      readTime: 15,
      category: 'foundations',
      publishDate: 'January 20, 2023',
    },
    'intelligence-decision-making': {
      title: 'The Purpose of Intelligence in Decision-Making',
      description: 'How intelligence supports effective decision-making processes',
      readTime: 15,
      category: 'foundations',
      publishDate: 'January 25, 2023',
    },
    'intelligence-cycle-overview': {
      title: 'Overview of the Intelligence Cycle',
      description: 'Understanding the process that drives intelligence operations',
      readTime: 20,
      category: 'foundations',
      publishDate: 'February 1, 2023',
    },
    'google-dorking': {
      title: 'Google Dorking Techniques',
      description: 'Advanced search operators for effective information gathering',
      readTime: 20,
      category: 'osint',
      publishDate: 'March 10, 2023',
    },
    'what-is-osint': {
      title: 'What is OSINT?',
      description: 'Introduction to open-source intelligence and its importance',
      readTime: 10,
      category: 'osint',
      publishDate: 'March 5, 2023',
    },
    'structured-brainstorming': {
      title: 'Structured Brainstorming',
      description: 'Techniques for organized and effective brainstorming in intelligence analysis',
      readTime: 18,
      category: 'analytical-techniques',
      publishDate: 'April 12, 2023',
    },
    'cognitive-biases': {
      title: 'Cognitive Biases in Intelligence Analysis',
      description: 'Understanding how cognitive biases affect intelligence analysis',
      readTime: 20,
      category: 'analytical-techniques',
      publishDate: 'March 12, 2023',
    }
  };

  // Return known topic or generate default
  return topicsMap[slug] || {
    title,
    description: `Learn about ${title.toLowerCase()} and its applications in intelligence analysis.`,
    readTime: 15,
    category: 'general',
    publishDate: 'January 1, 2023',
  };
}