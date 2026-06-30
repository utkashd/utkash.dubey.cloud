import { createFileRoute } from "@tanstack/react-router";
import { Page } from "../utils/components";

export const Route = createFileRoute("/")({ component: Home });

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
                    className="text-amber-300 underline hover:text-amber-600"
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
