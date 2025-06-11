import { InlineTextFootnoteModal } from "../utils/components";

export function Writing() {
    return (
        <>
            <SolarBatteries />
            <hr />
            <br />
            <KorraEssay />
        </>
    );
}

function BlogPost({
    title,
    children,
    versionHistory,
}: {
    title: string;
    children?: React.ReactNode;
    versionHistory: { dateWritten: string; dateLastEdited?: string };
}) {
    return (
        <>
            <h1 className="text-5xl max-w-300">{title}</h1>
            <span className="font-light text-sm">
                {`written ${versionHistory.dateWritten}`}
            </span>
            {versionHistory.dateLastEdited && (
                <>
                    <span className="font-light text-sm">
                        {`last modified ${versionHistory.dateLastEdited}`}
                    </span>
                </>
            )}
            <div className="pt-12 pb-18 max-w-280">{children}</div>
        </>
    );
}
function SolarBatteries() {
    return (
        <BlogPost
            title="evaluating batteries for our solar system 🌞"
            versionHistory={{ dateWritten: "jun 2025" }}
        >
            <p>
                <strong>Jun 2 2025:</strong> I've started looking into solar
                batteries, and I'll be (sporadically) using this as a journal of
                sorts.
            </p>
            <br />
            <p>
                For today I'll just put down the factors that, as far as I know
                now, may be relevant. And I'll gather the details and learn more
                at a different time:
            </p>
            <ul className="pl-5 list-disc list-inside">
                <li>current (ha) solar generation</li>
                <li>kwh of electricity we use from the grid</li>
                <li>potential (ha) solar generation w/ new panels</li>
                <li>
                    PGE bill factors: we're on E-ELEC because AFAIK PGE makes us
                </li>
                <li>
                    PGE solar compensation: we're on NEM2, presumably changing
                    our solar system 🌌 would shift us to NEM3. And I read
                    somewhere that we'll all be switched to NEM3 soon?
                </li>
                <li>What is "true-up?"</li>
                <li>
                    how often + how costly are PGE outages in my area?
                    (anecdotally, they're too frequent in the summer)
                </li>
                <li>
                    regulations, incentives, and political landscape of solar
                    batteries
                </li>
                <li>solar battery expected lifetime + warranty terms</li>
                <li>
                    presumably this isn't *really* a factor, but I'll look into
                    it just in case: battery safety
                </li>
            </ul>
        </BlogPost>
    );
}

function KorraEssay() {
    return (
        <BlogPost
            title="from a weekly writing prompt with friends"
            versionHistory={{ dateWritten: "feb 2021" }}
        >
            <strong>
                Describe one of your favorite pieces of art or media that your
                reader probably hasn't experienced. This may be a niche TV show
                that rarely fails to make you laugh, a not-quite-mainstream song
                that you cherish, a video game that you love, or a lesser-known
                painting that you find riveting.* Why do you like it? Describe
                this in whatever style you feel like—be as creative or as direct
                as you want! *this requirement is pretty lax, it could be a
                mainstream thing that many have heard of, but you feel is still
                underappreciated. Just don't do Star Wars or something like that
                lol
            </strong>
            <br />
            <br />
            <hr />
            <br />
            <p>Water 💦</p>
            <br />
            <p>Earth 🪨</p>
            <br />
            <p>Fire 🔥</p>
            <br />
            <p>Air 💨</p>
            <br />
            <p>
                In 2021, it is well-established that{" "}
                <em>Avatar: The Last Airbender</em> is nothing short of a
                masterpiece.
            </p>
            <br />
            <p>
                <em>ATLA</em> is set in a pre-industrial world where some people
                are born with the ability to control one of the four elements:
                water, earth, fire, or air. The act of controlling an element is
                called bending, and a person doing the bending is called a
                bender. Mirroring the four elements, there are four nations, the
                Earth Kingdom, the Fire Nation, the Water Tribe, and the Air
                Nomads, and conflict ensues when the Fire Nation attacks and
                invades the other three nations. The Avatar, the one person able
                to bend all four elements, and the one whose de facto
                responsibility is to ensure peace and balance in the world, has
                been missing, allowing the Fire Nation to continue their
                conquest and aggression for nearly 100 years. <em>ATLA</em>{" "}
                follows the new Avatar, a 12-year-old Air Nomad monk named Aang,
                in his quest to master all four elements and end the war.
            </p>
            <br />
            <p>
                <em>ATLA</em> checks all the boxes of a basic cartoon—its
                animation style, goofball humor, and adventurous, fantastical
                plot are designed to appeal to the audience of its network,
                Nickelodeon. But <em>ATLA</em> accomplishes much more than that.
                Through high-quality storytelling, <em>ATLA</em> develops its
                characters and shows us their maturations. Through its
                animation, soundtrack, and pacing, it instills a love for
                nature, demonstrates happiness in serenity, and teaches
                kindness. It thoughtfully explores many mature themes, including
                sexism, revenge, destiny, genocide, systemic discrimination,
                spiritualism, loss, honor, abusive relationships, and the
                tragedies of war—themes that its pre-teen audience are likely
                underexposed to. The most central theme is arguably the nuances
                of good and evil and the complexity of villainy, and it delves
                into this dark subject while balancing the needs of its young
                and impressionable audience. It does all this without being
                in-your-face, "here's the lesson" about it, and remembers that
                at its heart, it's still a children's cartoon.
            </p>
            <br />
            <p>
                <em>ATLA</em> is beautiful, and that's well-known. So why am I
                here writing about it?
            </p>
            <br />
            <p>
                Well, I'm actually not here to tell you about <em>ATLA</em>. I'm
                actually here to stand up for its unpopular sister,{" "}
                <em>The Legend of Korra</em>.{" "}
            </p>
            <br />
            <p>
                <em>TLoK</em> is a sequel series that follows 17-year-old Korra,
                the Avatar after Aang, as she completes her bending training and
                learns to be the guardian of peace and justice{" "}
                <s>
                    <a
                        href="https://www.youtube.com/watch?v=MJ9Fi4izrYc"
                        target="_blank"
                        className="text-amber-300 hover:text-amber-600 underline"
                    >
                        in the Old Republic
                    </a>
                </s>{" "}
                in a rapidly changing, increasingly connected, industrializing
                world. Korra's adventures are centered around Republic City, an
                urbanized metropolis that was formed when a Fire Nation colony
                in the Earth Kingdom transitioned to be independent of the four
                nations. Unlike Aang, Korra starts out feisty, combative, and
                eager to fulfill her duties as the Avatar, and yet, unlike{" "}
                <em>ATLA</em>, <em>TLoK</em> doesn't have a single overarching
                conflict—an outlet for her "Avatar duties"—to connect the entire
                series.
            </p>
            <br />
            <p>
                <em>TLoK</em> differs from <em>ATLA</em> in many more ways; the
                industrialization and urbanization of <em>TLoK</em> strips away
                the love for nature and ideas of spiritualism that <em>ATLA</em>{" "}
                emphasized
                <InlineTextFootnoteModal
                    jsx={
                        <div>
                            This isn't purely in vain&mdash;in many ways,{" "}
                            <em>TLoK</em> contrasts starkly with <em>ATLA</em>{" "}
                            <strong>by design</strong>. The rapidly-urbanized
                            world of <em>TLoK</em> is meant to signal Korra's
                            duty; Aang was a calm spiritual leader when the
                            world needed an authoritative, powerful bender,
                            Korra was a powerful bender when the world needed
                            the Avatar's guidance.
                        </div>
                    }
                >
                    1
                </InlineTextFootnoteModal>{" "}
                . Possibly in an attempt to balance the previous point and add
                to the lore, <em>TLoK</em> over-explains the mechanics and
                origins of the Avatar and the Spirit World, which douses the
                embers of mystery and fantasy that <em>ATLA</em> worked so hard
                to sow. <em>TLoK</em> also seemingly succumbs to patting itself
                on the back for how awesome their world is, and how cool
                fighting while using the elements would be. Bending is no longer
                a sacred art; it is a collectible that merits a "woahhh, sweet!"
                The show also essentially poses the rhetorical question, "How
                sick would it be to be the Avatar?!?" This is clear as glass in
                this flashback, in which a pre-K Korra is shown proudly
                displaying her bending prowess, exclaiming,{" "}
                <a
                    href="https://www.youtube.com/watch?v=uUjDFm5H27g"
                    target="_blank"
                    className="text-amber-300 hover:text-amber-600 underline"
                >
                    "I'm the Avatar! You gotta deal with it!"
                </a>
            </p>
            <br />
            <p>
                <a
                    href="https://www.youtube.com/watch?v=kIXuQdS4mPM"
                    target="_blank"
                    className="text-amber-300 hover:text-amber-600 underline"
                >
                    https://www.youtube.com/watch?v=kIXuQdS4mPM
                </a>{" "}
                (watch till end)
            </p>
            <br />
            <p>
                Before the series had even settled, and in less than two
                minutes, <em>TLoK</em> tore down the humility and restraint that{" "}
                <em>ATLA</em> championed, and understandably, audiences were not
                fans of the show. Don't believe me?
            </p>
            <br />
            <p>
                <a
                    href="https://youtu.be/bmKaQqinWKY?t=125"
                    target="_blank"
                    className="text-amber-300 hover:text-amber-600 underline"
                >
                    https://youtu.be/bmKaQqinWKY?t=125
                </a>{" "}
                (watch till 2:40)
            </p>
            <br />
            <em>TLoK</em> is riddled with many more issues. It introduced far
            too many characters too quickly, which prevented the show from
            properly establishing and developing any of them. <em>ATLA</em> was
            blessed with 61 episodes and had 12 core characters, while{" "}
            <em>TLoK</em> used its 52 episodes to distribute screen-time and
            dialogue over 22—nearly twice as many. On top of that, since{" "}
            <em>TLoK</em> didn't have one central conflict; it needed to
            introduce, develop, and resolve new antagonists in{" "}
            <strong>each</strong> of its four seasons, which came at the expense
            of time for its protagonists. The result is a hodgepodge of rushed
            relationships, a reliance on tropes to substitute for individuality,
            unclear motivations, and generally weak characters.
            <p>
                However, I argue that much of the blame for <em>TLoK</em>'s
                mediocrity falls on the network, and not the writers. Despite{" "}
                <em>ATLA</em>, one of the most successful and acclaimed shows in
                Nickelodeon's history, <em>TLoK</em> was originally only granted
                one season of only 13 episodes. Then, after a reasonably
                successful first season, at least as far as Nickelodeon's
                standards go, <em>TLoK</em> was bequeathed a season two. By the
                end of season two, the fandom had more-or-less settled on the
                show being painfully below-average, so Nickelodeon permitted two
                more online-only seasons to cash-in and wrap up what the
                showrunners had started.
            </p>
            <br />
            <p>
                But blaming Nickelodeon doesn't absolve <em>TLoK</em> of its
                glaring issues. Maybe it explains most of them, sure, but that
                doesn't suddenly make <em>TLoK</em> good. That would be akin to
                arguing that the dick sandwich I made last week was good because
                all I had in my pantry was bread, ketchup, and dick.
            </p>
            <br />
            <p>
                So why on earth would I, a bona fide asshole when it comes to
                art criticism, defend this clusterfuck? Yes, I know the
                vulgarity is sudden and a bit much.
            </p>
            <br />
            <p>
                The short answer is that I love <em>TLoK</em> because Korra's
                development in seasons three and four is so genuine and
                revolutionary that I have to defend it. After the writers'
                authenticity and capabilities were put into serious question,
                they came back and showed us true art once more. Let me set the
                scene...though for brevity and to avoid spoiling too much, you
                should know that I'm only going to talk about season three.
            </p>
            <br />
            <p>
                By the start of season three, Korra's influence on not just
                Republic City, but the world, has grown tremendously. In the
                previous season, she created a physical gateway in the middle of
                Republic City that connected the spirit world to the physical
                world, which opened up a whole new can of beetleworms
                <InlineTextFootnoteModal
                    jsx={
                        <div>
                            For those who haven't seen <em>ATLA</em>, this is a
                            joke about{" "}
                            <a
                                href="https://avatar.fandom.com/wiki/Saber-tooth_moose_lion"
                                target="_blank"
                                className="text-amber-300 hover:text-amber-600 underline"
                            >
                                the
                            </a>{" "}
                            <a
                                href="https://avatar.fandom.com/wiki/Turtle_duck"
                                target="_blank"
                                className="text-amber-300 hover:text-amber-600 underline"
                            >
                                many
                            </a>{" "}
                            <a
                                href="https://avatar.fandom.com/wiki/Platypus_bear"
                                target="_blank"
                                className="text-amber-300 hover:text-amber-600 underline"
                            >
                                hybrid
                            </a>{" "}
                            <a
                                href="https://avatar.fandom.com/wiki/Otter_penguin"
                                target="_blank"
                                className="text-amber-300 hover:text-amber-600 underline"
                            >
                                animals
                            </a>{" "}
                            of <em>ATLA</em>.
                        </div>
                    }
                >
                    2
                </InlineTextFootnoteModal>{" "}
                for regular people and benders alike. Conflict in season three
                arises when a group of four extremists break out of prison.
                These extremists are led by Zaheer, a staunch anarchist, whose
                aim is to end the Avatar entirely—he plans to kill Korra while
                she's in the Avatar state, so that the reincarnation cycle ends.{" "}
            </p>
            <br />
            <p>
                Zaheer proves to be an incredibly difficult villain for Korra.
                His stoic charisma is chilling when juxtaposed with his extreme
                views, and his dedication to his cause is unmatched in the
                series—you get the sense that he's ready to give up everything
                for "true freedom."
            </p>
            <br />" When we dispatch you in the Avatar State, the cycle will
            end. So we lucky few, this band of brothers and sisters in anarchy,
            are witnessing the beginning of an era of true freedom. Together, we
            will forge a world without Kings and Queens—without borders or
            nations. Where Man's only allegiance is to himself, and those he
            loves. We will return to the true balance...of natural order. And
            though you will never again be reborn, your name will echo
            throughout history: Korra, the last Avatar.
            <p>&ndash;;Zaheer, to Korra</p>
            <br />
            <p>
                Zaheer's whole schtick is essentially that anarchism is the only
                system that enables true freedom, and that the existence of the
                Avatar, a practically all-powerful authority figure who answers
                to no one, is anything but compatible with that. In other words,
                Zaheer is similar to the average <em>TLoK</em> critic—he takes
                issue with pre-K Korra's "I'm the Avatar! You gotta deal with
                it!"
            </p>
            <br />
            <p>
                Zaheer is a perfect foil to Korra, too—though Korra excelled at
                the combative nature of being the Avatar, she toiled mightily
                with the spiritual aspects, while Zaheer is so capable that he's
                able to enter the spirit world through meditation alone. Zaheer
                is also disciplined and mostly expressionless, whereas Korra has
                been smiley and energetic since season 1, episode 1.
            </p>
            <br />
            <p>
                Throughout season three, Zaheer's efforts torment Korra. At one
                point, Zaheer and his group have Korra in chains as they try to
                torture and kill her. To end season three, Korra and her allies
                fight Zaheer as he continues to attempt to end the Avatar cycle.
                Zaheer's resolve is nearly impossible to overcome, though, and
                it almost feels like the show might actually conclude with
                Korra's death. The battle ends with Aang's granddaughter,
                Jinora, and Korra narrowly capturing Zaheer, though not without
                loss—for the duration of the battle, Korra was poisoned with
                mercury, which led to paralysis in her legs.{" "}
            </p>
            <br />
            <p>
                After Zaheer's capture, Korra is unable to walk, which in many
                respects, is a win for Zaheer—at least one lifetime of the
                Avatar is wasted. We see Korra, who was so excited and eager to
                be a great Avatar since the day we met her, defeated. A once
                annoyingly-cheerful girl is completely broken, and reduced to
                hard depression.
            </p>
            <br />
            <p>
                Season three concludes with a ceremony honoring Jinora's
                air-bending mastery—she sure demonstrated it when she captured
                Zaheer. Because of Korra's new shortcomings, the Air Nomads, led
                by Aang's son and Jinora, vow to fill Korra's role and ensure
                balance and peace in the world, practically acknowledging that
                Korra won't be able to "be" the Avatar. And as Jinora reveals
                her shaved head and new arrow tattoos, bearing an uncanny
                resemblance to Aang, Korra is reminded of how loved and
                successful her predecessor was, and that comparatively, she's a
                failure, both in her world and in ours.{" "}
            </p>
            <br />
            <p>
                <a
                    href="https://www.youtube.com/watch?v=jyfwJ-Q5I4A"
                    target="_blank"
                    className="text-amber-300 hover:text-amber-600 underline"
                >
                    https://www.youtube.com/watch?v=jyfwJ-Q5I4A
                </a>{" "}
                (watch till end)
            </p>
            <br />
            <p>
                Korra's story in season three resonates with me in a way that I
                couldn't previously fathom—Korra's mannerisms and attitude were
                incredibly irritating in seasons one and two, but once those
                were taken away and replaced with devastation, their value
                became clear, and I felt guilt for ever chastising her joy. The
                beauty of the season extends even beyond Korra's growth. I
                almost feel as if the writers were trying to tell us that they
                were head-over-heels excited for <em>TLoK</em>, but comparisons
                to their perfect previous show turned that excitement into a
                silent sorrow.
            </p>
            <br />
            <p>
                The writers turned a bad couple seasons into a purposeful
                experience, and now that I've seen season three, I can't look
                back at seasons one and two with the same overly-critical eye.
                The writers' ability to express these emotions and evoke so much
                from me are why I will never tolerate uncontextualized slander
                for <em>ATLA</em>'s beautiful, unloved sister,{" "}
                <em>The Legend of Korra</em>.
            </p>
            <br />
            <a
                href="https://www.youtube.com/watch?v=6xW83hx4P7M"
                target="_blank"
                className="text-amber-300 hover:text-amber-600 underline"
            >
                https://www.youtube.com/watch?v=6xW83hx4P7M
            </a>
        </BlogPost>
    );
}
