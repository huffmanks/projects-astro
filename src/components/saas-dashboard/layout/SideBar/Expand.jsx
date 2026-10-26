import { ChevronsRight } from "lucide-react";

import { useSAAS } from "../../SAASContext";

const Expand = () => {
  const { sideBarExpanded, handleSidebar } = useSAAS();

  const styles = {
    circle: sideBarExpanded
      ? "absolute top-[22px] -right-3 bg-gray-800 sm:bg-gray-600/30"
      : "sm:absolute sm:top-5 sm:-right-4 bg-gray-600/30",
    icon: sideBarExpanded ? "rotate-180" : "rotate-0",
  };

  return (
    <div
      className={`flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-sm ${styles.circle}`}
      onClick={handleSidebar}>
      <ChevronsRight
        className={`h-4 w-4 stroke-gray-400 transition-all duration-100 ease-in ${styles.icon}`}
      />
    </div>
  );
};

export default Expand;
