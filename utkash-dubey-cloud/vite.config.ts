import { defineConfig } from "vite";
import { devtools } from "@tanstack/devtools-vite";
import mdx from "@mdx-js/rollup";
import remarkGfm from "remark-gfm";

import { tanstackRouter } from "@tanstack/router-plugin/vite";

import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const config = defineConfig({
    resolve: { tsconfigPaths: true },
    plugins: [
        { enforce: "pre", ...mdx({ remarkPlugins: [remarkGfm] }) },
        devtools(),
        tailwindcss(),
        tanstackRouter({ target: "react", autoCodeSplitting: true }),
        viteReact({ include: /\.(js|jsx|ts|tsx|md)$/ }),
    ],
});

export default config;
