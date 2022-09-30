import { FC, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SellContainer } from './Sell.styles';

export const Sell: FC = () => {
  const { section, ...rest } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!section) navigate(`/${rest['*']}/hola`);
  }, [section]);

  console.log(section);

  return (
    <SellContainer>
      <h1>Vender</h1>
    </SellContainer>
  );
};
