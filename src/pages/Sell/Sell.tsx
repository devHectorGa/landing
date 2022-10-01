import { FC, cloneElement, ReactElement } from 'react';
import { useSellNavigation } from '../../hooks/useSellNavigation';
import { SellContainer } from './Sell.styles';

export const Sell: FC = () => {
  const { activeSection, index, length, handleNextPage, handlePrevPage } = useSellNavigation();

  return (
    <SellContainer>
      <h2>Vender</h2>
      <p>
        Paso {index + 1} de {length}
      </p>
      <p>{activeSection.description}</p>
      {cloneElement(activeSection.element as ReactElement, activeSection)}
      <button onClick={handlePrevPage}>Prev</button>
      <button onClick={handleNextPage}>Next</button>
    </SellContainer>
  );
};
