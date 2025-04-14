import { formatTime, getIcon } from "./utils";

interface HourlyData {
  time: string;
  temperature: number;
  weatherCode: number;
}

interface HourlyForecastProps {
  hourlyData: HourlyData[];
}

export default function HourlyForecast({ hourlyData }: HourlyForecastProps) {
  return (
    <div className="mb-10">
      <div className="font-bold mb-3">Hourly forecast</div>
      <div className="scrollbar bg-gray-800 rounded-lg p-4 pb-6 overflow-x-scroll">
        <div className="flex gap-6 w-full">
          {hourlyData.map((item, index) => (
            <HourlyItem key={item.time} item={item} index={index} hourlyDataLength={hourlyData.length} />
          ))}
        </div>
      </div>
    </div>
  );
}

function HourlyItem({ item, index, hourlyDataLength }: { item: HourlyData; index: number; hourlyDataLength: number }) {
  const IconComponent = getIcon({ time: item.time, weatherCode: item.weatherCode });

  const time = index === 0 ? "Now" : formatTime(item.time);

  return (
    <div className={hourlyDataLength === index + 1 ? "pr-4" : undefined}>
      <div className="flex flex-col flex-1 gap-6 w-12 items-center">
        <div className="text-center pl-1.5">{item.temperature}&deg;</div>
        <div className="flex flex-col gap-1 items-center">
          <div>{IconComponent && <IconComponent />}</div>
          <div className="text-sm">{time}</div>
        </div>
      </div>
    </div>
  );
}
