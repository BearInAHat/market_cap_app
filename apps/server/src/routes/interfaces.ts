export interface CoinMarketCapCurrencyListing {
  id: number;
  name: string;
  symbol: string;
  quote: {
    USD: {
      price: number;
      volume_24h: number;
      market_cap: number;
    };
    [key: string]: {
      volume_24h: number;
    };
  };
}

export interface CurrencyInfo {
  id: number;
  name: string;
  ticker: string;
  price: number;
  marketCap: number;
  volume24hUsd: number;
  volume24hToken: number;
  logo: string;
}

export interface BaseError {
  response: {
    status?: number;
    data?: {
      status?: {
        error_message?: string;
      };
    };
  };
}
