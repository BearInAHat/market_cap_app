declare interface CurrencyInfo {
  id: number;
  name: string;
  ticker: string;
  price: number;
  marketCap: number;
  volume24hUsd: number;
  volume24hToken: number;
  logo: string;
}

declare type OrderType = "asc" | "desc";
