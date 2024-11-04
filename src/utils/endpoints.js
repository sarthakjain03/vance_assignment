export const ep = {
    baseEp: "https://web-api.vance.club/public/api/currency-converter/forex",
    getHistory: (code, timeline) => `https://web-api.vance.club/public/api/currency-converter/forex?code=${code}INR%3DX&timeline=${timeline}`
}