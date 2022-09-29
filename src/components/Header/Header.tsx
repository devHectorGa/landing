import { HeaderContainer, HeaderLink, HeaderSections, Logo } from './Header.styles';
export const Header = () => {
  return (
    <HeaderContainer>
      <Logo />

      <HeaderSections>
        <HeaderLink to="/vender">Vender</HeaderLink>
        <HeaderLink to="/comprar" className="disabled">
          Comprar
        </HeaderLink>
      </HeaderSections>
    </HeaderContainer>
  );
};
