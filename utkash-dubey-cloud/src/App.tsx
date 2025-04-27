import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// https://coolors.co/2f2504-594e36-7e846b-a5ae9e-d0ddd7
export const drabDarkBrown = "#2F2504";
export const lighterDrabDarkBrown = "#594E36";
export const resedaGreen = "#7E846B";
export const ashGray = "#A5AE9E";
export const platinum = "#D0DDD7";

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
                <nav className="w-64 p-15 flex flex-col fixed left-0 top-0 h-full gap-4 items-start">
                    <StyledLink to="/">me</StyledLink>
                    <StyledLink to="/writing">writing</StyledLink>
                </nav>
                <div
                    className="ml-64 flex-grow p-15 text-left text-2xl"
                    style={{ backgroundColor: lighterDrabDarkBrown }}
                >
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/writing" element={<Writing />} />
                        <Route
                            path="/secret-tunnel"
                            element={<SECRETTUNNEL />}
                        />
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

function Page({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <>
            <h1 className="text-6xl">{title}</h1>
            <div className="pt-10">{children}</div>
        </>
    );
}

function Home() {
    return (
        <Page title="Utkash Dubey">
            <p>
                <ObscurePiiFromBots
                    nameOfPii="email"
                    pii="first name last initial at gmail dot com"
                />
            </p>
        </Page>
    );
}

function Writing() {
    return (
        <Page title="Maybe check back later.">
            <p>Nothing for now.</p>
        </Page>
    );
}

function SECRETTUNNEL() {
    return (
        <Page title="SECRET TUNNEL!!!!">
            <p>Look what you found!</p>
        </Page>
    );
}

function ObscurePiiFromBots({
    nameOfPii,
    pii,
}: {
    nameOfPii: string;
    pii: string;
}) {
    return (
        <a
            onClick={(event) => {
                event.preventDefault();
                const sharePii = `${nameOfPii}: ${pii}`;
                alert(sharePii);
            }}
            href=""
            style={{ color: ashGray }}
        >
            {nameOfPii}
        </a>
    );
}

export default App;
