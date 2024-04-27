import { useLocation, Link } from "react-router-dom";
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
import api from "@/services/api";
import { toast } from "react-toastify";

export function DashboardNavbar() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { openSidenav } = controller;
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");

  return (
    <Navbar
      color={"transparent"}
      className={`rounded-xl shadow shadow-md ease-in-out px-5 py-1`}
      style={{boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 4px 0 rgba(0, 0, 0, 0.05)"}}
      fullWidth
    >
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize text-surface-light">
          <Breadcrumbs
            className={"bg-transparent p-0 transition-all"}
          >
            <Link to={`/${layout}`}>
              <Typography
                variant="small"
                className="font-normal opacity-60 transition-all text-primary hover:opacity-100 hover:text-primary"
              >
                {layout}
              </Typography>
            </Link>
            <Typography
              variant="small"
              className="font-normal text-surface-light "
            >
              {page}
            </Typography>
          </Breadcrumbs>
        </div>
        <div className="flex items-center">
          <IconButton
            variant="text"
            color="blue-gray"
            className="grid xl:hidden"
            onClick={() => setOpenSidenav(!openSidenav)} // Ensure the openSidenav state and setOpenSidenav function are correctly implemented
          >
            <Bars3Icon strokeWidth={3} className="h-6 w-6 text-blue-gray-500" />
          </IconButton>
          <Link to="/dashboard/profile">
            <Button
              variant="text"
              color="blue-gray"
              className="hidden items-center gap-1 text-primary px-4 xl:flex normal-case"
            >
              <UserCircleIcon className="h-5 w-5 text-primary" />
            </Button>
            <IconButton
              variant="text"
              color="blue-gray"
              className="grid xl:hidden"
            >
              <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
            </IconButton>
          </Link>
        </div>
      </div>
    </Navbar>
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
