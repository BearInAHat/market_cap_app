import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';

import {
  COIN_MARKET_CAP_CURRENCY_INFO_SANDBOX_URL,
  COIN_MARKET_CAP_CURRENCY_INFO_URL,
  COIN_MARKET_CAP_LISTINGS_SANDBOX_URL,
  COIN_MARKET_CAP_LISTINGS_URL,
  COIN_MARKET_CAP_SANDBOX_API_KEY,
} from './constants';

dotenv.config();

@Injectable()
export class ConfigService {
  private readonly isSandbox: boolean;

  constructor() {
    this.isSandbox =
      process.env['COIN_MARKET_CAP_API_KEY'] ===
      COIN_MARKET_CAP_SANDBOX_API_KEY;
  }
  get coinMarketCapApiKey(): string {
    return (
      process.env['COIN_MARKET_CAP_API_KEY'] || COIN_MARKET_CAP_SANDBOX_API_KEY
    );
  }

  get coinMarketCapListingsUrl(): string {
    return this.isSandbox
      ? COIN_MARKET_CAP_LISTINGS_SANDBOX_URL
      : COIN_MARKET_CAP_LISTINGS_URL;
  }
  get coinMarketCapCurrencyInfoUrl(): string {
    return this.isSandbox
      ? COIN_MARKET_CAP_CURRENCY_INFO_SANDBOX_URL
      : COIN_MARKET_CAP_CURRENCY_INFO_URL;
  }
}
