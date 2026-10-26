import { useSAAS } from "../SAASContext";

const PageContainer = ({ children }) => {
  const { sideBarExpanded } = useSAAS();

  const styles = {
    padding: sideBarExpanded ? "sm:pl-72" : "pl-16 sm:pl-20",
  };

  return (
    <div
      className={`flex w-full flex-col transition-all duration-150 ease-linear ${styles.padding}`}>
      {children}
    </div>
  );
};

export default PageContainer;
