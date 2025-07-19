import type React from "react"
import type { TimelineEvent } from "./timeline-event"
import { HoverCard } from "./hover-card"
import { EventCard } from "./event-card"
import { TimelineNavigation } from "./timeline-navigation"
import { EventFilter } from "./event-filter"
import { SearchBar } from "./search-bar"
import { ExportOptions } from "./export-options"
import { BookmarkSystem } from "./bookmark-system"
import { CaseStudyTimeline } from "./case-study-timeline"
import { LearningObjectives } from "./learning-objectives"
import { AnalysisExercises } from "./analysis-exercises"
import { HistoricalContext } from "./historical-context"

interface TimelineEventDetailsProps {
  events: TimelineEvent[]
}

const TimelineEventDetails: React.FC<TimelineEventDetailsProps> = ({ events }) => {
  return (
    <div className="timeline-event-details">
      {events.map((event, index) => (
        <div key={index} className="timeline-event">
          <div className="event-summary">
            <h3>{event.title}</h3>
            <p>{event.date}</p>
          </div>
          <div className="event-details">
            <HoverCard event={event}>
              <div className="detailed-description">
                <p>{event.description}</p>
              </div>
              <div className="key-participants">
                <h4>Key Participants</h4>
                <ul>
                  {event.participants.map((participant, idx) => (
                    <li key={idx}>{participant}</li>
                  ))}
                </ul>
              </div>
              <div className="supporting-evidence">
                <h4>Supporting Evidence</h4>
                <ul>
                  {event.evidence.map((evidence, idx) => (
                    <li key={idx}>{evidence}</li>
                  ))}
                </ul>
              </div>
              <div className="impact-analysis">
                <h4>Impact Analysis</h4>
                <p>{event.impact}</p>
              </div>
              <div className="intelligence-assessments">
                <h4>Intelligence Assessments</h4>
                <p>{event.intelligence}</p>
              </div>
            </HoverCard>
            <EventCard event={event}>
              <div className="expandable-content">
                <p>{event.fullDetails}</p>
              </div>
              <div className="source-citations">
                <h4>Source Citations</h4>
                <ul>
                  {event.sources.map((source, idx) => (
                    <li key={idx}>{source}</li>
                  ))}
                </ul>
              </div>
              <div className="related-events">
                <h4>Related Events</h4>
                <ul>
                  {event.relatedEvents.map((relatedEvent, idx) => (
                    <li key={idx}>{relatedEvent}</li>
                  ))}
                </ul>
              </div>
              <div className="geographic-context">
                <h4>Geographic Context</h4>
                <p>{event.location}</p>
              </div>
              <div className="classification-levels">
                <h4>Classification Levels</h4>
                <p>{event.securityMarking}</p>
              </div>
            </EventCard>
          </div>
        </div>
      ))}
      <TimelineNavigation />
      <EventFilter />
      <SearchBar />
      <ExportOptions />
      <BookmarkSystem />
      <CaseStudyTimeline />
      <LearningObjectives />
      <AnalysisExercises />
      <HistoricalContext />
    </div>
  )
}

export default TimelineEventDetails
