"use client"

import type React from "react"

interface TimelineEvent {
  title: string
  date: string
  description: string
  participants: string[]
  evidence: string[]
  impact: string
  intelligence: string
  fullDetails: string
  sources: string[]
  relatedEvents: string[]
  location: string
  securityMarking: string
}

interface TimelineEventDetailsProps {
  events: TimelineEvent[]
}

const TimelineEventDetails: React.FC<TimelineEventDetailsProps> = ({ events }) => {
  return (
    <div className="timeline-event-details space-y-6">
      {events.map((event, index) => (
        <div key={index} className="timeline-event border rounded-lg p-6 bg-white shadow-sm">
          <div className="event-summary mb-4">
            <h3 className="text-xl font-bold">{event.title}</h3>
            <p className="text-gray-600">{event.date}</p>
          </div>
          <div className="event-details space-y-4">
            <div className="detailed-description">
              <p className="text-gray-700">{event.description}</p>
            </div>
            <div className="key-participants">
              <h4 className="font-semibold mb-2">Key Participants</h4>
              <ul className="list-disc list-inside text-gray-600">
                {event.participants.map((participant, idx) => (
                  <li key={idx}>{participant}</li>
                ))}
              </ul>
            </div>
            <div className="supporting-evidence">
              <h4 className="font-semibold mb-2">Supporting Evidence</h4>
              <ul className="list-disc list-inside text-gray-600">
                {event.evidence.map((evidence, idx) => (
                  <li key={idx}>{evidence}</li>
                ))}
              </ul>
            </div>
            <div className="impact-analysis">
              <h4 className="font-semibold mb-2">Impact Analysis</h4>
              <p className="text-gray-700">{event.impact}</p>
            </div>
            <div className="intelligence-assessments">
              <h4 className="font-semibold mb-2">Intelligence Assessments</h4>
              <p className="text-gray-700">{event.intelligence}</p>
            </div>
            <div className="expandable-content">
              <p className="text-gray-700">{event.fullDetails}</p>
            </div>
            <div className="source-citations">
              <h4 className="font-semibold mb-2">Source Citations</h4>
              <ul className="list-disc list-inside text-gray-600">
                {event.sources.map((source, idx) => (
                  <li key={idx}>{source}</li>
                ))}
              </ul>
            </div>
            <div className="related-events">
              <h4 className="font-semibold mb-2">Related Events</h4>
              <ul className="list-disc list-inside text-gray-600">
                {event.relatedEvents.map((relatedEvent, idx) => (
                  <li key={idx}>{relatedEvent}</li>
                ))}
              </ul>
            </div>
            <div className="geographic-context">
              <h4 className="font-semibold mb-2">Geographic Context</h4>
              <p className="text-gray-700">{event.location}</p>
            </div>
            <div className="classification-levels">
              <h4 className="font-semibold mb-2">Classification Levels</h4>
              <p className="text-gray-700">{event.securityMarking}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TimelineEventDetails
