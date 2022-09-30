import { Button } from '../../components';
import { HomeContainer, HomeWrapper } from './Home.styles';

export const Home = () => (
  <HomeContainer>
    <HomeWrapper>
      <p>LLEGASTE AL LUGAR QUE ESTABAS BUSCANDO</p>
      <p>Compramos tu vivienda en 10 días*</p>
      <p>
        Solicita una oferta gratis ingresando la dirección, características del inmueble y tus datos de contacto. Uno de nuestros expertos
        te hará una oferta.
      </p>
      <Button>Vender</Button>
    </HomeWrapper>
  </HomeContainer>
);
