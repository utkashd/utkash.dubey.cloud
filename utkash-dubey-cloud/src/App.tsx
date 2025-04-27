import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Page } from "./utils/components";
import { drabDarkBrown, lighterDrabDarkBrown, ashGray } from "./utils/colors";
import { Writing } from "./pages/writing";
import { CoolStuff } from "./pages/coolstuff";

function App() {
    function StyledLink({
        to,
        children,
    }: {
        to: string;
        children: React.ReactNode;
    }) {
        return (
            <div className="text-2xl">
                <Link to={to} style={{ color: "white" }}>
                    {children}
                </Link>
            </div>
        );
    }

    return (
        <Router>
            <div
                className="flex min-h-screen min-w-screen max-w-screen"
                style={{ backgroundColor: drabDarkBrown }}
            >
                <nav className="w-80 max-h-screen min-h-screen p-14 flex flex-col gap-4 items-start">
                    <StyledLink to="/">me</StyledLink>
                    <StyledLink to="/writing">writing</StyledLink>
                    <StyledLink to="/cool-stuff">cool stuff</StyledLink>
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
            <p>
                <a
                    onClick={(event) => {
                        event.preventDefault();
                        const sharePii = `email: first name last initial at gmail dot com`;
                        alert(sharePii);
                    }}
                    href=""
                    style={{ color: ashGray }}
                >
                    email
                </a>
            </p>
        </Page>
    );
}

export default App;
