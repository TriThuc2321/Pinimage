import { Outlet, createBrowserRouter } from 'react-router-dom';
import { Home, Login, Error } from '~/pages';
import { StoreProvider } from '~/store/storeProvider';
import { Dashboard, Favorite, MyPost, NewPost } from '~/components';

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
                element: <Login />,
            },
            {
                path: '/',
                element: <Home />,
                children: [
                    {
                        path: '/',
                        element: <Dashboard />,
                    },
                    {
                        path: '/favorite',
                        element: <Favorite />,
                    },
                    {
                        path: '/my-post',
                        element: <MyPost />,
                    },
                    {
                        path: '/new-post',
                        element: <NewPost />,
                    },
                ],
            },
        ],
    },
]);
