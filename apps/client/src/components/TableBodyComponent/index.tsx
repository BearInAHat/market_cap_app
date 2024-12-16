import React, { memo } from "react";

import { TableBodyNameCellComponent } from "Components/TableBodyNameCellComponent";

import {
  TableRowStyled,
  NumericCellStyled,
  TableBodyWrapperStyled,
  VolumeContainerStyled,
  VolumeTokenStyled,
} from "./styles";
import { transformCellValue } from "Utils";

interface TableBodyComponentProps {
  sortedData: CurrencyInfo[];
}

export const TableBodyComponent: React.FC<TableBodyComponentProps> = memo(
  ({ sortedData }) => (
    <TableBodyWrapperStyled>
      {sortedData.map((item) => (
        <TableRowStyled key={item.id}>
          <TableBodyNameCellComponent
            logoUrl={item.logo}
            name={item.name}
            ticker={item.ticker}
          />
          <NumericCellStyled>
            ${transformCellValue(item.price, true)}
          </NumericCellStyled>
          <NumericCellStyled>
            ${transformCellValue(item.marketCap)}
          </NumericCellStyled>
          <NumericCellStyled>
            <VolumeContainerStyled>
              ${transformCellValue(item.volume24hUsd)}
              <VolumeTokenStyled>
                {transformCellValue(item.volume24hToken)} {item.ticker}
              </VolumeTokenStyled>
            </VolumeContainerStyled>
          </NumericCellStyled>
        </TableRowStyled>
      ))}
    </TableBodyWrapperStyled>
  )
);
