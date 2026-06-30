import { Outlet, createRootRoute, useLocation } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { useEffect, useRef, useState } from "react";

import "../styles.css";
import { StyledLink } from "../utils/components";
import {
    drabDarkBrown,
    lighterDrabDarkBrown,
    platinum,
    resedaGreen,
} from "../utils/colors";

export const Route = createRootRoute({
    component: RootComponent,
});

function RootComponent() {
    return (
        <>
            <AppShell />
            <TanStackDevtools
                config={{
                    position: "bottom-right",
                }}
                plugins={[
                    {
                        name: "TanStack Router",
                        render: <TanStackRouterDevtoolsPanel />,
                    },
                ]}
            />
        </>
    );
}

function AppShell() {
    const location = useLocation();
    const [isMobileSizeScreen, setIsMobileSizeScreen] = useState(
        () => window.innerWidth < 1024,
    );
    const [isNavOpen, setIsNavOpen] = useState(() => !isMobileSizeScreen);
    const navRef = useRef<HTMLDivElement>(null);
    const navHamburger = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        const handleWindowSizeChange = () => {
            const isMobile = window.innerWidth < 1024;
            setIsMobileSizeScreen(isMobile);
            setIsNavOpen(!isMobile);
        };

        window.addEventListener("resize", handleWindowSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);

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
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isNavOpen]);

    const shouldShowNav = isNavOpen || !isMobileSizeScreen;
    const closeNavAfterNavigate = () => setIsNavOpen(!isMobileSizeScreen);

    return (
        <div
            className="relative flex min-h-screen min-w-screen max-w-screen"
            style={{ backgroundColor: drabDarkBrown }}
        >
            <button
                className="fixed top-4 left-3 z-50 p-2"
                onClick={() => setIsNavOpen(!isNavOpen)}
                style={{
                    visibility: isMobileSizeScreen ? "visible" : "hidden",
                }}
                ref={navHamburger}
                aria-label="Toggle navigation"
            >
                <span
                    className="mb-1.5 block h-1 w-8"
                    style={{
                        backgroundColor: isNavOpen ? resedaGreen : platinum,
                    }}
                />
                <span
                    className="mb-1.5 block h-1 w-8"
                    style={{
                        backgroundColor: isNavOpen ? resedaGreen : platinum,
                    }}
                />
                <span
                    className="block h-1 w-8"
                    style={{
                        backgroundColor: isNavOpen ? resedaGreen : platinum,
                    }}
                />
            </button>

            <nav
                className={`
                    fixed top-0 left-0 z-40 flex h-full w-64 flex-col items-start gap-4 p-14
                    transition-transform duration-300
                    ${shouldShowNav ? "translate-x-0" : "-translate-x-full"}
                    lg:static lg:min-h-screen lg:max-h-screen lg:translate-x-0
                `}
                ref={navRef}
                style={{ backgroundColor: drabDarkBrown }}
            >
                <StyledLink to="/" onClick={closeNavAfterNavigate}>
                    me
                </StyledLink>
                <StyledLink to="/writing" onClick={closeNavAfterNavigate}>
                    writing
                </StyledLink>
                <StyledLink to="/cool-stuff" onClick={closeNavAfterNavigate}>
                    cool stuff
                </StyledLink>
                <StyledLink to="/food" onClick={closeNavAfterNavigate}>
                    food
                </StyledLink>
            </nav>
            <main
                className="flex w-full flex-col p-16 text-left text-2xl"
                style={{ backgroundColor: lighterDrabDarkBrown }}
            >
                <Outlet />
            </main>
        </div>
    );
}
