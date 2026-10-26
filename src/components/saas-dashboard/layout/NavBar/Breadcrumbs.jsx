import { ChevronRight } from "lucide-react";

const Breadcrumbs = () => {
  return (
    <div className="mb-6 flex flex-wrap gap-x-2 gap-y-1">
      <div className="flex items-center gap-2">
        <div className="text-sky-500">Project</div>
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-600/30">
          <ChevronRight className="h-3.5 w-3.5 stroke-sky-500" />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-sky-500">Dashboard</div>
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-600/30">
          <ChevronRight className="h-3.5 w-3.5 stroke-sky-500" />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-gray-400">Project Board</div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
