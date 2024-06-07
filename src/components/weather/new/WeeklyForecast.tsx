import { formatPrecipitation, getIcon } from "./utils";

interface WeeklyData {
  time: string;
  tempMin: number;
  tempMax: number;
  weatherCode: number;
  precipitation: number;
}

interface WeeklyForecastProps {
  weeklyData: WeeklyData[];
}

export default function WeeklyForecast({ weeklyData }: WeeklyForecastProps) {
  const lastIndex = weeklyData.length - 1;
  return (
    <div className="mb-10">
      <div className="font-bold mb-3">Weekly forecast</div>
      <div className="flex flex-col gap-1.5 text-sm">
        {weeklyData.map((item, index) => (
          <WeeklyItem key={item.time} item={item} index={index} lastIndex={lastIndex} />
        ))}
      </div>
    </div>
  );
}

function WeeklyItem({ item, index, lastIndex }: { item: WeeklyData; index: number; lastIndex: number }) {
  const date = new Date(item.time);
  const dayOfWeek = index === 0 ? "Today" : date.toLocaleDateString(undefined, { weekday: "long" });
  const borderRadius = index === 0 ? "rounded-t-xl rounded-b-md" : index === lastIndex ? "rounded-b-xl rounded-t-md" : "rounded-md";

  const precipitation = formatPrecipitation(item.precipitation);
  const IconComponent = getIcon({ time: item.time, weatherCode: item.weatherCode });

  return (
    <div className={`bg-gray-800 py-2 px-4 ${borderRadius}`}>
      <div className="grid grid-cols-2 gap-4 items-center">
        <div>{dayOfWeek}</div>
        <div className="flex gap-2 justify-between items-center">
          <div className="flex items-center justify-end">
            <span className="w-8 text-xs text-sky-300">{precipitation && precipitation}</span>
            <div className="mr-auto">
              <IconComponent />
            </div>
          </div>
          <div>
            <span>{item.tempMax}&deg;</span>
            <span className="text-gray-500">/{item.tempMin}&deg;</span>
          </div>
        </div>
      </div>
    </div>
  );
}
