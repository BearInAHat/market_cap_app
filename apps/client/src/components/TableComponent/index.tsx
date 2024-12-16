import React, { useState, useEffect } from "react";

import { disconnectSocket, subscribeToCurrenciesUpdate } from "Utils/socket";
import { LoaderComponent } from "Components/LoaderComponent/LoaderComponent";
import { TableHeaderComponent } from "Components/TableHeaderComponent";
import { TableBodyComponent } from "Components/TableBodyComponent";
import { TableHeaderData } from "./constants";
import { sortCollection } from "Utils";

export const TableComponent: React.FC = () => {
  const [data, setData] = useState<CurrencyInfo[]>([]);
  const [sortedData, setSortedData] = useState<CurrencyInfo[]>([]);
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<OrderType>("asc");

  useEffect(() => {
    const handleDataUpdate = (updatedData: CurrencyInfo[]) => {
      setData(updatedData);
      setSortedData(
        sortField
          ? sortCollection(
              updatedData,
              sortField as keyof CurrencyInfo,
              sortOrder
            )
          : updatedData
      );
    };
    subscribeToCurrenciesUpdate(handleDataUpdate);
    return () => {
      disconnectSocket();
    };
  }, [sortField, sortOrder]);

  const handleSort = (field: string) => {
    const order = sortField === field && sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(order);
    setSortedData(sortCollection(data, field as keyof CurrencyInfo, order));
  };

  return !data.length ? (
    <LoaderComponent />
  ) : (
    <>
      <TableHeaderComponent
        headerData={TableHeaderData}
        handleSort={handleSort}
      />
      <TableBodyComponent sortedData={sortedData} />{" "}
    </>
  );
};
