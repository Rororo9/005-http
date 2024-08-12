import "dotenv/config";
import readline from "node:readline/promises";
import getCurrentWeather from "./сurrentWeather.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("Введите название города, чтобы узнать погоду");

rl.on("line", async (input) => {
    try {
        if (!input) {
            throw new Error("Название города не указано");
        }
        await getCurrentWeather(input);
    } catch (error) {
        console.error(error.message);
    }
});