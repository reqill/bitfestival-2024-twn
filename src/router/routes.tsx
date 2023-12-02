import { DefaultLayout } from '@/layout/DefaultLayout';
import { Home, NotFound, Work } from '@/pages';
import type { RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/work',
        element: <Work />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
];
