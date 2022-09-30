import styled from 'styled-components';

export const HomeContainer = styled.section`
  display: grid;
  min-height: 90vh;
  place-items: center;
`;

export const HomeWrapper = styled.div`
  max-width: 768px;
  padding: 2rem;
  background-color: var(--filter);
  backdrop-filter: blur(3px);
  border-radius: 0 1rem 3rem 1rem;
  color: #444;
`;
