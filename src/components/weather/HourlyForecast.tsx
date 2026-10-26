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
      <div className="mb-3 font-bold">Hourly forecast</div>
      <div className="scrollbar overflow-x-scroll rounded-lg bg-gray-800 p-4 pb-6">
        <div className="flex w-full gap-6">
          {hourlyData.map((item, index) => (
            <HourlyItem
              key={item.time}
              item={item}
              index={index}
              hourlyDataLength={hourlyData.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function HourlyItem({
  item,
  index,
  hourlyDataLength,
}: {
  item: HourlyData;
  index: number;
  hourlyDataLength: number;
}) {
  const IconComponent = getIcon({ time: item.time, weatherCode: item.weatherCode });

  const time = index === 0 ? "Now" : formatTime(item.time);

  return (
    <div className={hourlyDataLength === index + 1 ? "pr-4" : undefined}>
      <div className="flex w-12 flex-1 flex-col items-center gap-6">
        <div className="pl-1.5 text-center">{item.temperature}&deg;</div>
        <div className="flex flex-col items-center gap-1">
          <div>{IconComponent && <IconComponent />}</div>
          <div className="text-sm">{time}</div>
        </div>
      </div>
    </div>
  );
}
