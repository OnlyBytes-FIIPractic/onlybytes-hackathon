import {
  HomeIcon,
  UserCircleIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import SendResetCode from "./pages/auth/SendResetCode";
import Timeline from "./pages/timeline/Timeline";
import Capsule from "./pages/capsule/Capsule";
import Shop from "./pages/shop/Shop";
import UploadPhoto from "./pages/uploadPhotos/UploadPhoto";
import SendGift from "./pages/sendGift/SendGift";
import { Family } from "./pages/family/Family";
import BirthdayCapsule from "./pages/capsule/BirthdayCapsule";
import Plan from "./pages/pricing/Plan";
import { FamilyMember } from "./pages/family/FamilyMember";
import { element } from "prop-types";


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
        name: "BirthdayCapsule",
        path: "/birthdaycapsule",
        element: <BirthdayCapsule/>,
      },
      {
        name: "Family",
        path: "/family",
        element: <Family />,
      },
      {
        name: "Add memory",
        path: "/add-memory",
        element: <UploadPhoto />,
      },
      {
        name: "Shop",
        path: "/shop",
        element: <Shop />,
      },
      {
        name: "Plan",
        path: "/plan",
        element: <Plan />,

      },
      {
        path: "/family-member/:id",
        element: <FamilyMember />,
      },
      {
        element: <SendGift />,
        path: "/send-gift",
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
