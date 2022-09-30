import { Home, Sell } from '../pages';
import { RouteType } from './routes.types';

export const routes: RouteType[] = [
  { element: <Home />, path: '/' },
  { element: <Sell />, path: '/vender/:section' },
  { element: <Sell />, path: '/vender' },
];
