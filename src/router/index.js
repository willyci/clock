import { createRouter, createWebHistory } from '@ionic/vue-router';
import MemoriesPage from '../pages/MemoriesPage.vue';

const routes = [{
        path: '/',
        redirect: '/memories'
    },
    {
        path: '/memories',
        name: 'memories list',
        component: MemoriesPage
    },
    {
        path: '/memories/:id',
        name: 'memories details',
        component: () =>
            import ('../pages/MemoryDetails.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router