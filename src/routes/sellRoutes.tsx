import { Input } from '../components/Form';
import { SellRoutesEnum, SellRouteType, SellRoutesForm } from './routes.types';

export const sellRoutes: { [path: string]: Omit<SellRouteType, 'path'> } = {
  [SellRoutesEnum.COMMON_ZONES]: {
    order: 4,
    description: 'Zonas Comunes',
    name: SellRoutesForm[SellRoutesEnum.COMMON_ZONES],
    element: <p>Name</p>,
    label: 'Zonas Comunes',
  },
  [SellRoutesEnum.DATA_USER]: {
    order: 0,
    description: 'Ingresa tu nombre y apellido',
    name: SellRoutesForm[SellRoutesEnum.DATA_USER],
    label: 'Nombres y Apellidos',
    element: <Input />,
  },
  [SellRoutesEnum.DIRECTION]: {
    order: 2,
    description: 'Dirección',
    name: SellRoutesForm[SellRoutesEnum.DIRECTION],
    element: <p>Name</p>,
  },
};
