import React from 'react';

interface Objective {
  id: string;
  text: string;
}

interface OperationalIntelligenceObjectivesProps {
  completedModules: string[];
}

const objectives: Objective[] = [
  { id: 'fundamentals', text: 'Master the fundamentals and bridge strategic-tactical intelligence' },
  { id: 'crime-series', text: 'Identify patterns and trends in related criminal activities' },
  { id: 'mo-analysis', text: 'Examine and interpret criminal methods of operation' },
  { id: 'linkage', text: 'Connect disparate criminal incidents through advanced analysis' },
];

export const OperationalIntelligenceObjectives: React.FC<OperationalIntelligenceObjectivesProps> = ({ completedModules }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Learning Objectives</h2>
      <ul className="space-y-2">
        {objectives.map((objective) => (
          <li key={objective.id} className="flex items-center">
            <span className={`mr-2 ${completedModules.includes(objective.id) ? 'text-green-500' : 'text-gray-400'}`}>
              &#10003;
            </span>
            <span>{objective.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OperationalIntelligenceObjectives;
