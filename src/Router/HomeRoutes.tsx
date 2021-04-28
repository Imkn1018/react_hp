import { Home } from '../components/Pages/Home';
import { Profile } from '../components/Pages/Profile';
import { Images } from '../components/Pages/Images';

export const HomeRoutes = [
  {
    path: '/',
    exact: true,
    children: <Home />,
  },
  {
    path: '/profile',
    exact: false,
    children: <Profile />,
  },
  {
    path: '/Images',
    exact: false,
    children: <Images />,
  }
];
