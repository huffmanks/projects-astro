import { weatherCodes } from "./config";
import { Icons, type IconsMap } from "./Icons";

function isDayTime(time: string): boolean {
  const hour = new Date(time).getHours();
  return hour >= 6 && hour < 18;
}

interface GetIconProps {
  time: string;
  weatherCode: number;
}

export function getIcon({ time, weatherCode }: GetIconProps) {
  const dayTime = isDayTime(time);
  const weather = weatherCodes[weatherCode];
  const iconKey = dayTime ? weather.dayIcon : weather.nightIcon;
  return Icons[iconKey as keyof IconsMap];
}

export function formatTime(timeString: string) {
  const date = new Date(timeString);
  return date.toLocaleTimeString([], { hour: "numeric", hour12: true });
}

export function formatPrecipitation(value: number) {
  if (value === 0) {
    return undefined;
  } else if (value < 10) {
    return "10%";
  } else if (value === 100) {
    return "100%";
  } else {
    const roundedValue = Math.floor(value / 5) * 5;
    return `${roundedValue}%`;
  }
}

export function convertHpaToInHg(hpa: number) {
  return (hpa * 0.02952998751).toFixed(2);
}

export function degreesToDirection(degrees: number) {
  degrees = (degrees + 360) % 360;

  const directions = [
    { label: "N", range: [0, 11.25] },
    { label: "NE", range: [11.25, 78.75] },
    { label: "E", range: [78.75, 101.25] },
    { label: "SE", range: [101.25, 168.75] },
    { label: "S", range: [168.75, 191.25] },
    { label: "SW", range: [191.25, 258.75] },
    { label: "W", range: [258.75, 281.25] },
    { label: "NW", range: [281.25, 348.75] },
    { label: "N", range: [348.75, 360] },
  ];

  const direction = directions.find((dir) => degrees >= dir.range[0] && degrees < dir.range[1]);

  return direction ? direction.label : "Unknown";
}
