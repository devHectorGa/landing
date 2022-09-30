import { FC, PropsWithChildren } from 'react';
import { RouteProps } from 'react-router-dom';

export type RouteType = {
  layout?: FC<PropsWithChildren>;
} & RouteProps;

export type SellRouteType = {
  order: number;
  description: string;
  name: string;
} & RouteType;

export enum SellRoutesEnum {
  DATA_USER = 'datos-cliente',
  EMAIL = 'email',
  DIRECTION = 'direccion',
  COMMON_ZONES = 'zonas-comunes',
  FLATS = 'pisos',
}

export const SellRoutesForm = {
  [SellRoutesEnum.DATA_USER]: 'dataUser',
  [SellRoutesEnum.EMAIL]: 'email',
  [SellRoutesEnum.DIRECTION]: 'direction',
  [SellRoutesEnum.COMMON_ZONES]: 'commonZones',
  [SellRoutesEnum.FLATS]: 'flats',
};
