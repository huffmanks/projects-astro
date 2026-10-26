import { Mic, Search } from "lucide-react";

import { useSAAS } from "../../SAASContext";
import IconButton from "../../common/IconButton";

const SearchBar = () => {
  const { searchInputRef } = useSAAS();

  return (
    <div className="flex w-full max-w-xl items-center rounded-full bg-gray-600/30 focus-within:ring-2 focus-within:ring-sky-500">
      <div className="rounded-tl-full rounded-bl-full bg-gray-600/30 py-0.5 pl-1">
        <IconButton buttonSize="normal" bgColor="transparent">
          <Search className="h-4 w-4 stroke-white" />
        </IconButton>
      </div>

      <input
        ref={searchInputRef}
        className="w-full flex-1 bg-gray-600/30 px-2 py-3 text-sm outline-none"
        type="text"
        placeholder="Search something..."
      />

      <div className="min-w-ma hidden items-center justify-center bg-inherit py-2 md:flex">
        <span className="rounded-md bg-gray-800 px-3 py-2 text-xs leading-none">CMD + K</span>
      </div>

      <div className="rounded-tr-full rounded-br-full bg-gray-600/30 py-0.5 pr-1">
        <IconButton buttonSize="normal" bgColor="transparent">
          <Mic className="h-4 w-4 stroke-sky-300" />
        </IconButton>
      </div>
    </div>
  );
};

export default SearchBar;
