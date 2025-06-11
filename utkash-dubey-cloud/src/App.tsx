import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import { Page, StyledLink } from "./utils/components";
import {
    drabDarkBrown,
    lighterDrabDarkBrown,
    platinum,
    resedaGreen,
} from "./utils/colors";
import { Writing } from "./pages/writing";
import { CoolStuff } from "./pages/coolstuff";
import { useEffect, useRef, useState } from "react";
import { Food } from "./pages/food";
import { Bracket } from "./pages/bracket";

export function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {
    const [isMobileSizeScreen, setIsMobileSizeScreen] = useState(
        window.innerWidth < 1024
    );
    const [isNavOpen, setIsNavOpen] = useState(!isMobileSizeScreen);

    const handleWindowSizeChange = () => {
        setIsMobileSizeScreen(window.innerWidth < 1024);
        if (window.innerWidth >= 1024) {
            setIsNavOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);

    const navRef = useRef<HTMLDivElement>(null);
    const navHamburger = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                navRef.current &&
                !navRef.current.contains(event.target as Node) &&
                navHamburger.current &&
                !navHamburger.current.contains(event.target as Node)
            ) {
                setIsNavOpen(false);
            }
        }
        if (isNavOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isNavOpen]);

    return (
        <Router>
            <ScrollToTop />
            <div
                className="flex min-h-screen min-w-screen max-w-screen relative"
                style={{ backgroundColor: drabDarkBrown }}
            >
                <button
                    className="fixed p-2 top-4 left-3 z-50"
                    onClick={() => setIsNavOpen(!isNavOpen)}
                    style={{
                        visibility: isMobileSizeScreen ? "visible" : "hidden",
                    }}
                    ref={navHamburger}
                >
                    {isNavOpen && (
                        <>
                            <div
                                className="w-8 h-1 mb-1.5"
                                style={{ backgroundColor: resedaGreen }}
                            />
                            <div
                                className="w-8 h-1 mb-1.5"
                                style={{ backgroundColor: resedaGreen }}
                            />
                            <div
                                className="w-8 h-1"
                                style={{ backgroundColor: resedaGreen }}
                            />
                        </>
                    )}
                    {!isNavOpen && (
                        <>
                            <div
                                className="w-8 h-1 mb-1.5"
                                style={{
                                    backgroundColor: platinum,
                                }}
                            />
                            <div
                                className="w-8 h-1 mb-1.5"
                                style={{
                                    backgroundColor: platinum,
                                }}
                            />
                            <div
                                className="w-8 h-1"
                                style={{
                                    backgroundColor: platinum,
                                }}
                            />
                        </>
                    )}
                </button>

                <nav
                    className={`
                        fixed top-0 left-0 h-full w-64 p-14 flex flex-col gap-4 items-start
                        transform ${
                            isNavOpen ? "translate-x-0" : "-translate-x-full"
                        }
                        transition-transform duration-300
                        z-40
                        lg:static lg:translate-x-0 lg:max-h-screen lg:min-h-screen
                    `}
                    ref={navRef}
                    style={{ backgroundColor: drabDarkBrown }}
                >
                    <StyledLink
                        to="/"
                        onClick={() => setIsNavOpen(!isMobileSizeScreen)}
                    >
                        me
                    </StyledLink>
                    <StyledLink
                        to="/writing"
                        onClick={() => setIsNavOpen(!isMobileSizeScreen)}
                    >
                        writing
                    </StyledLink>
                    <StyledLink
                        to="/cool-stuff"
                        onClick={() => setIsNavOpen(!isMobileSizeScreen)}
                    >
                        cool stuff
                    </StyledLink>
                    <StyledLink
                        to="/food"
                        onClick={() => setIsNavOpen(!isMobileSizeScreen)}
                    >
                        food
                    </StyledLink>
                </nav>
                <main
                    className="p-16 w-full flex flex-col text-2xl text-left"
                    style={{ backgroundColor: lighterDrabDarkBrown }}
                >
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/writing" element={<Writing />} />
                        <Route path="/cool-stuff" element={<CoolStuff />} />
                        <Route path="/food" element={<Food />} />
                        <Route path="/bracket" element={<Bracket />}></Route>
                        <Route
                            path="*"
                            element={
                                <h1 className="text-6xl">Page Not Found</h1>
                            }
                        />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

function Home() {
    return (
        <Page title="Utkash Dubey">
            <p>software engineer</p>
            <br />
            <p>
                <strong>location</strong>
            </p>
            <p>california bay area</p>
            <br />
            <p>
                <strong>github</strong>
            </p>
            <p>
                <a
                    href="https://github.com/utkashd"
                    target="_blank"
                    className="text-amber-300 hover:text-amber-600 underline"
                >
                    https://github.com/utkashd
                </a>
            </p>
            <br />
            <p>
                <strong>contact</strong>
            </p>
            <p>first name last initial at gmail dot com</p>
        </Page>
    );
}

export default App;
