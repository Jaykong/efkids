import Vue from "vue";
import Router from "vue-router";
import Start from "./views/Start.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "start",
      component: Start
    },
    {
      path: "/selectcountry",
      name: "country",
      component: () => import("./views/SelectCountry.vue")
    },
    {
      path: "/upload",
      name: "upload",
      component: () => import("./views/Upload.vue")
    },
    {
      path: "/passport",
      name: "passport",
      component: () => import("./views/Passport.vue")
    }
  ]
});
