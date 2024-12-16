import React from "react";

import { ReactComponent as CoinMarketCapLogoIcon } from "./assets/coinMarketCapLogoIcon.svg";
import { HeaderWrapperStyled } from "./styles";

export const HeaderComponent: React.FC = () => (
  <HeaderWrapperStyled>
    <CoinMarketCapLogoIcon />
  </HeaderWrapperStyled>
);
