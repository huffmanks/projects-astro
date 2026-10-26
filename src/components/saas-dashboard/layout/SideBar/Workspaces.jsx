import { useSAAS } from "../../SAASContext";
import { workspaces } from "../../constants";
import Workspace from "./Workspace";

const Workspaces = () => {
  const { sideBarExpanded } = useSAAS();

  const styles = {
    workspaces: sideBarExpanded ? "px-4" : "",
    display: sideBarExpanded ? "opacity-1 visible" : "absolute opacity-0 invisible",
    workspace: sideBarExpanded ? "" : "items-center",
  };

  return (
    <div className={`transition-all delay-150 duration-400 ease-in-out ${styles.workspaces}`}>
      <div className="mb-4 w-max text-xs font-bold uppercase">
        <span
          className={`text-gray-600 transition-opacity duration-100 ease-in-out ${styles.display}`}>
          Work
        </span>
        <span className="text-gray-600">spaces</span>
      </div>

      <div className={`mb-8 flex flex-col gap-4 ${styles.workspace}`}>
        {workspaces.map((space, i) => (
          <Workspace key={i} space={space} />
        ))}
      </div>
    </div>
  );
};

export default Workspaces;
