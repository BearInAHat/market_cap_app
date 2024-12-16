import React, { memo } from "react";

import {
  NameCellStyled,
  LogoStyled,
  NameStyled,
  NamePrimaryStyled,
  NameSecondaryStyled,
} from "./styles";

interface TableBodyNameCellComponentProps {
  logoUrl: string;
  name: string;
  ticker: string;
}

export const TableBodyNameCellComponent: React.FC<TableBodyNameCellComponentProps> =
  memo(({ logoUrl, name, ticker }) => (
    <NameCellStyled>
      <LogoStyled src={logoUrl} />
      <NameStyled>
        <NamePrimaryStyled>{name}</NamePrimaryStyled>
        <NameSecondaryStyled>{ticker}</NameSecondaryStyled>
      </NameStyled>
    </NameCellStyled>
  ));
