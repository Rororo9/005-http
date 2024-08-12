import http from "node:http";
import { config } from "./config.js";

const currentWeather = (param) => {
    const request = http.get(config.getUrl("current.json", param), (res) => {
        let rawData = "";

        res.setEncoding("utf8");
        res.on("data", (chunk) => {
            rawData += chunk;
        });

        res.on("end", () => {
            try {
                if (res.statusCode !== 200) {
                    console.error(`Error with status code: ${res.statusCode}`);
                    return;
                }

                if (!rawData) {
                    console.error("No data received");
                    return;
                }

                const parsedData = JSON.parse(rawData);
                const { location, current } = parsedData;
                console.log(
                    `Погода в г.${location.name} сейчас ${current.temp_c} °C (${current.condition.text})`
                );
            } catch (e) {
                console.error(e.message);
            }
        });
    });

    request.on("error", (err) => {
        console.error(err);
    });
};

export default currentWeather;