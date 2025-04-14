interface WeatherCode {
  label: string;
  dayIcon: string;
  nightIcon: string;
}

interface WeatherCodes {
  [key: number]: WeatherCode;
}

interface Units {
  time: string;
  temperature_2m: string;
  relative_humidity_2m?: string;
  apparent_temperature?: string;
  weather_code: string;
  surface_pressure?: string;
  wind_speed_10m?: string;
  wind_direction_10m?: string;
  interval?: string;
  precipitation_probability?: string;
  temperature_2m_max?: string;
  temperature_2m_min?: string;
  sunrise?: string;
  sunset?: string;
  uv_index_max?: string;
  precipitation_probability_max?: string;
}

interface CurrentWeather {
  time: string;
  interval: number;
  temperature_2m: number;
  relative_humidity_2m: number;
  apparent_temperature: number;
  weather_code: number;
  surface_pressure: number;
  wind_speed_10m: number;
  wind_direction_10m: number;
}

interface HourlyWeather {
  time: string[];
  temperature_2m: number[];
  precipitation_probability: number[];
  weather_code: number[];
}

interface DailyWeather {
  time: string[];
  weather_code: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  sunrise: string[];
  sunset: string[];
  uv_index_max: number[];
  precipitation_probability_max: number[];
}

export interface WeatherData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: Units;
  current: CurrentWeather;
  hourly_units: Units;
  hourly: HourlyWeather;
  daily_units: Units;
  daily: DailyWeather;
}

export interface LocationData {
  town: string;
  county: string;
  state: string;
  "ISO3166-2-lvl4": string;
  postcode: string;
  country: string;
  country_code: string;
}

export const weatherCodes: WeatherCodes = {
  0: {
    label: "Clear sky",
    dayIcon: "clear_day",
    nightIcon: "clear_night",
  },
  1: {
    label: "Mainly clear",
    dayIcon: "clear_day",
    nightIcon: "clear_night",
  },
  2: {
    label: "Partly cloudy",
    dayIcon: "partly_cloudy_day",
    nightIcon: "partly_cloudy_night",
  },
  3: {
    label: "Overcast",
    dayIcon: "cloudy_day_night",
    nightIcon: "cloudy_day_night",
  },
  45: {
    label: "Fog",
    dayIcon: "fog_day_night",
    nightIcon: "fog_day_night",
  },
  48: {
    label: "Rime fog",
    dayIcon: "fog_day_night",
    nightIcon: "fog_day_night",
  },
  51: {
    label: "Light drizzle",
    dayIcon: "drizzle_day_night",
    nightIcon: "drizzle_day_night",
  },
  53: {
    label: "Moderate drizzle",
    dayIcon: "drizzle_day_night",
    nightIcon: "drizzle_day_night",
  },
  55: {
    label: "Dense drizzle",
    dayIcon: "drizzle_day_night",
    nightIcon: "drizzle_day_night",
  },
  56: {
    label: "Freezing drizzle",
    dayIcon: "sleet_day_night",
    nightIcon: "sleet_day_night",
  },
  57: {
    label: "Freezing drizzle",
    dayIcon: "sleet_day_night",
    nightIcon: "sleet_day_night",
  },
  61: {
    label: "Slight rain",
    dayIcon: "rain_day_night",
    nightIcon: "rain_day_night",
  },
  63: {
    label: "Moderate rain",
    dayIcon: "rain_day_night",
    nightIcon: "rain_day_night",
  },
  65: {
    label: "Heavy rain",
    dayIcon: "rain_day_night",
    nightIcon: "rain_day_night",
  },
  66: {
    label: "Freezing rain",
    dayIcon: "sleet_day_night",
    nightIcon: "sleet_day_night",
  },
  67: {
    label: "Freezing rain",
    dayIcon: "sleet_day_night",
    nightIcon: "sleet_day_night",
  },
  71: {
    label: "Slight snow",
    dayIcon: "snow_day_night",
    nightIcon: "snow_day_night",
  },
  73: {
    label: "Moderate snow",
    dayIcon: "snow_day_night",
    nightIcon: "snow_day_night",
  },
  75: {
    label: "Heavy snow",
    dayIcon: "snow_day_night",
    nightIcon: "snow_day_night",
  },
  77: {
    label: "Snow grains",
    dayIcon: "sleet_day_night",
    nightIcon: "sleet_day_night",
  },
  80: {
    label: "Rain showers",
    dayIcon: "rain_day_night",
    nightIcon: "rain_day_night",
  },
  81: {
    label: "Rain showers",
    dayIcon: "rain_day_night",
    nightIcon: "rain_day_night",
  },
  82: {
    label: "Rain showers",
    dayIcon: "rain_day_night",
    nightIcon: "rain_day_night",
  },
  85: {
    label: "Snow showers",
    dayIcon: "snow_day_night",
    nightIcon: "snow_day_night",
  },
  86: {
    label: "Snow showers",
    dayIcon: "snow_day_night",
    nightIcon: "snow_day_night",
  },
  95: {
    label: "Thunderstorm",
    dayIcon: "thunderstorm_day_night",
    nightIcon: "thunderstorm_day_night",
  },
  96: {
    label: "Slight hail",
    dayIcon: "hail_day_night",
    nightIcon: "hail_day_night",
  },
  99: {
    label: "Heavy hail",
    dayIcon: "hail_day_night",
    nightIcon: "hail_day_night",
  },
};
