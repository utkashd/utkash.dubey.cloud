import { createFileRoute } from "@tanstack/react-router";
import { Writing } from "../pages/writing";

export const Route = createFileRoute("/writing")({ component: Writing });
