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

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        name: "project",
        path: "/project/:projectId",
        dynamic: true,
        element: <ProjectDetails />,
      },
      {
        name: "timeline",
        path: "/timeline",
        element: <Timeline />,
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
