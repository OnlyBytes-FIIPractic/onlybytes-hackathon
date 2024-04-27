import {
  HomeIcon,
  UserCircleIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import ProjectDetails from "./pages/projectOverview/ProjectDetails";
import SendResetCode from "./pages/auth/SendResetCode";
import Timeline from "./pages/timeline/Timeline";
import Capsule from "./pages/capsule/Capsule";
import UploadPhoto from "./pages/uploadPhotos/UploadPhoto";
import SendGift from "./pages/sendGift/SendGift";
import { Family } from "./pages/family/Family";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Home",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        name: "Timeline",
        path: "/timeline",
        element: <Timeline />,
      },
      {
        name: "Capsule",
        path: "/capsule",
        element: <Capsule />,
      },
      {
        name: "Add a memory",
        path: "/upload-photo",
        element: <UploadPhoto />,
      },

      {
        name: "Send a gift",
        path: "/send-gift",
        element: <SendGift />,
      },

      {
        name: "Family",
        path: "/family",
        element: <Family />,
      }
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "forgot password",
        path: "/forgot-password",
        element: <SendResetCode />,
      },

    ],
  },
];

export default routes;
