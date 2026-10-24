import { createFileRoute } from "@tanstack/react-router";
import { Food } from "../pages/food";

export const Route = createFileRoute("/food")({ component: Food });
