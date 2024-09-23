import { useEffect, useState } from "react";

// import { data } from "./data";

import WeatherOutput from "./WeatherOutput";

export default function WeatherForm() {
  const [isMounted, setIsMounted] = useState(false);
  const [weatherSearch, setWeatherSearch] = useState("");
  const [data, setData] = useState(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setWeatherSearch(e.target.value);
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
      const weatherUrl = `https://huffmanks-api.netlify.app/api/weather-data/${weatherSearch}`;
      const weatherResponse = await fetch(weatherUrl);

      if (!weatherResponse.ok) throw Error;

      const weatherData = await weatherResponse.json();

      setData(weatherData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
      const isProd = import.meta.env.PROD;
      if (isProd) {
        (async () => {
          await fetchData();
        })();
      }

      return;
    }

    return () => {
      setIsMounted(false);
      setWeatherSearch("");
      setData(null);
    };
  }, []);

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

      {data && <WeatherOutput data={data} />}
    </div>
  );
}
