import classNames from "classnames";
import Logo from "../components/ui/Logo";
import NavList from "../components/navigation/NavList";
import NavItem from "../components/navigation/NavItem";
import Nav from "../components/navigation/Nav";

const Sidebar = () => {
  return (
    <aside
      data-component-name="Sidebar"
      className={classNames(
        "fixed top-0 left-0 bottom-0 z-30",
        "flex flex-col gap-8",
        "w-sidebar",
        "border-r border-gray-100",
        "py-8 px-6"
      )}
    >
      <Logo />
      <Nav>
        <NavList>
          <NavItem
            icon="HiOutlineHome"
            to="/dashboard"
            text="Dashboard"
          />

          <NavItem
            icon="HiOutlineCalendarDays"
            to="/bookings"
            text="Bookings"
          />

          <NavItem
            icon="HiOutlineHomeModern"
            to="/cabins"
            text="Cabins"
          />

          <NavItem
            icon="HiOutlineCog6Tooth"
            to="/settings"
            text="Settings"
          />
        </NavList>
      </Nav>
    </aside>
  );
};

export default Sidebar;
