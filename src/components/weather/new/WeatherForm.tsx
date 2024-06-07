import { data } from "../data";
import CurrentForecast from "./CurrentForecast";
import DailyItem from "./DailyItem";
import HourlyForecast from "./HourlyForecast";
import WeeklyForecast from "./WeeklyForecast";
import { convertHpaToInHg, degreesToDirection } from "./utils";

export default function WeatherForm() {
  // https://api.open-meteo.com/v1/forecast?latitude=34.9204&longitude=-82.2962&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,surface_pressure,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,precipitation_probability,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York&forecast_hours=24
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

  return (
    <div className="mx-auto max-w-md p-4">
      <CurrentForecast currentData={currentData} />
      <HourlyForecast hourlyData={hourlyData} />
      <WeeklyForecast weeklyData={weeklyData} />

      <div className="grid grid-cols-2 gap-4">
        <DailyItem label="Wind" number={data.current.wind_speed_10m} unit="mph" note={windDirection} />
        <DailyItem label="Humidity" number={data.current.relative_humidity_2m} unit="%" />
        <DailyItem label="UV Index" number={uvIndex} note={uvIndex > 10 ? "High" : "Low"} />
        <DailyItem label="Pressure" number={pressure} note="inHg" />
      </div>
    </div>
  );
}
