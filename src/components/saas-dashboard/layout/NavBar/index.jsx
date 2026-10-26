import ActionGroup from "./ActionGroup";
import Breadcrumbs from "./Breadcrumbs";
import Categories from "./Categories";

const NavBar = () => {
  return (
    <div className="bg-linear-to-r from-[#041124] via-[#05244c] to-[#041124] px-5 py-8 sm:pr-8 sm:pl-10">
      <Breadcrumbs />
      <ActionGroup />
      <Categories />
    </div>
  );
};

export default NavBar;
