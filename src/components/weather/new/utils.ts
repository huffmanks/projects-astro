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
  return parseFloat((hpa * 0.02952998751).toFixed(2));
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

export function calculateDewPoint({ temp, humidity }: { temp: number; humidity: number }) {
  const celsius = ((temp - 32) * 5) / 9;

  const dp = celsius - (100 - humidity) / 5;

  return Math.round((dp * 9) / 5 + 32);
}

export function calculateUVFill({ uvIndex }: { uvIndex: number }) {
  const totalHeight = 257;
  const rectHeight = (uvIndex / 11) * totalHeight;
  const yPos = totalHeight - rectHeight;

  return { yPos, rectHeight };
}

export function fillArc({ currentPressure }: { currentPressure: number }) {
  const pressureMin = 28.5;
  const pressureMax = 30.7;
  const arcMin = 0;
  const arcMax = 198;

  const normalizedValue = (currentPressure - pressureMin) / (pressureMax - pressureMin);

  const mappedValue = arcMax - normalizedValue * (arcMax - arcMin);

  return mappedValue > arcMax ? arcMax : mappedValue < 0 ? arcMin : mappedValue;
}
