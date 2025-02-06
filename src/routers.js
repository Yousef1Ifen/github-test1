import HomeComponent from "./components/HomeComponent.vue";
import SignUp from "./components/SignUp.vue";
import { createRouter, createWebHistory } from "vue-router";
import LoginComponent from "./components/LoginComponent.vue";
import Add from "./components/Add.vue";
import Update from "./components/Update.vue";
const routes = [
    {
        name: 'HomeComponent',
        component: HomeComponent,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'LoginComponent',
        component: LoginComponent,
        path: '/login',
    },
    {
        name: 'Add',
        component: Add,
        path: '/add',
    },
    {
        name: 'Update',
        component: Update,
        path: '/update',
    },

];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;