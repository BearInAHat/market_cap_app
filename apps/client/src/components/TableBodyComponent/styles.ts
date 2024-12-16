import styled from "styled-components";

export const TableBodyWrapperStyled = styled.div`
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  color: #fff;
`;

export const TableRowStyled = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #30363d;
`;

export const NumericCellStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  padding: 10px 0;
  font-weight: bold;
  font-size: 14px;
`;

export const VolumeContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const VolumeTokenStyled = styled.span`
  margin-top: 5px;
  font-size: 12px;
  color: #a1a1a1;
`;
