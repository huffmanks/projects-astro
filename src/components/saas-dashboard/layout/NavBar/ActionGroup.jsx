import { AlertCircle, ArrowUpFromLine, Filter, Plus, Sliders, Star } from "lucide-react";

import { useSAAS } from "../../SAASContext";
import Button from "../../common/Button";
import IconButton from "../../common/IconButton";
import Profile from "../../common/Profile";
import { profiles } from "../../constants";

const ActionGroup = () => {
  const { sideBarExpanded } = useSAAS();

  const styles = {
    group: sideBarExpanded ? "xl:flex-row xl:items-center" : "lg:flex-row lg:items-center",
    title: sideBarExpanded ? "md:flex-row md:items-center" : "sm:flex-row sm:items-center",
    options: sideBarExpanded ? "lg:flex-row" : "md:flex-row",
  };

  return (
    <div className={`mb-6 flex flex-col gap-x-8 gap-y-4 ${styles.group}`}>
      <div className={`mb-2 flex flex-col gap-2 lg:mb-0 ${styles.title}`}>
        <div className="text-3xl sm:mr-2">Project Board</div>

        <div className="flex gap-2">
          <IconButton buttonSize="normal" bgColor="frost">
            <Star className="h-5 w-5 stroke-orange-500" />
          </IconButton>
          <IconButton buttonSize="normal" bgColor="frost">
            <AlertCircle className="h-5 w-5 stroke-white" />
          </IconButton>
          <IconButton buttonSize="normal" bgColor="frost">
            <Sliders className="h-5 w-5 stroke-white" />
          </IconButton>
        </div>
      </div>

      <div className={`flex flex-col gap-x-6 gap-y-4 ${styles.options}`}>
        <div className="xws:flex-row xws:items-center mb-2 flex flex-col gap-3 md:mb-0">
          <div className="mt-2 flex flex-wrap sm:mt-0">
            {profiles.map((profile, i) => (
              <Profile key={i} profile={profile} direction="top" />
            ))}
            <IconButton buttonSize="normal" borderType="dashed" bgColor="gray" isStackable>
              <Plus className="h-4 w-4 stroke-sky-300" />
            </IconButton>
          </div>
        </div>

        <div className="xws:flex-row flex flex-col gap-2">
          <Button bgColor="frost" text="Filter &amp; Sort">
            <Filter />
          </Button>
          <Button bgColor="blue" text="Export CSV">
            <ArrowUpFromLine />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ActionGroup;
