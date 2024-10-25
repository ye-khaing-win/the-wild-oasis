import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import classNames from "classnames";

const AppLayout = () => {
  return (
    <div>
      <Sidebar />
      <section
        className={classNames(
          "pl-main",
          "h-screen",
          "flex flex-col"
        )}
      >
        <Header />
        <main
          className={classNames(
            "bg-gray-50",
            "pt-10 px-12 pb-16",
            "flex-grow"
          )}
        >
          <Outlet />
        </main>
      </section>
    </div>
  );
};

export default AppLayout;
