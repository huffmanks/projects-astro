import { Flashlight, Lightbulb, Palette, PartyPopper, Plus } from "lucide-react";

import IconButton from "../common/IconButton";
import Card from "./Card";

const Bucket = ({ bucket }) => {
  return (
    <div className="w-full snap-center md:min-w-[350px]">
      <div
        className={`mb-4 flex items-center justify-between gap-2 border-b-4 pb-4 ${bucket.borderColor}`}>
        <div className="flex items-center gap-3">
          <IconButton buttonSize="normal" bgColor="frost">
            {bucket.icon === "Lightbulb" ? (
              <Lightbulb className={bucket.color} />
            ) : bucket.icon === "Palette" ? (
              <Palette className={bucket.color} />
            ) : bucket.icon === "Flashlight" ? (
              <Flashlight className={bucket.color} />
            ) : bucket.icon === "PartyPopper" ? (
              <PartyPopper className={bucket.color} />
            ) : (
              ""
            )}
          </IconButton>
          <div className="flex items-center gap-2">
            <div className="text-sm">{bucket.title}</div>
            <div className="flex items-center justify-center rounded-md bg-gray-600/30 px-1.5 py-1 text-[10px] leading-none">
              <span>{bucket.total}</span>
            </div>
          </div>
        </div>
        <IconButton buttonSize="small" bgColor="frost">
          <Plus className="h-4 w-4 stroke-white" />
        </IconButton>
      </div>
      {bucket.cards.map((card, i) => (
        <Card key={i} card={card} />
      ))}
    </div>
  );
};

export default Bucket;
