export const ep = {
    baseEp: "/currency-converter/forex",
    getHistory: (code, timeline) => `/currency-converter/forex?code=${code}INR%3DX&timeline=${timeline}`
}