import type { WeatherData } from "./config";
import { calculateDewPoint, convertHpaToInHg, degreesToDirection } from "./utils";

import CurrentForecast from "./CurrentForecast";
import DailyItem from "./DailyItem";
import HourlyForecast from "./HourlyForecast";
import WeeklyForecast from "./WeeklyForecast";

export default function WeatherOutput({ data }: { data: WeatherData }) {
  if (!data) return null;

  const hourlyData = data.hourly.time.map((time, index) => ({
    time,
    temperature: Math.round(data.hourly.temperature_2m[index]),
    weatherCode: data.hourly.weather_code[index],
  }));

  const currentData = {
    time: data.current.time,
    temp: Math.round(data.current.temperature_2m),
    tempApparent: Math.round(data.current.apparent_temperature),
    tempMin: Math.round(data.daily.temperature_2m_min[0]),
    tempMax: Math.round(data.daily.temperature_2m_max[0]),
    weatherCode: data.current.weather_code,
  };

  const weeklyData = data.daily.time.map((time, index) => ({
    time,
    tempMin: Math.round(data.daily.temperature_2m_min[index]),
    tempMax: Math.round(data.daily.temperature_2m_max[index]),
    weatherCode: data.daily.weather_code[index],
    precipitation: data.daily.precipitation_probability_max[index],
  }));

  const windDirection = degreesToDirection(data.current.wind_direction_10m);
  const uvIndex = data.daily.uv_index_max[0];
  const pressure = convertHpaToInHg(data.current.surface_pressure);
  const temp = Math.round(data.current.temperature_2m);
  const humidity = data.current.relative_humidity_2m;
  const dewPoint = calculateDewPoint({ temp, humidity });

  return (
    <>
      <CurrentForecast currentData={currentData} />
      <HourlyForecast hourlyData={hourlyData} />
      <WeeklyForecast weeklyData={weeklyData} />

      <section>
        <div className="font-bold mb-3">Current conditions</div>
        <div className="grid grid-cols-2 gap-4">
          <DailyItem label="Wind" number={data.current.wind_speed_10m} unit="mph" note={windDirection} meter={data.current.wind_direction_10m} />
          <DailyItem label="Humidity" number={humidity} unit="%" note={`Dew point ${dewPoint}°`} meter={humidity} />
          <DailyItem label="UV Index" number={uvIndex} note={uvIndex >= 6 ? "High" : uvIndex > 2 && uvIndex < 6 ? "Moderate" : "Low"} meter={uvIndex} />
          <DailyItem label="Pressure" number={pressure} note="inHg" meter={Number(pressure)} />
        </div>
      </section>
    </>
  );
}
