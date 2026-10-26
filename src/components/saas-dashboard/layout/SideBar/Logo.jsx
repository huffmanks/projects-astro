import { useSAAS } from "../../SAASContext";

const Logo = () => {
  const { sideBarExpanded } = useSAAS();

  const styles = {
    header: sideBarExpanded ? "mt-2 mb-10 px-4" : "mt-5 mb-8 sm:mt-2 sm:mb-10 justify-center",
    logo: sideBarExpanded ? "w-4" : "w-5",
    display: sideBarExpanded ? "opacity-1 visible" : "absolute opacity-0 invisible",
  };

  return (
    <header
      className={`flex items-center gap-2 transition-[padding] delay-150 duration-400 ease-in-out ${styles.header}`}>
      <div className={`transition-all duration-100 ease-linear ${styles.logo}`}>
        <img className="block h-auto max-w-full" src="/saas-dashboard/logo.png" alt="logo" />
      </div>
      <div
        className={`text-lg font-medium transition-opacity delay-150 duration-400 ease-in-out ${styles.display}`}>
        Protion
      </div>
    </header>
  );
};

export default Logo;
