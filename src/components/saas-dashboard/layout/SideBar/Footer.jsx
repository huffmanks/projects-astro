import { MoreHorizontal } from "lucide-react";

import { useSAAS } from "../../SAASContext";
import Chip from "../../common/Chip";
import IconButton from "../../common/IconButton";

const Footer = () => {
  const { sideBarExpanded } = useSAAS();

  const styles = {
    footer: sideBarExpanded ? "justify-between pr-4" : "justify-center",
    display: sideBarExpanded ? "opacity-1 visible" : "absolute opacity-0 invisible",
  };

  return (
    <div
      className={`relative mt-auto mb-2 flex items-center gap-1 transition-all delay-150 duration-400 ease-in-out ${styles.footer}`}>
      <div
        className={`flex items-center gap-3 transition-opacity delay-150 duration-400 ease-in-out ${styles.display}`}>
        <div className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-sky-500 text-xl hover:opacity-70">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="fill-white"
            height="1em"
            width="1em">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <circle cx="7.2" cy="14.4" r="3.2"></circle>
            <circle cx="14.8" cy="18" r="2"></circle>
            <circle cx="15.2" cy="8.8" r="4.8"></circle>
          </svg>
        </div>

        <div>
          <div className="flex gap-2">
            <div className="text-sm">Alireza Kian</div>
            <Chip text="Free" size="small" color="green" />
          </div>
          <div className="text-xs text-gray-600">alirezakian.me</div>
        </div>
      </div>

      <div className="flex w-6 cursor-pointer items-center justify-center text-lg">
        <IconButton buttonSize="normal" bgColor="transparent">
          <MoreHorizontal className="h-5 w-5 stroke-white" />
        </IconButton>
      </div>
    </div>
  );
};

export default Footer;
