import { lazy, Suspense } from 'react';

import { Outlet, createBrowserRouter } from 'react-router-dom';
import { StoreProvider } from '~/store/storeProvider';
import { DotSpinner } from '~/components';

const Home = lazy(() => import('~/pages/home'));
const Login = lazy(() => import('~/pages/login'));
const Error = lazy(() => import('~/pages/error'));
const Dashboard = lazy(() => import('~/components/dashboard'));
const Favorite = lazy(() => import('~/components/favorite'));
const MyPost = lazy(() => import('~/components/myPost'));

const AuthLayout = () => (
    <StoreProvider>
        <Outlet />
    </StoreProvider>
);

export default createBrowserRouter([
    {
        element: <AuthLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/login',
                element: (
                    <Suspense fallback={<DotSpinner />}>
                        <Login />
                    </Suspense>
                ),
            },
            {
                path: '/',
                element: (
                    <Suspense fallback={<DotSpinner />}>
                        <Home />
                    </Suspense>
                ),
                children: [
                    {
                        path: '/',
                        element: (
                            <Suspense fallback={<DotSpinner />}>
                                <Dashboard />
                            </Suspense>
                        ),
                    },
                    {
                        path: '/favorite',
                        element: (
                            <Suspense fallback={<DotSpinner />}>
                                <Favorite />
                            </Suspense>
                        ),
                    },
                    {
                        path: '/my-post',
                        element: (
                            <Suspense fallback={<DotSpinner />}>
                                <MyPost />
                            </Suspense>
                        ),
                    },
                ],
            },
        ],
    },
]);
