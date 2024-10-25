import classNames from "classnames";

const Sidebar = () => {
  return (
    <aside
      data-component-name="Sidebar"
      className={classNames(
        "fixed top-0 left-0 bottom-0 z-30",
        "flex flex-col",
        "w-sidebar",
        "border-r border-gray-100",
        "py-8 px-6"
      )}
    >
      Sidebar
    </aside>
  );
};

export default Sidebar;
