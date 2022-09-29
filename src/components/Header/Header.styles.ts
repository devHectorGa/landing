import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as LogoSVG } from '../../assets/logo.svg';

export const HeaderContainer = styled.div`
  display: flex;
  height: 2vmin;
  justify-content: space-around;
  padding: 2vmin 0;
  background-color: var(--filter);
  backdrop-filter: blur(3px);
`;

export const HeaderSections = styled.nav`
  display: flex;
  gap: 1rem;
`;

export const HeaderLink = styled(Link)`
  position: relative;
  cursor: pointer;
  height: 100%;
  list-style: none;
  text-decoration: none;
  color: var(--text);
  transition: color 0.3s;

  &:hover {
    color: var(--primary);
  }
  &.isActive::after {
    content: '';
    position: absolute;
    bottom: -1.8vmin;
    left: 0px;
    width: 100%;
    height: 5px;
    background: rgb(124, 1, 255);
    border-radius: 10px;
  }
  &.disabled {
    cursor: no-drop;
    pointer-events: none;
    color: var(--text-disable);
  }
`;

export const Logo = styled(LogoSVG)`
  height: 150%;
`;
