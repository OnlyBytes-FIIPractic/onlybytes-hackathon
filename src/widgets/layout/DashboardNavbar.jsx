import { useLocation, Link, Route, Routes } from "react-router-dom";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Breadcrumbs,
  Menu,
  MenuHandler,
  MenuList,
  ListItem
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  BellIcon,
  ClockIcon,
  Bars3Icon,
  CheckIcon
} from "@heroicons/react/24/solid";
import {
  useMaterialTailwindController,
  setOpenSidenav,
} from "@/context";
import { toast } from "react-toastify";


export function DashboardNavbar({ routes }) {
  const [controller, dispatch] = useMaterialTailwindController();
  const { openSidenav } = controller;
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");


  return (
    <Navbar
      color={"transparent"}
      className={`rounded-xl shadow-md ease-in-out px-5 py-1 bg-primary`}
      style={{ boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 4px 0 rgba(0, 0, 0, 0.05)" }}
      fullWidth
    >
      <div className="flex items-center w-full justify-between">
        {/*<div className="capitalize text-surface-light">*/}
        {/*  <Breadcrumbs*/}
        {/*    className={"bg-transparent p-0 transition-all"}*/}
        {/*  >*/}
        {/*    <Link to={`/${layout}`}>*/}
        {/*      <Typography*/}
        {/*        variant="small"*/}
        {/*        className="font-normal opacity-60 transition-all text-gray-300 hover:opacity-100 hover:text-white"*/}
        {/*      >*/}
        {/*        {layout}*/}
        {/*      </Typography>*/}
        {/*    </Link>*/}
        {/*    <Typography*/}
        {/*      variant="small"*/}
        {/*      className="font-normal text-white "*/}
        {/*    >*/}
        {/*      {page}*/}
        {/*    </Typography>*/}
        {/*  </Breadcrumbs>*/}
        {/*</div>*/}
        <Link to={`/dashboard/home`}>
          <p className="text-white hover:text-yellow-700">Home</p>
        </Link>
        <div className="flex items-center md:w-full">
          <div className="md:flex gap-10 mx-auto hidden">
            {routes.map(
              ({ layout, pages }) =>
                layout === "dashboard" &&
                pages.map(({ path, name, element, index }) => name !== "Profile" && name !== "Home" && (
                  <Link to={`/dashboard${path}`} key={index} >
                    <p className="text-white hover:text-yellow-700">{name}</p>
                  </Link>
                ))
            )}
          </div>

          <IconButton
            variant="text"
            color="blue-gray"
            className="grid md:hidden "
            onClick={() => setOpenSidenav(!openSidenav)}
          >
            <Bars3Icon strokeWidth={3} className="h-6 w-6 text-white" />
          </IconButton>
          <Link to="/dashboard/profile">
            <Button
              variant="text"
              color="blue-gray"
              className="hidden items-center gap-1 text-primary px-4 xl:flex normal-case"
            >
              <UserCircleIcon className="h-5 w-5 text-white" />
            </Button>
            <IconButton
              variant="text"
              color="blue-gray"
              className="grid xl:hidden"
            >
              <UserCircleIcon className="h-5 w-5 text-white" />
            </IconButton>
          </Link>
        </div>
      </div>
    </Navbar >
  );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

function formatDate(date) {
  return new Intl.DateTimeFormat("ro", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    timeZone: "Europe/Bucharest",
  }).format(new Date(date));
}

export default DashboardNavbar;
