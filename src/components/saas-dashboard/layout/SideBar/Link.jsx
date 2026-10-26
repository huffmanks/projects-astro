import { useSAAS } from "../../SAASContext";

const Link = ({ link, children }) => {
  const { sideBarExpanded } = useSAAS();

  const styles = {
    display: sideBarExpanded
      ? "opacity-1 visible duration-400 delay-150"
      : "absolute opacity-0 invisible duration-100",
    linkColor: link.isActive ? "text-sky-600" : "",
  };

  return (
    <a className="group flex items-center justify-between gap-1" href={link.path}>
      <div className="flex items-center gap-3 text-sm">
        {children}
        <span
          className={`w-max transition-opacity ease-in-out group-hover:text-sky-500 ${styles.display} ${styles.linkColor}`}>
          {link.label}
        </span>
      </div>

      <div
        className={`flex h-5 w-5 items-center justify-center rounded-md bg-gray-600/30 text-[10px] leading-none transition-all ease-in-out group-hover:bg-sky-500 ${styles.display}`}>
        <span>{link.short}</span>
      </div>
    </a>
  );
};

export default Link;
