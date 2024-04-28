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
import { Checkbox } from "@material-tailwind/react";


const notifications = [
  {
    message: "Today's George birthday! Send him a gift!🎉🎁",
    createdDate: "2024-04-28T12:00:00",
    isReadHidden: false
  },
  {
    message: "See what happend on this day in history!📜🔍",
    createdDate: "2024-04-27T09:00:00",
    isReadHidden: false
  },
  {
    message: "See what's new in the shop! 🛍️🎁",
    createdDate: "2024-04-26T09:00:00",
    isReadHidden: true
  },
];

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
                pages.map(({ path, name, element, index }) => name !== "Profile" && name !== "Capsule" && name !== "Home" && (
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
          <Link to={'/dashboard/birthdaycapsule'} >
              <i className="fa-solid fa-gift fa-beat cursor-pointer mr-2" style={{color: "#ffffff"}} />
          </Link>
          <Menu>
            <MenuHandler>
              <IconButton variant="text" color="blue-gray">
                <BellIcon className="h-5 w-5 text-white" />
              </IconButton>
            </MenuHandler>
            
            <MenuList className="border-0 bg-surface-dark max-w-sm max-h-[80vh] minimal-scrollbar text-surface-light">
              <div className="px-2 pb-1 flex justify-between items-center focus:outline-0">
                <Typography variant="h5" className="min-w-[150px]">
                  Notifications
                </Typography>
              </div>
              {notifications.length === 0 ?
                <ListItem disabled className="!text-surface-light opacity-70">
                  <strong>No new notifications</strong>
                </ListItem>
                :
                notifications.map((notification, index) => {
                  if (notification.isRead === true) {
                    return null;
                  }
                  return (
                    <Link to="/dashboard/send-gift">
                      <ListItem key={`notif-${index}`} className="flex flex-col items-start w-full md:w-[20rem] focus:bg-surface-mid-dark focus:text-surface-light active:bg-surface-mid-dark active:text-surface-light" >
                        <Typography variant="small" className="mb-1 font-normal ">
                          <strong>{notification.message}</strong>
                        </Typography>

                        <div className="flex justify-between w-full">
                          <Typography variant="small" className="flex items-center gap-1 text-xs font-normal opacity-60">
                            <ClockIcon className="h-3.5 w-3.5 text-secondary" /> {formatDate(notification.createdDate)}
                          </Typography>

                          <Typography variant="small" className="flex items-center gap-1 text-xs font-normal opacity-60">
                            <CheckIcon className="h-3.5 w-3.5" /> Read
                          </Typography>
                        </div>
                      </ListItem>
                    </Link>
                  )
                }
                )
              }
            </MenuList>
          </Menu>
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
