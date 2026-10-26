import { ChevronDown } from "lucide-react";

import { useSAAS } from "../../SAASContext";

const Workspace = ({ space }) => {
  const { sideBarExpanded } = useSAAS();

  const styles = {
    display: sideBarExpanded
      ? "opacity-1 visible duration-400 delay-150"
      : "absolute opacity-0 invisible duration-10",
    dotSize: sideBarExpanded ? "mr-3" : "mx-1.5",
    pink: "bg-pink-500",
    blue: "bg-blue-500",
    red: "bg-red-500",
  };

  return (
    <div className="group flex cursor-pointer justify-between gap-1">
      <div className="flex items-center">
        <div className={`h-2 w-2 rounded-full ${styles.dotSize} ${styles[space.color]}`}></div>
        <div
          className={`text-sm transition-opacity ease-in-out group-hover:text-sky-500 ${styles.display}`}>
          {space.label}
        </div>
      </div>

      <div
        className={`flex w-6 items-center justify-center text-lg transition-opacity ease-in-out ${styles.display}`}>
        <ChevronDown className="h-4 w-4 stroke-gray-400 group-hover:stroke-sky-500" />
      </div>
    </div>
  );
};

export default Workspace;
