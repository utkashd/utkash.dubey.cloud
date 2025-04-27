export function isProduction() {
    return import.meta.env.PROD;
}

export function isDevelopment() {
    return import.meta.env.DEV;
}
