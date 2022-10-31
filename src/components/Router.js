import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home";

import Services from "../components/Services";
import LogoMakerDetail from "../components/LogoMakerDetail"
import NotificationTrapperDetail from "../components/NotificationTrapperDetail"

Vue.use(Router);
const router = new Router({
    mode: "history",
    routes: [{
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/services",
            name: "Services",
            component: Services,
        },
        {
            path: "/project-description/logomaker",
            name: "LogoMaker",
            component: LogoMakerDetail,
        },
        {
            path: "/project-description/notificationtrapper",
            name: "Notificationtrapper",
            component: NotificationTrapperDetail,
        },
    ],
});

export default router;