import type { LocationData, WeatherData } from "./config";
import { calculateDewPoint, convertHpaToInHg, degreesToDirection } from "./utils";

import CurrentForecast from "./CurrentForecast";
import DailyItem from "./DailyItem";
import HourlyForecast from "./HourlyForecast";
import WeeklyForecast from "./WeeklyForecast";

export default function WeatherOutput({ weatherData, locationData }: { weatherData: WeatherData; locationData: LocationData | null }) {
  const hourlyData = weatherData.hourly.time.map((time, index) => ({
    time,
    temperature: Math.round(weatherData.hourly.temperature_2m[index]),
    weatherCode: weatherData.hourly.weather_code[index],
  }));

  const currentData = {
    time: weatherData.current.time,
    temp: Math.round(weatherData.current.temperature_2m),
    tempApparent: Math.round(weatherData.current.apparent_temperature),
    tempMin: Math.round(weatherData.daily.temperature_2m_min[0]),
    tempMax: Math.round(weatherData.daily.temperature_2m_max[0]),
    weatherCode: weatherData.current.weather_code,
  };

  const weeklyData = weatherData.daily.time.map((time, index) => ({
    time,
    tempMin: Math.round(weatherData.daily.temperature_2m_min[index]),
    tempMax: Math.round(weatherData.daily.temperature_2m_max[index]),
    weatherCode: weatherData.daily.weather_code[index],
    precipitation: weatherData.daily.precipitation_probability_max[index],
  }));

  const windDirection = degreesToDirection(weatherData.current.wind_direction_10m);
  const uvIndex = weatherData.daily.uv_index_max[0];
  const pressure = convertHpaToInHg(weatherData.current.surface_pressure);
  const temp = Math.round(weatherData.current.temperature_2m);
  const humidity = weatherData.current.relative_humidity_2m;
  const dewPoint = calculateDewPoint({ temp, humidity });

  return (
    <>
      {locationData && (
        <h2 className="text-xl font-bold mb-4">
          {locationData.town}, {locationData["ISO3166-2-lvl4"].split("-")[1]}
        </h2>
      )}
      <CurrentForecast currentData={currentData} />
      <HourlyForecast hourlyData={hourlyData} />
      <WeeklyForecast weeklyData={weeklyData} />

      <section>
        <div className="font-bold mb-3">Current conditions</div>
        <div className="grid grid-cols-2 gap-4">
          <DailyItem label="Wind" number={weatherData.current.wind_speed_10m} unit="mph" note={windDirection} meter={weatherData.current.wind_direction_10m} />
          <DailyItem label="Humidity" number={humidity} unit="%" note={`Dew point ${dewPoint}°`} meter={humidity} />
          <DailyItem label="UV Index" number={uvIndex} note={uvIndex >= 6 ? "High" : uvIndex > 2 && uvIndex < 6 ? "Moderate" : "Low"} meter={uvIndex} />
          <DailyItem label="Pressure" number={pressure} note="inHg" meter={Number(pressure)} />
        </div>
      </section>
    </>
  );
}
