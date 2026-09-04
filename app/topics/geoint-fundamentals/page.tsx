import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "GEOINT Fundamentals - The Intel Analyst Academy",
  description:
    "Learn what geospatial intelligence actually is: imagery plus place plus judgment — and the limits physics, weather, and bad legends will not negotiate.",
}

const topicContent = `Geospatial intelligence is the analysis of what is happening where, using imagery, maps, and spatially referenced data to support a decision. It is not "we have a satellite." It is not Google Earth with a dramatic pause. It is a claim about activity, change, or terrain that a consumer can plot.

If the finding still works after you delete the coordinates, it was not GEOINT. It was a paragraph that wanted a picture.

## What GEOINT Is Made Of

The discipline is a stack. People name the layers differently. The jobs stay.

- **Imagery.** Still or motion pictures from space, air, or ground. The picture is evidence of a time and a geometry, not a narrator.
- **Geospatial data.** Elevation, features, addresses, boundaries, networks. A pin without a coordinate system is a mood.
- **Analysis.** Comparison to a baseline, measurement, change detection, and a judgment. "I see trucks" is observation. "Truck count exceeds the 90-day night baseline; consistent with load-out" is GEOINT.
- **Product.** A map, a graphic, an annotated still, or a sentence that can be plotted. The product has a time of image, a source, a classification, and a so-what.

IMINT (imagery intelligence) is the picture-heavy cousin. GIS is the workshop. GEOINT is what leaves the workshop with a point.

> Clouds are not a plot against you. They are weather. Physics does not care about your deadline. Neither does a 30-degree look angle.

## What It Is For

Use GEOINT when place is doing work.

- **Activity at a site.** Night lighting, vehicle counts, earthworks, ship drafts at a berth. The question is change against a baseline you bothered to build.
- **Movement and routes.** What can move where, what is blocked, what is the cover. A pretty hillshade that does not change a route is art.
- **Pattern in space.** Thefts, protests, launches, construction — plotted, not listed. Watch the denominator: reporting density is not the same as event density.
- **Context for other INTs.** A SIGINT hit without a place is a rumor with a frequency. A place without a time is a postcard.

Worked judgment: "Between Monday and Thursday, spoil piles grew on the north pad and two heavy haulers appeared after 1800; I assess site preparation, not abandonment; moderate confidence; optical only, two looks, both afternoon." That sentence is why you tasked the imagery. A montage of four pretty frames is not.

## Limits You Will Brief Out Loud

- **Weather and light.** Optical fails through cloud and often at night. Radar and infrared exist because of that sentence. They have their own lies.
- **Resolution and angle.** You can often count vehicles. You cannot read a bumper sticker, whatever the film suggested. Off-nadir makes objects lean and hide.
- **Revisit.** The sensor is not hovering for you unless someone paid for that. A gap in looks is a gap in knowledge. Draw it.
- **Deception and normal life.** Camouflage, decoys, and the eternal playground-that-looks-like-equipment problem. Context and multi-INT save you. "Enhance" does not.
- **Volume.** You will not look at everything. Task against the requirement or drown with dignity.

Civilian uses — disaster, planning, agriculture — follow the same honesty rules. Commercial imagery is still a source. It is not automatically unclassified in your product if your annotation gives away a method you do not own.

## How to Work a Problem

- **Start with the question and the decision.** "Is the yard loading at night?" is taskable. "See what's going on" is a budget burn.
- **Establish a baseline.** One image is an anecdote. A week of looks is a start. Seasonal normals matter more than your memory of last Tuesday.
- **Measure, then judge.** Counts, lengths, shadows, and timestamps. If you cannot say what you measured, you are interpreting a vibe.
- **Annotate for a hostile reader.** North arrow, scale, image time, source, and the claim in a caption. A graphic that requires you to hover is unfinished.
- **Say what would change the call.** Another look after 0200. A second phenomenology. A ground report.

## Practice

You get two optical frames of a coastal lot, 10 days apart: empty, then stacked containers and a crane. Write a four-line GEOINT call: what changed, what you assess, confidence, and the next collection that would help. Then write the sentence you will not write ("they are definitely smuggling").

If your call has no time of image, start over. If it has no alternative (legitimate cargo surge), start over.

## Honest Tooling Note

You do not need a secret globe to learn this. Public imagery and a notebook will teach baseline and change. Shop tools vary. Coming Soon: any academy-hosted imagery workbench. Until then, practice the sentences. The sentences are the discipline.
`

export default function GeointfundamentalsPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="GEOINT Fundamentals"
        subtitle="Place, time, and a measured change — not a prettier map of the same uncertainty."
        humorSubtitle="Cloud cover has ended more briefings than any adversary. Brief the gap."
        readTime={22}
        difficulty="Beginner"
        category="Collection"
        mascot="foundations"
        mascotMessage="If you cannot plot the finding, it is not geospatial. It is a caption looking for a photo."
      >
        <EnhancedLessonContentLoader content={topicContent} topic="geoint-fundamentals" />
      </MicroLesson>
    </LessonContainer>
  )
}
