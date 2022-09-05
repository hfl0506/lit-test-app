import { Router, Route } from "@vaadin/router";

const routes: Route[] = [
  {
    path: "/",
    component: "lit-app",
    action: async () => {
      await import("./pages/lit-app");
    },
    children: [
      {
        path: "",
        component: "lit-home",
        action: async () => {
          await import("./pages/home/lit-home");
        },
      },
      {
        path: "update",
        component: "lit-update",
        action: async () => {
          await import("./pages/update/lit-update");
        },
      },
    ],
  },
  {
    path: "/about",
    component: "lit-about",
    action: async () => {
      await import("./pages/about/lit-about");
    },
  },
];

const app = document.getElementById("app");
const router = new Router(app);
router.setRoutes(routes);

export const goToPage = (path: string) => {
  return router.urlForPath(path);
};
