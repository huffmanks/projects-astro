interface DailyItemProps {
  label: "Wind" | "Humidity" | "UV Index" | "Pressure";
  number: number | string;
  unit?: string;
  note?: string;
  meter: number;
}

export default function DailyItem({ label, number, unit, note, meter }: DailyItemProps) {
  return (
    <div className="bg-gray-800 p-4 pb-6 rounded-lg">
      <div className="mb-4">{label}</div>

      <div className="flex gap-4 justify-between items-center">
        <div>
          <div className="flex gap-1 items-center">
            <span className="text-lg">{number}</span>
            {unit && <span className="text-sm text-gray-500">{unit}</span>}
          </div>
          {note && <div className="text-gray-500 text-sm">{note}</div>}
        </div>

        <DailyItemIcon label={label} meter={meter} />
      </div>
    </div>
  );
}

interface DailyItemIconProps {
  label: "Wind" | "Humidity" | "UV Index" | "Pressure";
  meter: number;
}

function DailyItemIcon({ label, meter }: DailyItemIconProps) {
  if (!label) return null;

  if (label === "Wind") {
    return (
      <div className="flex flex-col items-center justify-center gap-2">
        <div>N</div>
        <img className="h-10 w-10" style={{ transform: `rotate(${meter}deg)` }} src="/weather/compass.png" alt="Compass" />
      </div>
    );
  }

  if (label === "Humidity") {
    return (
      <div className="relative">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm">100</div>
        <svg version="1.1" width="25" height="50" viewBox="3 1 2 4">
          <rect x="3" y="1" width="2" height="4" fill="#fcc932" ry="1" rx="1"></rect>
          <rect x="3" y="1" width="2" height="4" fill="#fee293" ry="1" rx="1" style={{ clipPath: `inset(0 0 ${meter}% 0)` }}></rect>
          <polygon width="2" height="4" points="0,10 25,50" fill="#f00"></polygon>
        </svg>
        <div className="absolute -left-3 border-transparent w-1.5" style={{ borderWidth: "3.75px 0 3.75px 6px", borderLeftColor: "#fff", bottom: `${meter / 2 - 3.5}px` }}></div>
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm">0</div>
      </div>
    );
  }
}
