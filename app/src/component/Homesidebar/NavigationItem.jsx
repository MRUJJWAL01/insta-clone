const NavigationItem = ({ item, isActive, onClick }) => {
    
  const IconComponent = item.icon;

  return (
    <div
      onClick={() => onClick(item.label)}
      className={`
          relative flex items-center space-x-4 px-3 py-3 rounded-lg cursor-pointer
          transition-colors duration-200 group hover:bg-[#1A1A1A]
          ${
            isActive
              ? " text-white font-bold"
              : "text-gray-300 hover:text-white"
          }
        `}
    >
      {/* Icon Container */}
      <div className="relative">
        <IconComponent
          size={24}
          className={`
              transition-transform duration-200
              ${isActive ? "scale-110 font-bold" : "group-hover:scale-105"}
            `}
          strokeWidth={isActive ? 2.5 : 2}
        />

        {/* Notification Badge */}
        {item.hasNotification && item.notificationCount > 0 && (
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
            {item.notificationCount}
            {console.log(item.notificationCount)
            }
          </div>
        )}
      </div>

      {/* Label */}
      <span
        className={`
          text-base font-normal
          ${isActive ? "font-bold" : ""}
        `}
      >
        {item.label}
      </span>
    </div>
  );
};

export default NavigationItem;