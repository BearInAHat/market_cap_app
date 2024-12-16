import React, { memo } from "react";

import {
  TableHeaderStyled,
  HeaderCellStyled,
  HeaderFirstCellStyled,
} from "./styles";

interface TableHeaderComponentProps {
  headerData: { [key: string]: string };
  handleSort: (field: string) => void;
}

export const TableHeaderComponent: React.FC<TableHeaderComponentProps> = memo(
  ({ headerData, handleSort }) => {
    return (
      <TableHeaderStyled>
        {Object.entries(headerData).map(([key, value], index) =>
          index === 0 ? (
            <HeaderFirstCellStyled key={key} onClick={() => handleSort(key)}>
              {value}
            </HeaderFirstCellStyled>
          ) : (
            <HeaderCellStyled key={key} onClick={() => handleSort(key)}>
              {value}
            </HeaderCellStyled>
          )
        )}
      </TableHeaderStyled>
    );
  }
);
