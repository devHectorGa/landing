import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SellRoutesEnum } from '../routes/routes.types';
import { sellRoutes } from '../routes/sellRoutes';

const PATH = 0;
const DATA = 1;

export const useSellNavigation = () => {
  const { section, ...rest } = useParams();
  const [activeSection, setActiveSection] = useState(sellRoutes[section || SellRoutesEnum.DATA_USER]);
  const orderPath = Object.entries(sellRoutes).sort((a, b) => a[DATA].order - b[DATA].order);
  const activeIndex = orderPath.findIndex((r) => r[PATH] === section);

  const navigate = useNavigate();

  useEffect(() => {
    if (!section || !sellRoutes[section]) {
      navigate(`/vender/${SellRoutesEnum.DATA_USER}`);
    } else {
      setActiveSection(sellRoutes[section]);
    }
  }, [section]);

  const handleNextPage = () => {
    if (activeIndex < orderPath.length) {
      navigate(`/vender/${orderPath[activeIndex + 1][PATH]}`);
    }
  };

  const handlePrevPage = () => {
    if (activeIndex) {
      navigate(`/vender/${orderPath[activeIndex - 1][PATH]}`);
    }
  };

  return { activeSection, index: activeIndex, length: orderPath.length, handleNextPage, handlePrevPage };
};
