import { Page } from "../utils/components";

function FavoriteAlbums() {
    type AlbumInfo = { aotyLink: string; albumName: string };
    enum AlbumCategory {
        HipHop = "hip hop",
        NotHipHop = "not hip hop",
    }
    const albumsByCategory: Record<AlbumCategory, AlbumInfo[]> = {
        [AlbumCategory.HipHop]: [
            {
                aotyLink:
                    "https://www.albumoftheyear.org/album/29250-kendrick-lamar-to-pimp-a-butterfly.php",
                albumName: "To Pimp a Butterfly",
            },
            {
                aotyLink:
                    "https://www.albumoftheyear.org/album/3840-kendrick-lamar-good-kid-maad-city.php",
                albumName: "good kid, m.A.A.d city",
            },
            {
                aotyLink:
                    "https://www.albumoftheyear.org/album/494992-kendrick-lamar-mr-morale-the-big-steppers.php",
                albumName: "Mr. Morale & The Big Steppers",
            },
            {
                aotyLink:
                    "https://www.albumoftheyear.org/album/321056-jid-the-forever-story.php",
                albumName: "The Forever Story",
            },
            {
                aotyLink:
                    "https://www.albumoftheyear.org/album/127155-jid-dicaprio-2.php",
                albumName: "DiCaprio 2",
            },
            {
                aotyLink:
                    "https://www.albumoftheyear.org/album/484-kanye-west-late-registration.php",
                albumName: "Late Registration",
            },
            {
                aotyLink:
                    "https://www.albumoftheyear.org/album/435-kanye-west-graduation.php",
                albumName: "Graduation",
            },
            {
                aotyLink:
                    "https://www.albumoftheyear.org/album/1998-kanye-west-my-beautiful-dark-twisted-fantasy.php",
                albumName: "My Beautiful Dark Twisted Fantasy",
            },
            {
                aotyLink:
                    "https://www.albumoftheyear.org/album/48146-kanye-west-the-life-of-pablo.php",
                albumName: "The Life of Pablo",
            },
            {
                aotyLink:
                    "https://www.albumoftheyear.org/album/112577-kanye-west-ye.php",
                albumName: "ye",
            },
            {
                aotyLink:
                    "https://www.albumoftheyear.org/album/579-outkast-stankonia.php",
                albumName: "Stankonia",
            },
            {
                aotyLink:
                    "https://www.albumoftheyear.org/album/99139-various-artists-black-panther-the-album.php",
                albumName: "Black Panther: The Album",
            },
            {
                aotyLink:
                    "https://www.albumoftheyear.org/album/444-clipse-hell-hath-no-fury.php",
                albumName: "Hell Hath No Fury",
            },
            {
                aotyLink:
                    "https://www.albumoftheyear.org/album/461680-pusha-t-its-almost-dry.php",
                albumName: "It's Almost Dry",
            },
            {
                aotyLink:
                    "https://www.albumoftheyear.org/album/8509-earl-sweatshirt-doris.php",
                albumName: "Doris",
            },
            {
                aotyLink:
                    "https://www.albumoftheyear.org/album/32261-earl-sweatshirt-solace.php",
                albumName: "solace",
            },
            {
                aotyLink:
                    "https://www.albumoftheyear.org/album/79796-vince-staples-big-fish-theory.php",
                albumName: "Big Fish Theory",
            },
            {
                aotyLink:
                    "https://www.albumoftheyear.org/album/503-madvillain-madvillainy.php",
                albumName: "Madvillainy",
            },
            {
                aotyLink:
                    "https://www.albumoftheyear.org/album/4127-wu-tang-clan-enter-the-wu-tang-36-chambers.php",
                albumName: "Enter the Wu-Tang (36 Chambers)",
            },
            {
                aotyLink:
                    "https://www.albumoftheyear.org/album/5768-2pac-me-against-the-world.php",
                albumName: "Me Against the World",
            },
            {
                aotyLink:
                    "https://www.albumoftheyear.org/album/82568-jay-z-444.php",
                albumName: "4:44",
            },
            {
                aotyLink:
                    "https://www.albumoftheyear.org/album/3014-asap-rocky-liveloveasap.php",
                albumName: "LIVE.LOVE.A$AP",
            },
            {
                aotyLink:
                    "https://www.albumoftheyear.org/album/2891-danny-brown-xxx.php",
                albumName: "XXX",
            },
            {
                aotyLink:
                    "https://www.albumoftheyear.org/album/59995-danny-brown-atrocity-exhibition.php",
                albumName: "Atrocity Exhibition",
            },
        ],
        [AlbumCategory.NotHipHop]: [
            {
                aotyLink:
                    "https://www.albumoftheyear.org/album/795320-andre-3000-new-blue-sun.php",
                albumName: "New Blue Sun",
            },
            {
                aotyLink:
                    "https://www.albumoftheyear.org/album/5593-marvin-gaye-whats-going-on.php",
                albumName: "What's Going On",
            },
            {
                aotyLink:
                    "https://www.albumoftheyear.org/album/2131-trent-reznor-atticus-ross-the-social-network.php",
                albumName: "The Social Network",
            },
            {
                aotyLink:
                    "https://www.albumoftheyear.org/album/14009-arcade-fire-and-owen-pallett-her-original-motion-picture-score.php",
                albumName: "Her (Original Motion Picture Score)",
            },
            {
                aotyLink:
                    "https://www.albumoftheyear.org/album/49986-vangelis-blade-runner.php",
                albumName: "Blade Runner",
            },

            {
                aotyLink:
                    "https://www.albumoftheyear.org/album/23437-elton-john-tim-rice-hans-zimmer-the-lion-king.php",
                albumName: "The Lion King",
            },
            {
                aotyLink:
                    "https://www.albumoftheyear.org/album/884124-hans-zimmer-dune-part-two.php",
                albumName: "Dune: Part Two",
            },
            {
                aotyLink:
                    "https://www.albumoftheyear.org/album/91425-hans-zimmer-benjamin-wallfisch-blade-runner-2049-original-motion-picture-soundtrack.php",
                albumName: "Blade Runner 2049",
            },
            {
                aotyLink:
                    "https://www.albumoftheyear.org/album/4939-hans-zimmer-james-newton-howard-the-dark-knight.php",
                albumName: "The Dark Knight",
            },
            {
                aotyLink:
                    "https://www.albumoftheyear.org/album/23458-hans-zimmer-the-last-samurai.php",
                albumName: "The Last Samurai",
            },
            {
                aotyLink:
                    "https://www.albumoftheyear.org/album/23435-hans-zimmer-interstellar.php",
                albumName: "Interstellar",
            },
        ],
    };

    return (
        <Page
            title="some of my favorite albums"
            subtitle="when i write it out like this, my taste does seem a bit basic"
            shortUniqueNameForId={"albums"}
        >
            <ul>
                {Object.entries(albumsByCategory).map(
                    ([albumCategory, albumInfos]) => {
                        return (
                            <li key={albumCategory}>
                                {albumCategory}
                                <ul>
                                    {albumInfos.map((albumInfo: AlbumInfo) => {
                                        return (
                                            <li key={albumInfo.albumName}>
                                                <a
                                                    href={albumInfo.aotyLink}
                                                    target="_blank"
                                                    className="text-amber-300 hover:text-amber-600 underline"
                                                >
                                                    {albumInfo.albumName}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </li>
                        );
                    }
                )}
            </ul>
        </Page>
    );
}

export function CoolStuff() {
    return (
        <>
            <FavoriteAlbums />
            <Page title="good shows i've seen" shortUniqueNameForId={"shows"}>
                <ul>
                    <li>Andor</li>
                    <li>Avatar: The Last Airbender</li>
                    <li>The Wire</li>
                    <li>Atlanta</li>
                    <li>Teen Titans</li>
                    <li>Cowboy Bebop</li>
                    <li>True Detective Season 3</li>
                    <li>Babylon Berlin</li>
                    <li>Silo</li>
                    <li>Peep Show</li>
                </ul>
            </Page>
            <Page
                title="notable athletes i've seen play in-person"
                shortUniqueNameForId={"athletes"}
            >
                <ul>
                    <li>Rafael Nadal (Indian Wells)</li>
                    <li>
                        Andy Roddick (SAP Open, a charity exhibition I can't
                        remember)
                    </li>
                    <li>Roger Federer (Indian Wells, Match for Africa)</li>
                    <li>Novak Djokovic (Indian Wells)</li>
                    <li>Stan Wawrinka (Indian Wells)</li>
                    <li>Dominic Thiem (Indian Wells)</li>
                    <li>Daniil Medvedev (Indian Wells)</li>
                    <li>Hubert Hurkacz (Indian Wells)</li>
                    <li>Lleyton Hewitt (SAP Open)</li>
                    <li>Mardy Fish (SAP Open)</li>
                    <li>Yannick Hanfmann (USC)</li>
                    <li>
                        Jeremy Lin (Piazza's in Palo Alto, didn't see him play)
                    </li>
                    <li>Wayne Gretzky (USC 2017, didn't see him play)</li>
                    <li>Steph Curry (Oracle, Chase)</li>
                    <li>Kevin Durant (Oracle)</li>
                    <li>Klay Thompson (Oracle, Chase)</li>
                    <li>Draymond Green (Oracle, Chase)</li>
                    <li>Andrew Wiggins (Chase)</li>
                    <li>Kyle Lowry (Oracle)</li>
                    <li>DeMar DeRozan (Oracle)</li>
                    <li>Tyrese Haliburton (Chase)</li>
                    <li>TJ McConnell (Chase)</li>
                    <li>Baron Davis (Oracle)</li>
                    <li>Steve Nash (Oracle)</li>
                    <li>Amar'e Stoudemire (Oracle)</li>
                    <li>Tyrese Maxey (Golden 1)</li>
                    <li>De'Aaron Fox (Golden 1)</li>
                    <li>Domantas Sabonis (Golden 1)</li>
                    <li>LeBron James (Staples)</li>
                    <li>Luka Doncic (Staples)</li>
                    <li>LaMelo Ball (Staples)</li>
                    <li>Miles Bridges (Staples)</li>
                </ul>
            </Page>
            <Page
                title="underrated youtube channels"
                shortUniqueNameForId={"yt"}
            >
                <ul>
                    <li>
                        <a
                            href="https://www.youtube.com/@w2kitchen"
                            target="_blank"
                            className="text-amber-300 hover:text-amber-600 underline"
                        >
                            W2 Kitchen
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/@hueezer"
                            target="_blank"
                            className="text-amber-300 hover:text-amber-600 underline"
                        >
                            Huy Nguyen
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/@ChrisYoungCooks"
                            target="_blank"
                            className="text-amber-300 hover:text-amber-600 underline"
                        >
                            Chris Young
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/@MagicIngredients"
                            target="_blank"
                            className="text-amber-300 hover:text-amber-600 underline"
                        >
                            小高姐的 Magic Ingredients
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/@theartofplating"
                            target="_blank"
                            className="text-amber-300 hover:text-amber-600 underline"
                        >
                            The Art of Plating
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/@daywithmei"
                            target="_blank"
                            className="text-amber-300 hover:text-amber-600 underline"
                        >
                            daywithmei
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/@lapatededom"
                            target="_blank"
                            className="text-amber-300 hover:text-amber-600 underline"
                        >
                            La Pâte de Dom
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/@JulesCookingGlobal"
                            target="_blank"
                            className="text-amber-300 hover:text-amber-600 underline"
                        >
                            Jules Cooking
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/@ParkerHallberg"
                            target="_blank"
                            className="text-amber-300 hover:text-amber-600 underline"
                        >
                            Parker Hallberg
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/@WayofRamen"
                            target="_blank"
                            className="text-amber-300 hover:text-amber-600 underline"
                        >
                            Way of Ramen
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/@PastryLivingwithAya"
                            target="_blank"
                            className="text-amber-300 hover:text-amber-600 underline"
                        >
                            Pastry Living with Aya
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/@sheldoskitchen"
                            target="_blank"
                            className="text-amber-300 hover:text-amber-600 underline"
                        >
                            sheldo's kitchen
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/@saintcavish"
                            target="_blank"
                            className="text-amber-300 hover:text-amber-600 underline"
                        >
                            saintcavish
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/@PolylogCS"
                            target="_blank"
                            className="text-amber-300 hover:text-amber-600 underline"
                        >
                            Polylog
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/@tom-delalande"
                            target="_blank"
                            className="text-amber-300 hover:text-amber-600 underline"
                        >
                            Tom Delalande
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/@brycedotco"
                            target="_blank"
                            className="text-amber-300 hover:text-amber-600 underline"
                        >
                            Bryce Bostwick
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/@AntonPutra"
                            target="_blank"
                            className="text-amber-300 hover:text-amber-600 underline"
                        >
                            Anton Putra
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/@backpine"
                            target="_blank"
                            className="text-amber-300 hover:text-amber-600 underline"
                        >
                            backpine labs
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/@kevinfaang"
                            target="_blank"
                            className="text-amber-300 hover:text-amber-600 underline"
                        >
                            Kevin Fang
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/@BridgeStuart"
                            target="_blank"
                            className="text-amber-300 hover:text-amber-600 underline"
                        >
                            Bridge Stuart
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/@AccentedCinema"
                            target="_blank"
                            className="text-amber-300 hover:text-amber-600 underline"
                        >
                            Accented Cinema
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/@TheHouseofTabula"
                            target="_blank"
                            className="text-amber-300 hover:text-amber-600 underline"
                        >
                            The House of Tabula (FKA The Cinema Cartography)
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/@FramesOfEmpathy"
                            target="_blank"
                            className="text-amber-300 hover:text-amber-600 underline"
                        >
                            Frames of Empathy
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/@kaptainkristian"
                            target="_blank"
                            className="text-amber-300 hover:text-amber-600 underline"
                        >
                            kaptainkristian
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/@LikeStoriesofOld"
                            target="_blank"
                            className="text-amber-300 hover:text-amber-600 underline"
                        >
                            Like Stories of Old
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/@youthnation1"
                            target="_blank"
                            className="text-amber-300 hover:text-amber-600 underline"
                        >
                            Logos Made Flesh
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/@NineNerdYards"
                            target="_blank"
                            className="text-amber-300 hover:text-amber-600 underline"
                        >
                            NineNerdYards
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/@SolePorpoise"
                            target="_blank"
                            className="text-amber-300 hover:text-amber-600 underline"
                        >
                            SolePorpoise
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/@trago6140"
                            target="_blank"
                            className="text-amber-300 hover:text-amber-600 underline"
                        >
                            Trago
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/@WitandFolly"
                            target="_blank"
                            className="text-amber-300 hover:text-amber-600 underline"
                        >
                            wit and folly
                        </a>
                    </li>
                </ul>
            </Page>
        </>
    );
}
