import React from 'react';

interface Objective {
  id: string;
  text: string;
}

interface StrategicIntelligenceObjectivesProps {
  completedModules: string[];
}

const objectives: Objective[] = [
  { id: 'fundamentals', text: 'Understand the core principles of strategic intelligence.' },
  { id: 'analysis', text: 'Learn to conduct comprehensive strategic analysis.' },
  { id: 'forecasting', text: 'Develop skills in strategic forecasting and warning intelligence.' },
  { id: 'decision-making', text: 'Apply strategic intelligence to support high-level decision-making.' },
];

export const StrategicIntelligenceObjectives: React.FC<StrategicIntelligenceObjectivesProps> = ({ completedModules }) => {
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

export default StrategicIntelligenceObjectives;
