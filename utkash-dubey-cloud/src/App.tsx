import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Page, StyledLink } from "./utils/components";
import { drabDarkBrown, lighterDrabDarkBrown } from "./utils/colors";
import { Writing } from "./pages/writing";
import { CoolStuff } from "./pages/coolstuff";
import { useEffect, useState } from "react";

function App() {
    const [isMobileSizeScreen, setIsMobileSizeScreen] = useState(
        window.innerWidth <= 768
    );
    const [isNavOpen, setIsNavOpen] = useState(!isMobileSizeScreen);

    const handleWindowSizeChange = () => {
        setIsMobileSizeScreen(window.innerWidth <= 768);
        setIsNavOpen(!isMobileSizeScreen);
    };

    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);

    return (
        <Router>
            <div
                className="flex min-h-screen min-w-screen max-w-screen relative"
                style={{ backgroundColor: drabDarkBrown }}
            >
                <button
                    className="lg:hidden p-2 absolute top-4 left-4 z-50"
                    onClick={() => setIsNavOpen(!isNavOpen)}
                >
                    <div className="w-8 h-1 bg-white mb-1.5" />
                    <div className="w-8 h-1 bg-white mb-1.5" />
                    <div className="w-8 h-1 bg-white" />
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
                </nav>
                <main
                    className="p-16 w-full flex flex-col text-2xl text-left"
                    style={{ backgroundColor: lighterDrabDarkBrown }}
                >
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/writing" element={<Writing />} />
                        <Route path="/cool-stuff" element={<CoolStuff />} />
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
                <strong>contact</strong>
            </p>
            <p>first name last initial at gmail dot com</p>
        </Page>
    );
}

export default App;
