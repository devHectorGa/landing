import { RoutesProps as LibRoutesProps } from 'react-router-dom';
import { RouteType } from '../../routes/routes.types';

export type RoutesProps = {
  routes: RouteType[];
} & LibRoutesProps;
