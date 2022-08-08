import DefaultLayout from '~/layouts/DefaultLayout/DefaultLayout';
import { Home } from '~/pages';

const publicRoutes = [
    {
        id: 0,
        path: '/',
        component: Home,
        layout: DefaultLayout,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
