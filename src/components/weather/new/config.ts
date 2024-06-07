interface WeatherCode {
  label: string;
  dayIcon: string;
  nightIcon: string;
}

interface WeatherCodes {
  [key: number]: WeatherCode;
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
