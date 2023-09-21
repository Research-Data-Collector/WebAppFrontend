import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/common/LogIn.vue";
import Signup from "../views/common/SignUp.vue";
import DashboardCollector from "../components/Dashboard-Collector/Dashboard-Collector.vue";
import JoinResearch from "../views/Data-Collector/JoinResearch.vue";
import OngoingResearch from "../views/Data-Collector/OngoingResearch.vue";



const routes = [
    {
        path: "/",
        name: "login",
        component: Login,
    },
    {
        path: "/signup",
        name: "signup",
        component: Signup,
    },
    {
        path: "/dashboard-collector",
        name: "dashboard-collector",
        component: DashboardCollector,
            children: [
            {
                path: "join-research",
                name: "join-research",
                component: JoinResearch,
            },
            {
                path: "ongoing-research", //removed / from the beginning
                name: "ongoing-research",
                component: OngoingResearch,
            },
        ],
      },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;  