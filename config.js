export const config = {
    apiKey: process.env.WEATHER_API_KEY,
    weatherApiUrl: process.env.WEATHER_API_URL,
    getUrl: (path, query) => {
        if (config.apiKey && config.weatherApiUrl) {
            return `${config.weatherApiUrl}${path}?key=${config.apiKey}&lang=ru&q=${query}`
        }

        throw new Error('API ключ или URL погоды не установлены')
    },
}