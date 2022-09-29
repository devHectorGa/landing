import { FC, PropsWithChildren } from 'react';
import { RoutesProps as LibRoutesProps, RouteProps } from 'react-router-dom';

export type RouteType = {
  layout?: FC<PropsWithChildren>;
} & RouteProps;

export type RoutesProps = {
  routes: RouteType[];
} & LibRoutesProps;
