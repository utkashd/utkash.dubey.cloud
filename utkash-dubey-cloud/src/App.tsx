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
                className="flex min-h-screen"
                style={{ backgroundColor: drabDarkBrown }}
            >
                <nav className="w-2/12 p-15 flex flex-col h-full gap-4 items-start">
                    <StyledLink to="/">me</StyledLink>
                    <StyledLink to="/writing">writing</StyledLink>
                    <StyledLink to="/cool-stuff">cool stuff</StyledLink>
                </nav>
                <div
                    className="w-10/12 p-15 text-left text-2xl"
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
                </div>
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
