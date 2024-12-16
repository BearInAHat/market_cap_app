import styled from "styled-components";

export const TableHeaderStyled = styled.div`
  display: flex;
  padding: 12px 16px;
  border-top: 1px solid #30363d;
  border-bottom: 1px solid #30363d;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
`;

export const HeaderFirstCellStyled = styled.div`
  flex: 2;
  cursor: pointer;

  &:hover {
    color: #58a6ff;
  }
`;

export const HeaderCellStyled = styled.div`
  flex: 1;
  text-align: right;
  cursor: pointer;

  &:hover {
    color: #58a6ff;
  }
`;
