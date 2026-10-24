import { createFileRoute } from "@tanstack/react-router";
import { Bracket } from "../pages/bracket";

export const Route = createFileRoute("/bracket")({ component: Bracket });
