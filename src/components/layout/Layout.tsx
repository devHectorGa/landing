import { FC, PropsWithChildren } from 'react';
import { Header } from '../Header';
import { LayoutContainer, LayoutWrapper } from './Layout.styles';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <LayoutWrapper>{children}</LayoutWrapper>
    </LayoutContainer>
  );
};
