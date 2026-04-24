import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Data from "./pages/Data";
import Essentials from "./pages/Essentials";
import Faqs from "./pages/Faqs";
import Food from "./pages/Food";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Hostel from "./pages/Hostel";
import Portals from "./pages/Portals";
import Resources from "./pages/Resources";
import StudyAbroad from "./pages/StudyAbroad";
import Survival from "./pages/Survival";

const rootRoute = createRootRoute({ component: Outlet });

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});
const faqsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/faqs",
  component: Faqs,
});
const academicsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/academics",
  component: Academics,
});
const hostelRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/hostel",
  component: Hostel,
});
const foodRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/food",
  component: Food,
});
const essentialsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/essentials",
  component: Essentials,
});
const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/gallery",
  component: Gallery,
});
const survivalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/survival",
  component: Survival,
});
const portalsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/portals",
  component: Portals,
});
const dataRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/data",
  component: Data,
});
const resourcesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/resources",
  component: Resources,
});
const studyAbroadRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/study-abroad",
  component: StudyAbroad,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  faqsRoute,
  academicsRoute,
  hostelRoute,
  foodRoute,
  essentialsRoute,
  galleryRoute,
  survivalRoute,
  portalsRoute,
  dataRoute,
  resourcesRoute,
  studyAbroadRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
