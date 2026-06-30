import { createFileRoute } from "@tanstack/react-router";
import { CoolStuff } from "../pages/coolstuff";

export const Route = createFileRoute("/cool-stuff")({ component: CoolStuff });
