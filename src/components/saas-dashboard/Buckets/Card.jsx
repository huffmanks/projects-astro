import { Calendar, Minus, MoreHorizontal } from "lucide-react";

import { useSAAS } from "../SAASContext";
import Chip from "../common/Chip";
import IconButton from "../common/IconButton";
import Profile from "../common/Profile";
import { profiles } from "../constants";

const Card = ({ card }) => {
  const { sideBarExpanded } = useSAAS();

  const profile = profiles.find((profile) => profile.team === card.team);

  const progressHasBeenMade = (index) => {
    return index + 1 <= card.progress / 10;
  };

  const styles = {
    textSm: sideBarExpanded ? "md:text-sm" : "sm:text-sm",
    textXl: sideBarExpanded ? "md:text-xl" : "sm:text-xl",
  };

  return (
    <>
      <div className="mb-4 rounded-2xl bg-gray-600/30 px-6 pt-4 pb-6">
        <div className="mb-2 flex items-center justify-between gap-2">
          <Chip text={card.team} size="normal" color={card.teamColor} />
          <div className="-mr-2">
            <IconButton buttonSize="normal" bgColor="transparent">
              <MoreHorizontal className="h-5 w-5 stroke-white" />
            </IconButton>
          </div>
        </div>

        <div className={`mb-4 text-lg ${styles.textXl}`}>{card.title}</div>

        <div className="mb-1">
          <div className="mb-2 flex justify-between gap-2">
            <div className={`text-xs text-gray-400 ${styles.textSm}`}>Progress</div>
            <div className={`text-xs text-sky-500 ${styles.textSm}`}>{card.progress}%</div>
          </div>
          <div className="flex w-full">
            {Array(10)
              .fill(1)
              .map((_, i) => (
                <Minus
                  key={i}
                  className={`h-8 w-full ${progressHasBeenMade(i) ? "stroke-sky-500" : "stroke-gray-600"}`}
                />
              ))}
          </div>
        </div>

        <div className="flex justify-between gap-2">
          <div className="mt-2 flex flex-wrap sm:mt-0">
            <Profile profile={profile} direction="right" />
          </div>

          <div className="flex items-center gap-1">
            <IconButton buttonSize="normal" bgColor="transparent">
              <Calendar className="h-5 w-5 stroke-white" />
            </IconButton>
            <div className={`text-xs ${styles.textSm}`}>{card.deadline}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
