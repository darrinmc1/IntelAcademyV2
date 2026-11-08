import EnhancedLessonContentLoader from "@/components/enhanced-lesson-content-loader"
import LessonContainer from "@/components/lesson-container"
import { MicroLesson } from "@/components/micro-lesson"
import { Metadata } from "next"

export const metadata: Metadata = {
  alternates: { canonical: "/topics/verifying-photos-and-video-before-you-cite-them" },
  title: "Verifying Photos and Video Before You Cite Them",
  description: "A repeatable workflow for checking the origin, date, location and integrity of images and video before they go into an intelligence product.",
}

// Added by the Empire weekly lesson workflow on 2026-11-09. Read time is computed from the word count (1577 words at 230 wpm).
const topicContent = `By the end of this lesson you will be able to take a photo or video from your inbox or feed and decide, using a documented process, how much weight it can carry. You will also be able to write that decision into a product in language the reader can act on.

This matters because imagery persuades in a way a paragraph of text does not. A striking clip gets forwarded, briefed and quoted before anyone asks where it came from. The analyst who asks is briefly unpopular and later correct.

## Verify five things, not one

Most people ask, "Is it fake?" That is one question, and rarely the most useful one. Imagery can fail in five separate ways, and a file can pass four of them:

- **Origin:** who first captured or published it?
- **Source:** who is passing it to you, and what are their access and motive?
- **Date and time:** when was it recorded, as opposed to when it was posted?
- **Location:** where was it recorded?
- **Integrity:** has it been edited, composited or generated?

The most common failure is not manipulation. It is genuine footage attached to the wrong event: a real fire, from a different year, in a different city. Nothing has been edited, so a tool that hunts for edits will pass it.

So treat the caption as a separate item to verify. "This shows X at Y on Z" is your hypothesis, and the file is evidence for or against it. List the alternatives before you start: genuine and correctly described, genuine but old, genuine but elsewhere, staged, edited, generated. The method in Analysis of Competing Hypotheses applies directly. Look for the evidence that separates one explanation from the others, not the evidence that fits your favourite.

## Preserve first, then trace the earliest copy

Before you do anything clever, save what you have. Record the URL, the account name, the time you accessed it and, if you downloaded a file, its hash. Keep an unaltered original and work on copies. Digital Evidence Documentation covers this in more depth. The short version is that a verification you cannot reproduce is an opinion.

Then look for the earliest version. Reposts crop out watermarks, strip captions and lose resolution, so the original is usually the sharpest and most complete.

- Run reverse image searches on more than one engine. Search the whole image and also cropped sections, such as a sign or a building.
- For video, extract still frames at each scene change and search those.
- Search the platform itself by keyword, in other languages, with date filters.
- Read the uploader's earlier posts. Do they have a history in that place, or did the account appear last week?
- Write down the earliest copy you found and call it that. "Earliest found" is not the same as "earliest".

Assess the source as you would any human source, using the same standards for access, track record and motive. A person who has filmed local events for years is a different proposition from an anonymous aggregator. Imagery does not get a pass for being a picture. Where someone may have an interest in you finding the material, Denial and Deception: Spotting Indicators of Manipulation applies.

## Read place and time from the content

Once you know where the material first surfaced, test whether the image supports the claim. Geolocation and chronolocation work from what is visible, not from what the caption says.

For place, look at:

- Fixed features: ridgelines, bridges, road layouts, rail lines, distinctive buildings.
- Text: shop signs, road signs, scripts and languages, phone number formats, licence plate styles.
- Infrastructure: utility poles, road markings, bollard styles, which side traffic drives on.

Compare these against satellite imagery, street-level imagery and maps. Match several features in the right spatial relationship. One matching church tower is a lead. Three features that sit correctly relative to each other is a match. GEOINT Fundamentals covers imagery interpretation in more depth.

For time, look at:

- Shadow direction and length, which give a rough sun position. Combined with a known place, they bound the time of day.
- Weather, vegetation, snow cover and seasonal clothing, checked against historical weather records for the claimed date.
- Anything that changes over time: construction stages, posters for dated events, vehicle liveries, visible clocks or screens.

Keep a note of what you matched and what you could not. A location that matches on two features and conflicts on a third is not a match, and the conflict is the interesting part.

## What metadata and manipulation checks can tell you

Metadata can include capture time, device model and sometimes coordinates. Most social platforms strip it on upload, so its absence tells you little. Its presence tells you little too, because free tools can edit it in seconds. Treat it as a lead to corroborate, never as proof.

For manipulation, look for:

- Lighting that disagrees with itself: shadows pointing in different directions, reflections that do not match the scene.
- Warped straight lines or repeated texture patterns near edited areas.
- In video, ambient sound that does not suit the place, audio out of step with lips, jump cuts that hide a gap, and sudden changes in frame rate or quality.
- In generated images, odd hands, garbled text and inconsistent fine detail. Generators improve, so a clean image proves nothing.

Automated detection tools return scores. Treat a score as one weak input. These tools can be wrong in both directions and rarely explain themselves. Your strongest evidence is positive: independent corroboration of origin, place and time. A sound provenance chain outweighs any forensic score. If you cannot establish provenance, say so in the product. Do not fill the gap with a detector result.

## Worked example

This scenario is an illustration.

Priya works in a corporate security team. A client's travel manager forwards a video of smoke over a port terminal, captioned "Port of X, this morning, protesters set cargo on fire." The client wants to know whether to reroute shipments.

Priya saves the post with its URL and access time, and keeps a copy of the file. Reverse searches on keyframes turn up the same clip posted several months earlier by a different account, under a different caption. The older caption places it at a fuel depot in another city.

She does not take the older caption on trust either. A gate sign in the footage carries a company name she can only find at that depot. The ridgeline behind the smoke matches satellite imagery of the depot and does not match the port. Three features agree, and none conflicts.

Her write-up reads: "We assess with high confidence that this video does not show the reported event. It was published months before the claimed date, and the location matches a site in a different city. This finding does not tell us whether a fire occurred at the port. Reporting on that question is currently unverified."

The last two sentences matter. She has judged the file, not the event, and she has said so. Her confidence wording should follow the conventions in Estimative Language.

Before you cite any imagery, run this checklist:

- Original saved, with hash and access details recorded.
- Earliest copy found, or the limits of your search stated.
- Source assessed for access and motive.
- Location matched on at least three independent features.
- Time bounded by at least one independent indicator.
- Manipulation checked, with the limits of the checks noted.
- Finding written with a confidence level and what would change it.

## Common mistakes

- **Verifying the file and forgetting the caption.** A genuine clip with the wrong label is still wrong evidence.
- **Calling one matched feature a location.** One feature is a lead. Match several.
- **Trusting metadata or a detector score.** Both can be edited or mistaken. Neither replaces provenance.
- **Stopping when the image fits your expectation.** That is confirmation bias at work, covered in Cognitive Biases in Intelligence. A Key Assumptions Check on the claim attached to the file will often expose the weak link.
- **Citing a screenshot of a screenshot.** Every generation loses information. Go back to the source or label it as unverified.
- **Writing "confirmed" when you mean "consistent with".** Consistent with is a weaker claim. Your reader will make decisions on the difference.
- **Going beyond your mandate.** Bystanders who appear in footage are not targets. Do not identify private individuals or work out where someone lives unless your lawful tasking requires it and your organisation's policy allows it. Do not contact people under false pretences to check a clip. Keep collection to public material and proportionate to the requirement. Graphic content also takes a toll, so limit your exposure and look after your colleagues.

## Exercise for this week

Choose three public images or videos that circulated with a claim attached, on a topic in your own area of work. For each, build a one-page verification log with these headings:

1. The claim as captioned.
2. The earliest copy you found, and where you looked.
3. Place features matched, and any that conflict.
4. Time indicators found.
5. Manipulation checks run and their limits.
6. Verdict: verified, plausible but unverified, or contradicted, with confidence wording.

Then hand one of the items, without your verdict, to a colleague and ask them to run the same process. Compare results. Where you disagree, find out why. The cause is usually a feature one of you missed or an assumption one of you never wrote down. That gap is what the log is meant to expose.
`

export default function VerifyingPhotosAndVideoBeforeYouCiteThemPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title={"Verifying Photos and Video Before You Cite Them"}
        subtitle={"A repeatable workflow for checking the origin, date, location and integrity of images and video before they go into an intelligence product."}
        humorSubtitle={"A vivid clip is not evidence. It is a claim with good lighting."}
        readTime={7}
        difficulty={"Intermediate"}
        category={"OSINT"}
        mascot="foundations"
        mascotMessage={"If the clip arrived with a caption, the caption needs verifying too. It usually has the weaker alibi."}
      >
        <EnhancedLessonContentLoader content={topicContent} topic="verifying-photos-and-video-before-you-cite-them" />
      </MicroLesson>
    </LessonContainer>
  )
}
