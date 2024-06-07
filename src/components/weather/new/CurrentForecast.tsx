import { weatherCodes } from "./config";
import { getIcon } from "./utils";

interface CurrentData {
  time: string;
  temp: number;
  tempMin: number;
  tempMax: number;
  tempApparent: number;
  weatherCode: number;
}

interface CurrentForecastProps {
  currentData: CurrentData;
}

export default function CurrentForecast({ currentData }: CurrentForecastProps) {
  const IconComponent = getIcon({ time: currentData.time, weatherCode: currentData.weatherCode });
  return (
    <div className="mb-10">
      <div className="mb-3">Now</div>
      <div className="flex justify-between gap-4">
        <div>
          <div className="flex gap-2 items-end mb-3">
            <span className="text-4xl">{currentData.temp}&deg;</span>
            <IconComponent className="size-12" />
          </div>
          <div className="text-sm text-gray-500">
            High: {currentData.tempMax}&deg; &bull; Low: {currentData.tempMin}&deg;
          </div>
        </div>

        <div>
          <div className="mb-1">{weatherCodes[currentData.weatherCode].label}</div>
          <div className="text-sm text-gray-500">Feels like {currentData.tempApparent}&deg;</div>
        </div>
      </div>
    </div>
  );
}
