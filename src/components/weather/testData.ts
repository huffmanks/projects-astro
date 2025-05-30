import { LocationData, WeatherData } from "./config";

interface TestData {
  weatherData: WeatherData;
  locationData: LocationData;
}
export const testData: TestData = {
  weatherData: {
    latitude: 34.938744,
    longitude: -82.327805,
    generationtime_ms: 0.3452301025390625,
    utc_offset_seconds: -14400,
    timezone: "America/New_York",
    timezone_abbreviation: "GMT-4",
    elevation: 278,
    current_units: {
      time: "iso8601",
      interval: "seconds",
      temperature_2m: "°F",
      relative_humidity_2m: "%",
      apparent_temperature: "°F",
      weather_code: "wmo code",
      surface_pressure: "hPa",
      wind_speed_10m: "mp/h",
      wind_direction_10m: "°",
    },
    current: {
      time: "2025-04-13T19:30",
      interval: 900,
      temperature_2m: 64.6,
      relative_humidity_2m: 34,
      apparent_temperature: 58.6,
      weather_code: 0,
      surface_pressure: 984.3,
      wind_speed_10m: 6.6,
      wind_direction_10m: 215,
    },
    hourly_units: {
      time: "iso8601",
      temperature_2m: "°F",
      precipitation_probability: "%",
      weather_code: "wmo code",
    },
    hourly: {
      time: [
        "2025-04-13T19:00",
        "2025-04-13T20:00",
        "2025-04-13T21:00",
        "2025-04-13T22:00",
        "2025-04-13T23:00",
        "2025-04-14T00:00",
        "2025-04-14T01:00",
        "2025-04-14T02:00",
        "2025-04-14T03:00",
        "2025-04-14T04:00",
        "2025-04-14T05:00",
        "2025-04-14T06:00",
        "2025-04-14T07:00",
        "2025-04-14T08:00",
        "2025-04-14T09:00",
        "2025-04-14T10:00",
        "2025-04-14T11:00",
        "2025-04-14T12:00",
        "2025-04-14T13:00",
        "2025-04-14T14:00",
        "2025-04-14T15:00",
        "2025-04-14T16:00",
        "2025-04-14T17:00",
        "2025-04-14T18:00",
      ],
      temperature_2m: [66.8, 61.9, 58.6, 56.4, 55.9, 54.8, 53.4, 53.5, 53.4, 52, 50.9, 50.8, 50.3, 53.3, 59.4, 65.5, 70.3, 74.8, 78.5, 81.1, 82.4, 82.8, 82.6, 81.7],
      precipitation_probability: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      weather_code: [0, 0, 0, 0, 2, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    },
    daily_units: {
      time: "iso8601",
      weather_code: "wmo code",
      temperature_2m: "°F",
      temperature_2m_max: "°F",
      temperature_2m_min: "°F",
      sunrise: "iso8601",
      sunset: "iso8601",
      uv_index_max: "",
      precipitation_probability_max: "%",
    },
    daily: {
      time: ["2025-04-13", "2025-04-14", "2025-04-15", "2025-04-16", "2025-04-17", "2025-04-18", "2025-04-19"],
      weather_code: [2, 3, 3, 3, 3, 0, 3],
      temperature_2m_max: [68.8, 82.8, 68.6, 66.9, 69.3, 76.9, 79.8],
      temperature_2m_min: [36.2, 50.3, 47, 43.5, 44.8, 49.8, 56.7],
      sunrise: ["2025-04-13T06:59", "2025-04-14T06:57", "2025-04-15T06:56", "2025-04-16T06:55", "2025-04-17T06:54", "2025-04-18T06:52", "2025-04-19T06:51"],
      sunset: ["2025-04-13T20:00", "2025-04-14T20:00", "2025-04-15T20:01", "2025-04-16T20:02", "2025-04-17T20:03", "2025-04-18T20:04", "2025-04-19T20:04"],
      uv_index_max: [7.6, 7.75, 7.65, 7.7, 7.4, 7.45, 4.55],
      precipitation_probability_max: [0, 1, 1, 0, 0, 3, 11],
    },
  },
  locationData: {
    town: "Taylors",
    county: "Greenville County",
    state: "South Carolina",
    "ISO3166-2-lvl4": "US-SC",
    postcode: "29687",
    country: "United States",
    country_code: "us",
  },
};
