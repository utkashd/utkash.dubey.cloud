import {
    HeadContent,
    Link,
    Scripts,
    createRootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
    head: () => ({
        meta: [
            {
                charSet: "utf-8",
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            {
                title: "Utkash Dubey",
            },
        ],
        links: [
            {
                rel: "icon",
                type: "image/png",
                href: "/initials.png",
            },
            {
                rel: "stylesheet",
                href: appCss,
            },
        ],
    }),
    shellComponent: RootDocument,
    notFoundComponent: () => (
        <main>
            <h1>Page not found</h1>
            <p>The page you requested could not be found.</p>
            <a href="/">Return home</a>
        </main>
    ),
});

function RootDocument({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <HeadContent />
            </head>
            <body>
                <div className="mx-auto max-w-4xl p-8 leading-relaxed">
                    <nav
                        aria-label="Main navigation"
                        className="mb-10 flex flex-wrap gap-6 underline"
                    >
                        <Link to="/">me</Link>
                        <Link to="/writing">writing</Link>
                        <Link to="/cool-stuff">cool stuff</Link>
                        <Link to="/food">food</Link>
                    </nav>
                    <main>{children}</main>
                </div>
                <TanStackDevtools
                    config={{
                        position: "bottom-right",
                    }}
                    plugins={[
                        {
                            name: "Tanstack Router",
                            render: <TanStackRouterDevtoolsPanel />,
                        },
                    ]}
                />
                <Scripts />
            </body>
        </html>
    );
}
