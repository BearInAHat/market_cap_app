import React from "react";
import { LoaderWrapper, LoaderText } from "./styles";

export const LoaderComponent: React.FC = () => (
  <LoaderWrapper>
    <LoaderText>Сonnecting to websocket, please wait...</LoaderText>
  </LoaderWrapper>
);
