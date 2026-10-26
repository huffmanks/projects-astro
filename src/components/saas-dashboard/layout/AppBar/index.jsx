import Notifications from "./Notifications";
import SearchBar from "./SearchBar";
import TimerGroup from "./TimerGroup";

const AppBar = () => {
  return (
    <header className="flex w-full items-center justify-between gap-6 bg-[#030e1e] px-5 py-4 sm:px-8 md:pl-9 xl:gap-10">
      <TimerGroup />
      <SearchBar />
      <Notifications />
    </header>
  );
};

export default AppBar;
