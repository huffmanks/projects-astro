import { useState } from "react";

import WeatherOutput from "./WeatherOutput";
import { LocationData, WeatherData } from "./config";
import { testData } from "./testData";
// @ts-ignore
const isProd = import.meta.env.PROD;
const initialMessage = {
  text: "Please add a location to see the weather.",
  isError: false,
};

export default function WeatherForm() {
  const [weatherSearch, setWeatherSearch] = useState("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(isProd ? null : testData.weatherData);
  const [locationData, setLocationData] = useState<LocationData | null>(isProd ? null : testData.locationData);
  const [message, setMessage] = useState(initialMessage);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setWeatherSearch(e.target.value);
    if (message.isError) {
      setMessage(initialMessage);
    }
  }

  function handleClear() {
    setWeatherSearch("");
  }

  async function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      await fetchData();
    }

    if (e.key === "Escape") {
      handleClear();
    }
  }

  async function fetchData() {
    try {
      if (isProd) {
        const weatherUrl = `https://huffmanks-api.netlify.app/api/weather-data/${weatherSearch}`;
        const weatherResponse = await fetch(weatherUrl);

        if (!weatherResponse.ok) {
          setWeatherData(null);
          setLocationData(null);
          setWeatherSearch("");
          throw Error;
        }

        const data = await weatherResponse.json();

        setWeatherData(data.weatherData);
        if (data.locationData) {
          setLocationData(data.locationData);
        }
      }
    } catch (error) {
      console.log(error);
      setMessage({
        text: typeof error === "string" ? error : "Something went wrong!",
        isError: true,
      });
    }
  }

  return (
    <div className="mx-auto max-w-md py-10 px-4">
      <h1 className="text-2xl font-bold mb-8 underline-offset-4 underline decoration-purple-600">Weather app</h1>

      <div className="mb-8 rounded-full bg-gray-800 pl-5 pr-4 py-3 focus-within:ring-2 focus-within:ring-offset-1 focus-within:ring-purple-800 focus-within:ring-offset-purple-600">
        <div className="flex items-center gap-3">
          <svg height="1em" width="1em" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <input
            className="w-full h-full bg-gray-800 outline-none border-none"
            autoComplete="one-time-code"
            type="text"
            name="weatherSearch"
            placeholder="New York, NY or 10001"
            value={weatherSearch}
            onFocus={(event) => event.target.select()}
            onChange={handleChange}
            onKeyUp={handleKeyPress}
          />
          <button className="group cursor-pointer outline-none border-none">
            <svg
              className="group-hover:stroke-purple-600 group-focus-within:stroke-purple-600"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              onClick={handleClear}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {weatherData ? (
        <>
          <WeatherOutput weatherData={weatherData} locationData={locationData} />
        </>
      ) : (
        <>
          <div className={message.isError ? "text-red-500" : undefined}>{message.text}</div>
        </>
      )}
    </div>
  );
}
