import AppLayout from '@/AppLayout';
import Repositories from '@/components/Repositories';
import UserProfile from '@/pages/UserProfile';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Repositories />
      },
      {
        path: '/:username',
        element: <UserProfile />
      }
    ]
  }
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
