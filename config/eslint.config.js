//  @ts-check

import { tanstackConfig } from "@tanstack/eslint-config";

export default [
    ...tanstackConfig,
    {
        rules: {
            "import/no-cycle": "off",
            "import/order": "off",
            "sort-imports": "off",
            "@typescript-eslint/array-type": "off",
            "@typescript-eslint/require-await": "off",
            "pnpm/json-enforce-catalog": "off",
        },
    },
    {
        ignores: [
            "config/eslint.config.js",
            "config/prettier.config.js",
            "**/routeTree.gen.ts",
        ],
    },
];
