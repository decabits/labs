import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
// import ContactUs from '../components/Contactus';
import Services from '../components/Services';

Vue.use(Router)

const router = new Router({
    mode: "history",
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        // {
        //     path: '/contactus',
        //     name: 'ContactUs',
        //     component: ContactUs
        // },
        {
            path: '/services',
            name: 'Services',
            component: Services
        }
    ]
})

export default router