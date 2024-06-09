import { calculateUVFill, fillArc } from "./utils";

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

      <div className="flex gap-4 justify-between">
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
        </svg>
        <div className="absolute -left-3 border-transparent w-1.5" style={{ borderWidth: "3.75px 0 3.75px 6px", borderLeftColor: "#fff", bottom: `${meter / 2 - 3.5}px` }}></div>
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm">0</div>
      </div>
    );
  }

  if (label === "UV Index") {
    const { yPos, rectHeight } = calculateUVFill({ uvIndex: meter });
    return (
      <div className="relative">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm">11+</div>

        <svg width="40" height="40" viewBox="0 0 257 257" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <mask id="fill-mask">
              <rect x="0" y="0" width="100%" height="100%" fill="white" />
              <rect id="overlay-rect" x="0" y={yPos} width="100%" height={rectHeight} fill="black" />
            </mask>
          </defs>
          <path
            d="M161.935 24.5565C146.551 19.5376 128.412 0.200073 128.412 0.200073C128.412 0.200073 110.272 19.5376 94.8879 24.5565C79.3905 29.6123 53.1461 24.5565 53.1461 24.5565C53.1461 24.5565 49.8384 51.0744 40.2471 64.2553C30.6991 77.3769 6.62939 88.68 6.62939 88.68C6.62939 88.68 19.4702 111.972 19.4702 128.2C19.4702 144.428 6.62939 167.72 6.62939 167.72C6.62939 167.72 30.6991 179.023 40.2471 192.145C49.8384 205.326 53.1461 231.844 53.1461 231.844C53.1461 231.844 79.3905 226.788 94.8879 231.844C110.272 236.863 128.412 256.2 128.412 256.2C128.412 256.2 146.551 236.863 161.935 231.844C177.433 226.788 203.677 231.844 203.677 231.844C203.677 231.844 206.985 205.326 216.576 192.145C226.124 179.023 250.194 167.72 250.194 167.72C250.194 167.72 237.353 144.428 237.353 128.2C237.353 111.972 250.194 88.68 250.194 88.68C250.194 88.68 226.124 77.3769 216.576 64.2553C206.985 51.0744 203.677 24.5565 203.677 24.5565C203.677 24.5565 177.433 29.6123 161.935 24.5565Z"
            fill="#a7d27b"
          />
          <path
            d="M161.935 24.5565C146.551 19.5376 128.412 0.200073 128.412 0.200073C128.412 0.200073 110.272 19.5376 94.8879 24.5565C79.3905 29.6123 53.1461 24.5565 53.1461 24.5565C53.1461 24.5565 49.8384 51.0744 40.2471 64.2553C30.6991 77.3769 6.62939 88.68 6.62939 88.68C6.62939 88.68 19.4702 111.972 19.4702 128.2C19.4702 144.428 6.62939 167.72 6.62939 167.72C6.62939 167.72 30.6991 179.023 40.2471 192.145C49.8384 205.326 53.1461 231.844 53.1461 231.844C53.1461 231.844 79.3905 226.788 94.8879 231.844C110.272 236.863 128.412 256.2 128.412 256.2C128.412 256.2 146.551 236.863 161.935 231.844C177.433 226.788 203.677 231.844 203.677 231.844C203.677 231.844 206.985 205.326 216.576 192.145C226.124 179.023 250.194 167.72 250.194 167.72C250.194 167.72 237.353 144.428 237.353 128.2C237.353 111.972 250.194 88.68 250.194 88.68C250.194 88.68 226.124 77.3769 216.576 64.2553C206.985 51.0744 203.677 24.5565 203.677 24.5565C203.677 24.5565 177.433 29.6123 161.935 24.5565Z"
            fill="#d6ebc1"
            mask="url(#fill-mask)"
          />
        </svg>
        <div className="text-sm text-center">0</div>
      </div>
    );
  }

  if (label === "Pressure") {
    const strokeDashoffset = fillArc({ currentPressure: meter });
    return (
      <div>
        <svg width="50" height="50" viewBox="0 20 110 80">
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="100%">
            <stop offset="0%" stopColor="rgba(100, 0, 233, 0.76)" />
            <stop offset="100%" stopColor="rgba(100, 0, 233, 0.66)" />
          </linearGradient>
          <path d="M30,90 A40,40 0 1,1 80,90" fill="none" stroke="#e7e7e8" strokeLinecap="round" strokeWidth="15" />
          <path fill="none" d="M30,90 A40,40 0 1,1 80,90" stroke="url(#gradient)" strokeLinecap="round" strokeWidth="15" strokeDasharray="198" strokeDashoffset={strokeDashoffset} />
        </svg>

        <div className="flex items-center gap-1">
          <div className="text-xs">Low</div>
          <div className="text-xs">High</div>
        </div>
      </div>
    );
  }
}
