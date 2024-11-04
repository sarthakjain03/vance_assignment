export const ep = {
    baseEp: `${import.meta.env.VITE_BASE_URL}/currency-converter/forex`,
    getHistory: (code, timeline) => `${import.meta.env.VITE_BASE_URL}/currency-converter/forex?code=${code}INR%3DX&timeline=${timeline}`
}