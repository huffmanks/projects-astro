interface DailyItemProps {
  label: string;
  number: number | string;
  unit?: string;
  note?: string;
}

export default function DailyItem({ label, number, unit, note }: DailyItemProps) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <div className="mb-6">{label}</div>

      <div className="flex gap-4 justify-between">
        <div>
          <div className="flex gap-1 items-center">
            <span className="text-lg">{number}</span>
            {unit && <span className="text-sm text-gray-500">{unit}</span>}
          </div>
          {note && <div className="text-gray-500 text-sm">{note}</div>}
        </div>

        <div>icon</div>
      </div>
    </div>
  );
}
