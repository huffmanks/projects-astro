const Profile = ({ profile, direction }) => {
  const styles = {
    tooltip: {
      top: "left-[calc(50%_+_4px)] bottom-14 -translate-x-1/2",
      right: "top-1/2 left-14 -translate-y-1/2",
    },
    toolArrow: {
      top: "left-1/2 -bottom-1 -translate-x-1/2",
      right: "top-1/2 -left-[3px] -translate-y-1/2",
    },
  };

  return (
    <div className="group relative">
      <div className="-mt-2 -mr-2 h-10 w-10 cursor-pointer rounded-full border-2 border-solid border-gray-600 hover:scale-125 sm:mt-0">
        <img src={profile.image} alt={profile.name} />
      </div>

      <div
        role="tooltip"
        className={`invisible absolute z-10 inline-block min-w-max rounded-full bg-gray-700 px-4 py-2 text-sm opacity-0 shadow-sm group-hover:visible group-hover:opacity-100 ${styles.tooltip[direction]}`}>
        {profile.name}
        <div
          className={`invisible absolute h-2 w-2 opacity-0 group-hover:visible group-hover:opacity-100 before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-gray-700 ${styles.toolArrow[direction]}`}></div>
      </div>
    </div>
  );
};

export default Profile;
