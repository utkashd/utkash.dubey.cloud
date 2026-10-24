//  @ts-check

/** @type {import('prettier').Config} */
const config = {
    semi: true,
    singleQuote: false,
    trailingComma: "all",
    tabWidth: 4,
    useTabs: false,
    overrides: [
        {
            files: ["*.json", "*.jsonc", "*.jsonl"],
            options: {
                trailingComma: "none",
            },
        },
    ],
};

export default config;
