import type { Metadata } from "next"
import LessonContainer from "@/components/lesson-container"
import {
  MicroLesson,
  MissionBriefing,
  DeepDive,
  ProTip,
  JokeAside,
  Debrief,
  FieldExercise,
} from "@/components/micro-lesson"
import WhatsNext from "@/components/whats-next"

export const metadata: Metadata = {
  title: "Ethical Decision-Making in Intelligence | The Intel Analyst Academy",
  description:
    "Learn frameworks and models for making ethical decisions in intelligence work, from classic ethical theories to practical step-by-step decision-making processes.",
}

export default function EthicalDecisionMakingPage() {
  return (
    <LessonContainer>
      <MicroLesson
        title="Ethical Decision-Making in Intelligence"
        subtitle="Do the Right Thing. Unless the Right Thing Is Classified."
        humorSubtitle="Do the right thing. Unless the right thing is classified. Then do the classified thing."
        readTime={20}
        difficulty="Intermediate"
        category="Intelligence Ethics"
        mascot="intelligence-ethics"
        mascotMessage="Ethical decisions are rarely between good and evil, recruit. They're between two goods — or two necessary evils. That's where the real work begins."
      >
        <MissionBriefing humorText="The good news: most intelligence work is straightforwardly legal and ethical. The bad news: you will remember the gray-area decisions forever. Here is how to make those decisions defensible.">
          <p className="mb-4">
            Ethics in intelligence is not an abstract philosophical exercise. It is a practical
            necessity. Every day, intelligence professionals face decisions that have real
            consequences for national security, individual rights, and democratic governance.
            Should we use information obtained under duress? How much collateral collection is
            acceptable? When does cooperation with an unsavory ally cross a moral line?
          </p>
          <p className="mb-4">
            This lesson provides the frameworks and mental models you need to make ethical
            decisions thoughtfully, systematically, and defensibly. You will learn how classic
            ethical theories apply to intelligence work, how to use a structured decision-making
            model, and how to apply these tools to real-world ethical dilemmas. Because in
            intelligence, the right answer is rarely obvious — but the wrong one can be career-ending.
          </p>
        </MissionBriefing>

        {/* ---- Section 1: Ethics in Intelligence: Why It Matters ---- */}
        <DeepDive title="Ethics in Intelligence: Why It Matters">
          <p className="mb-4">
            Ethics might seem like a luxury in a field where the stakes involve national security
            and human lives. In reality, ethics is a necessity — not because intelligence
            professionals are particularly virtuous, but because unethical behavior reliably
            produces bad outcomes. The evidence is overwhelming: intelligence agencies that
            operate unethically are less effective, less trusted, and more likely to cause
            catastrophic failures.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">The Consequences of Unethical Action</h3>
          <p className="mb-4">
            Consider the real-world consequences of unethical intelligence practices:
          </p>

          <div className="bg-slate-800/50 border border-white/10 rounded-lg p-4 mb-6">
            <ul className="space-y-3 text-slate-300 text-sm">
              <li>
                <strong className="text-white">Loss of Public Trust:</strong> When the Church
                Committee revealed COINTELPRO, MK-ULTRA, and other abuses, public trust in
                intelligence agencies collapsed. It took decades to rebuild — and it never fully
                recovered. Trust lost in a year takes a generation to regain.
              </li>
              <li>
                <strong className="text-white">Unreliable Intelligence:</strong> Information
                obtained through torture is notoriously unreliable. People will say anything to
                stop the pain. The CIA's own post-9/11 review found that "enhanced interrogation
                techniques" produced little actionable intelligence that could not have been
                obtained through lawful methods.
              </li>
              <li>
                <strong className="text-white">Legal Restrictions:</strong> Every major ethics
                scandal in U.S. intelligence history has produced new legal restrictions. The
                more agencies abuse their authority, the more tightly they are constrained.
                Unethical behavior is a self-limiting phenomenon.
              </li>
              <li>
                <strong className="text-white">Damage to Partnerships:</strong> Allies do not
                trust intelligence agencies that operate unethically. If you spy on your
                partners, they stop sharing information with you — making everyone less safe.
              </li>
              <li>
                <strong className="text-white">Moral Injury to Personnel:</strong> Intelligence
                professionals who are asked to do unethical things suffer psychological harm.
                Moral injury — the damage done when someone acts against their moral code — is
                a real and serious occupational hazard in intelligence work.
              </li>
            </ul>
          </div>

          <JokeAside>
            "We'll deal with the ethics later" is the intelligence community equivalent of "I'll
            start exercising tomorrow." Technically possible, but you probably will not, and
            the consequences will be ugly.
          </JokeAside>

          <h3 className="text-xl font-bold mb-3 mt-6">The Ethical Imperative Is Also a Practical Imperative</h3>
          <p className="mb-4">
            There is a tendency in some intelligence circles to view ethics as a constraint — an
            obstacle to getting things done. This framing is not just wrong; it is dangerous.
            Ethical intelligence is more effective intelligence. Agencies with strong ethical
            cultures produce more reliable analysis, build better partnerships, maintain public
            support, and avoid the catastrophic failures that follow ethical lapses. Ethics is
            not a luxury add-on to intelligence work — it is a core competency.
          </p>

          <ProTip>
            <p>
              Before making any significant intelligence decision, ask yourself: "If this
              decision were on the front page of tomorrow's newspaper, would I still feel good
              about it?" This is not a perfect ethical test, but it is a surprisingly effective
              gut check for identifying decisions that are likely to be problematic.
            </p>
          </ProTip>
        </DeepDive>

        {/* ---- Section 2: Ethical Frameworks Applied to Intelligence ---- */}
        <DeepDive title="Ethical Frameworks Applied to Intelligence: The Three Pillars">
          <p className="mb-4">
            Western philosophy offers three major ethical frameworks that are useful for analyzing
            intelligence dilemmas. Each framework approaches ethical questions from a different
            angle, and each has strengths and weaknesses when applied to intelligence problems.
            The best ethical analysis typically draws on all three.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Utilitarianism: The Greatest Good for the Greatest Number</h3>
          <p className="mb-4">
            Utilitarianism, associated with Jeremy Bentham and John Stuart Mill, judges actions
            by their consequences. The right action is the one that produces the greatest overall
            happiness or well-being, considering all affected parties. In intelligence terms,
            utilitarianism asks: "Does this operation produce more security benefit than it
            causes harm?"
          </p>

          <p className="mb-4">
            Utilitarianism is intuitively appealing for intelligence work. It seems reasonable
            to balance costs and benefits. But it has significant problems. It can justify
            terrible actions if the overall calculation comes out positive — sacrificing one
            person for the benefit of many. It struggles to account for individual rights that
            should not be violated regardless of the consequences. And it requires quantifying
            things that are hard to measure — how do you weigh the benefit of preventing a
            terrorist attack against the harm of violating someone's privacy?
          </p>

          <div className="bg-slate-800/50 border border-white/10 rounded-lg p-4 mb-6">
            <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-2">Utilitarianism in Practice: The Ticking Time Bomb</p>
            <p className="text-slate-300 text-sm">
              The classic ticking time bomb scenario — would you torture a terrorist to find a
              bomb that will kill hundreds? — is a utilitarian thought experiment. A utilitarian
              would say yes: the harm of torturing one person is outweighed by saving hundreds
              of lives. But critics note that the scenario is almost never realistic. We rarely
              know for certain that a bomb exists, that the person has the information, or that
              torture will produce reliable intelligence. The scenario is designed to make
              utilitarianism look good by stacking the deck. In real intelligence work, the
              calculations are far less clear.
            </p>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">Deontology: Rules, Duties, and Rights</h3>
          <p className="mb-4">
            Deontology, most closely associated with Immanuel Kant, judges actions by their
            adherence to moral rules and duties, regardless of consequences. Some actions are
            simply wrong — lying, torture, violating privacy — even if they produce good
            outcomes. In intelligence terms, deontology asks: "Does this operation violate
            fundamental moral principles or rights?"
          </p>

          <p className="mb-4">
            Deontology provides a strong foundation for individual rights and makes it difficult
            to justify abusive practices on consequentialist grounds. Its weakness is that it
            can be rigid — a strict deontologist might say that lying is always wrong, even if
            it means an innocent person dies. In intelligence, where deception is often inherent
            to the mission, a purely deontological approach would paralyze operations.
          </p>

          <JokeAside>
            Kant would have been a terrible intelligence officer. "I cannot lie to the enemy
            about my identity because lying is universally wrong" is not a mission brief — it
            is a philosophical treatise that gets people killed.
          </JokeAside>

          <h3 className="text-xl font-bold mb-3 mt-6">Virtue Ethics: Character, Judgment, and the Good Analyst</h3>
          <p className="mb-4">
            Virtue ethics, rooted in Aristotle, focuses on the character of the decision-maker
            rather than on rules or consequences. The right action is what a virtuous person
            would do — someone with integrity, courage, wisdom, and judgment. In intelligence
            terms, virtue ethics asks: "What would an excellent intelligence professional —
            one with sound judgment and integrity — do in this situation?"
          </p>

          <p className="mb-4">
            Virtue ethics is particularly relevant to intelligence because rules cannot cover
            every situation, and consequence calculations are often impossible. In the gray
            areas where intelligence professionals operate, character and judgment are the most
            reliable guides. The problem, of course, is that virtue ethics does not provide a
            clear decision procedure — it relies on the judgment of the virtuous person,
            which is something that must be developed over time through training, experience,
            and mentorship.
          </p>

          <ProTip>
            <p>
              The best intelligence professionals develop an integrated ethical approach: use
              utilitarianism to assess consequences, deontology to check whether fundamental
              rights are being violated, and virtue ethics to reflect on what kind of
              professional you want to be. None of the three frameworks alone is sufficient,
              but together they form a robust analytical toolkit.
            </p>
          </ProTip>
        </DeepDive>

        {/* ---- Section 3: The Ethical Decision-Making Model ---- */}
        <DeepDive title="The Ethical Decision-Making Model: A Step-by-Step Framework">
          <p className="mb-4">
            When facing an ethical dilemma, having a structured process to work through can make
            the difference between a defensible decision and one that collapses under scrutiny.
            The following six-step model integrates insights from all three ethical frameworks
            and is adapted for the specific challenges of intelligence work.
          </p>

          <div className="bg-slate-800/50 border border-white/10 rounded-lg p-4 mb-6">
            <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-3">The Six-Step Ethical Decision-Making Model</p>
            <ol className="space-y-3 text-slate-300 text-sm">
              <li>
                <strong className="text-white">1. Identify the Ethical Issues:</strong> What values,
                principles, or rights are at stake? Is this a question of privacy, truthfulness,
                harm prevention, loyalty, or some combination? Be specific — "this feels wrong"
                is a starting point, not an analysis.
              </li>
              <li>
                <strong className="text-white">2. Gather the Facts:</strong> What do you actually
                know? What assumptions are you making? What information might you be missing?
                Ethical decisions made on incomplete information are often bad decisions.
              </li>
              <li>
                <strong className="text-white">3. Identify Stakeholders:</strong> Who will be
                affected by this decision? Consider not just your agency and the target, but
                also innocent third parties, partner organizations, the broader public, and
                future generations. Stakeholder analysis reveals consequences you might otherwise miss.
              </li>
              <li>
                <strong className="text-white">4. Evaluate Options:</strong> What are the possible
                courses of action? For each option, analyze it through all three ethical
                frameworks: What are the consequences (utilitarianism)? Does it violate any
                moral rules or rights (deontology)? What would a virtuous intelligence
                professional do (virtue ethics)?
              </li>
              <li>
                <strong className="text-white">5. Make a Decision and Act:</strong> Based on your
                analysis, choose the most ethically defensible course of action. Document your
                reasoning — not just the decision but the ethical analysis that led to it.
                Documentation is not bureaucratic overhead; it is accountability in action.
              </li>
              <li>
                <strong className="text-white">6. Reflect and Learn:</strong> After the fact,
                evaluate the outcome. Did your decision produce the expected results? Were there
                unforeseen consequences? What would you do differently next time? This
                reflection turns experience into wisdom.
              </li>
            </ol>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">Common Pitfalls in Ethical Decision-Making</h3>
          <p className="mb-4">
            Even with a structured model, ethical decision-making is prone to certain errors.
            Be aware of these common pitfalls:
          </p>

          <ul className="list-disc list-inside space-y-2 mb-4 text-slate-300">
            <li>
              <strong>Rationalization:</strong> Convincing yourself that an unethical action is
              acceptable because the ends justify the means. They sometimes do — but
              "sometimes" is not a blank check.
            </li>
            <li>
              <strong>Diffusion of Responsibility:</strong> Assuming someone else will handle the
              ethical dimensions. "I just follow orders" is not an ethical defense — and it has
              not held up in court since Nuremberg.
            </li>
            <li>
              <strong>Ethical Framing Bias:</strong> Choosing the ethical framework that gives
              you the answer you want. If you are using utilitarianism only because it allows
              the convenient option, you are not doing ethics — you are doing rationalization
              with footnotes.
            </li>
            <li>
              <strong>Groupthink:</strong> Assuming the group's consensus is ethically sound.
              History is full of unethical decisions made by groups of smart people who all
              agreed with each other.
            </li>
          </ul>

          <JokeAside>
            "Everyone was doing it" did not work as an excuse in kindergarten, and it will not
            work in a congressional hearing. The ethical standards for intelligence professionals
            are higher than the playground standard for a reason.
          </JokeAside>
        </DeepDive>

        {/* ---- Section 4: Case Studies and Application ---- */}
        <DeepDive title="Case Studies and Application: When Ethics Meets Reality">
          <p className="mb-4">
            The best way to develop ethical judgment is to practice on real-world cases. The
            following case studies present ethical dilemmas drawn from actual intelligence
            challenges. As you read each case, work through the six-step model and consider
            what you would do.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Case Study 1: The Tainted Source</h3>
          <p className="mb-4">
            You are an intelligence analyst working on a counterterrorism assessment. A partner
            intelligence service — one with a troubling human rights record — shares information
            indicating an imminent attack. The information is specific and actionable. However,
            you have credible evidence that the partner service obtained this information through
            torture. Your agency's policy prohibits using information obtained through torture,
            but the Director of National Intelligence is asking whether an exception can be made
            given the imminent threat.
          </p>

          <p className="mb-4">
            <strong>Questions for analysis:</strong> Does the imminent threat change the ethical
            calculus? What are the consequences of using the information versus rejecting it?
            What does deontology say about using tainted information? What would a virtuous
            intelligence professional do?
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Case Study 2: The Friendly Target</h3>
          <p className="mb-4">
            You work in signals intelligence and discover through routine collection that the
            communications of an allied government's embassy contain evidence that the allied
            government is secretly negotiating a trade deal that would harm your country's
            economic interests. Your collection is legally authorized — the embassy is a
            legitimate foreign intelligence target. But using the information could damage a
            crucial diplomatic relationship. Not using it would mean failing to act on
            intelligence that affects national interests.
          </p>

          <p className="mb-4">
            <strong>Questions for analysis:</strong> Does the legality of the collection mean it
            is ethical to use the information? How do you weigh the value of the intelligence
            against the damage to the relationship? What are the consequences of each option
            for long-term intelligence-sharing partnerships?
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Case Study 3: The Algorithmic Bias</h3>
          <p className="mb-4">
            Your agency has deployed an AI system that flags potential threats based on
            patterns in communications data. The system is highly effective at identifying
            potential threats — but it has a statistically significant bias against certain
            ethnic and religious groups, flagging them at disproportionately high rates.
            Correcting the bias would reduce the system's overall effectiveness, potentially
            missing real threats. The agency leadership wants to deploy the system as-is,
            arguing that the bias is a statistical artifact, not intentional discrimination.
          </p>

          <p className="mb-4">
            <strong>Questions for analysis:</strong> Does the unintentional nature of the bias
            matter ethically? What are the civil liberties implications of deploying a biased
            system? How do you weigh the security benefits against the discriminatory impact?
            What does your ethical framework tell you about the right course of action?
          </p>

          <ProTip>
            <p>
              When analyzing case studies, write down your reasoning before discussing with
              others. This prevents you from being influenced by group dynamics and gives you a
              record of your independent ethical judgment. Compare your analysis with colleagues
              afterward — the discussion is where the deepest learning happens.
            </p>
          </ProTip>
        </DeepDive>

        <FieldExercise title="Ethical Decision-Making Simulation">
          <p className="mb-4">
            You are a mid-level intelligence manager. Your team has identified a foreign
            intelligence officer operating in your country under diplomatic cover. Standard
            practice would be to monitor the officer's activities, collect intelligence on their
            operations, and potentially attempt to recruit them as a double agent. However, you
            have learned that this officer has a teenage child who is a U.S. citizen and attends
            a local high school. Your team proposes using the child's social media activity as
            a vector for monitoring the officer's personal life and potential vulnerabilities.
          </p>
          <p className="mb-3 font-semibold text-white">Your task:</p>
          <ol className="list-decimal list-inside space-y-2 text-slate-300 mb-4">
            <li>Identify the ethical issues raised by monitoring the officer through their child's social media.</li>
            <li>Identify all stakeholders affected by this decision.</li>
            <li>Apply all three ethical frameworks (utilitarianism, deontology, virtue ethics) to evaluate the proposal.</li>
            <li>Using the six-step model, determine what decision you would make and document your reasoning.</li>
            <li>Present your decision and reasoning as if briefing your agency's general counsel.</li>
          </ol>
          <p className="text-sm text-amber-400/70 italic">
            Hint: The U.S. citizen child's Fourth Amendment rights do not disappear because their
            parent is a foreign intelligence officer. "Collateral collection" has limits — and
            ethics requires you to think about where they are.
          </p>
        </FieldExercise>

        <Debrief
          takeaways={[
            "Ethics in intelligence is not an abstract luxury — unethical operations produce worse outcomes: unreliable intelligence, lost trust, legal restrictions, and moral injury.",
            "Three major ethical frameworks — utilitarianism, deontology, and virtue ethics — each offer valuable but incomplete perspectives on intelligence dilemmas.",
            "A structured six-step decision-making model (identify issues, gather facts, identify stakeholders, evaluate options, decide, reflect) helps produce defensible ethical judgments.",
            "Common pitfalls include rationalization, diffusion of responsibility, ethical framing bias, and groupthink — all of which require active countermeasures.",
            "Real-world case studies demonstrate that ethical dilemmas rarely have perfect solutions — the goal is to make the best possible decision under difficult circumstances.",
            "Documenting ethical reasoning is not bureaucratic overhead — it is the foundation of accountability and the best defense when decisions are later scrutinized.",
          ]}
          humorSummary="When in doubt, ask yourself: would I be comfortable explaining this to a congressional committee, to my grandmother, and to my own conscience — possibly all three at the same time?"
        />
      </MicroLesson>

      <WhatsNext
        anotherTopic={{
          title: "Intelligence Oversight",
          description: "Learn how oversight systems ensure accountability in intelligence activities.",
          path: "/topics/intelligence-oversight",
        }}
        moreLearning={{
          title: "Legal Frameworks for Intelligence",
          description: "Explore the laws and regulations governing intelligence activities.",
          path: "/topics/legal-frameworks",
        }}
        advancedLearning={{
          title: "Privacy and Civil Liberties",
          description: "The tension between intelligence needs and individual privacy rights.",
          path: "/topics/privacy-civil-liberties",
        }}
      />
    </LessonContainer>
  )
}
