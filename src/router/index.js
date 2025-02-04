import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/homeView.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/modeView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../components/contactComponent.vue"),
      meta: {
        requiresContact: true,
      },
    },
    {
      path: "/project",
      name: "project",
      component: () => import("../components/projectAllComponent.vue"),
      meta: {
        requiresProject: true,
      },
    },
    {
      path: "/:catchAll(.*)",
      redirect: { name: "home" }, // Redirect to the home route
    },
  ],
});

router.beforeEach((to, from, next) => {
  const mode = sessionStorage.getItem("mode");

  if (to.name === "dashboard" && mode === "true") {
    next({ name: "home" });
  } else if (to.path === "/" && mode !== "true") {
    next({ name: "dashboard" });
  } else if (
    to.meta.requiresContact &&
    sessionStorage.getItem("contact") !== "true"
  ) {
    if (mode !== "true") {
      next({ name: "dashboard" });
    } else {
      next({ name: "home" });
    }
  } else if (
    to.meta.requiresProject &&
    sessionStorage.getItem("project") !== "true"
  ) {
    if (mode !== "true") {
      next({ name: "dashboard" });
    } else {
      next({ name: "home" });
    }
  } else {
    next();
  }
});

export default router;
