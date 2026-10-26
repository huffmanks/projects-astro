import { Pause, RotateCcw, Timer } from "lucide-react";

import IconButton from "../../common/IconButton";

const TimerGroup = () => {
  return (
    <div className="hidden items-center gap-6 lg:flex">
      <div className="flex items-center gap-2">
        <div>
          <IconButton buttonSize="large" bgColor="transparent">
            <Timer className="h-7 w-7 stroke-sky-300" />
          </IconButton>
        </div>
        <div>
          <div className="text-sm text-gray-400">Total:</div>
          <div>02:38:24</div>
        </div>
      </div>
      <div className="flex gap-2">
        <IconButton buttonSize="normal" bgColor="frost">
          <Pause className="h-4 w-4 fill-red-500 stroke-red-500" />
        </IconButton>
        <IconButton buttonSize="normal" bgColor="frost">
          <RotateCcw className="h-4 w-4 stroke-white" />
        </IconButton>
      </div>
    </div>
  );
};

export default TimerGroup;
