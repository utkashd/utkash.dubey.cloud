import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold">Welcome to Utkash's website</h1>
            <p className="mt-4 text-lg">
                🚧 This is temporary, we're under construction 🚧
            </p>
        </div>
    );
}
