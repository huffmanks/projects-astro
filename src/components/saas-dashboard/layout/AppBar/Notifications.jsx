import { Bell, FileBarChart2, MessageSquare } from "lucide-react";

import { useSAAS } from "../../SAASContext";
import IconButton from "../../common/IconButton";

const Notifications = () => {
  const { sideBarExpanded } = useSAAS();

  const styles = {
    notifications: sideBarExpanded ? "md:flex" : "sm:flex",
  };

  return (
    <div className={`hidden gap-2 ${styles.notifications}`}>
      <IconButton buttonSize="normal" bgColor="frost">
        <MessageSquare className="h-5 w-5 stroke-white" />
      </IconButton>
      <IconButton buttonSize="normal" bgColor="frost">
        <FileBarChart2 className="h-5 w-5 stroke-white" />
      </IconButton>
      <IconButton buttonSize="normal" bgColor="frost" hasBadge>
        <Bell className="h-5 w-5 stroke-white" />
      </IconButton>
    </div>
  );
};

export default Notifications;
