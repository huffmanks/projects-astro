import { useEffect, useState } from "react";

// import { data } from "./data";

import WeatherOutput from "./WeatherOutput";

export default function WeatherForm() {
  const [isMounted, setIsMounted] = useState(false);
  const [weatherSearch, setWeatherSearch] = useState("New York, NY");
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
      const GEOCODE_API_KEY = import.meta.env.PUBLIC_GEOCODE_API_KEY;
      const GEONAMES_USER = import.meta.env.PUBLIC_GEONAMES_USER;

      const encodedWeatherSearch = encodeURIComponent(weatherSearch);
      const geocodeUrl = `https://geocode.maps.co/search?q=${encodedWeatherSearch}&api_key=${GEOCODE_API_KEY}`;

      const geoCodeResponse = await fetch(geocodeUrl);
      if (!geoCodeResponse.ok) throw Error;

      const geoCodeData = await geoCodeResponse.json();

      const lat = geoCodeData[0].lat;
      const lon = geoCodeData[0].lon;

      // const timezoneUrl = `http://api.geonames.org/timezoneJSON?lat=${lat}&lng=${lon}&username=${GEONAMES_USER}`;

      // const timezoneResponse = await fetch(timezoneUrl);
      // if (!timezoneResponse.ok) return null;
      // const timezoneData = await timezoneResponse.json();
      const timezoneData = null;

      const encodedTimezone = timezoneData ? encodeURIComponent(timezoneData) : "auto";

      const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,surface_pressure,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,precipitation_probability,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=${encodedTimezone}&forecast_hours=24`;

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
      (async () => {
        await fetchData();
      })();
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
      <h1 className="text-2xl font-bold mb-4">Weather app</h1>

      <div className="mb-8 rounded-full bg-gray-800 pl-5 pr-4 py-3 focus-within:ring-2 focus-within:ring-offset-1 focus-within:ring-amber-800 focus-within:ring-offset-amber-600">
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
              className="group-hover:stroke-amber-600 group-focus-within:stroke-amber-600"
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
