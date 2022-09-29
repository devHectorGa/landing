import styled from 'styled-components';

export const LayoutContainer = styled.main`
  min-height: 100vh;
  position: relative;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/apartment.jpeg');
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
`;

export const LayoutWrapper = styled.div`
  position: relative;
`;
