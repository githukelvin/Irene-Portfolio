import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
// Create a simple router with auto-routing
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
   routes,
  scrollBehavior(to) {
    if (to.hash)
      return { el: to.hash, behavior: 'smooth', top: 60 }

    return { top: 0 }
  },
})

// Fallback for 404 routes
router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    next('/'); // Redirect to home page
  } else {
    next();
  }
});

export { router }
export default function (app) {
  app.use(router)
}
