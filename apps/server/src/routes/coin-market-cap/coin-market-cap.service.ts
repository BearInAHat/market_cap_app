import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

import { ConfigService } from '../../config/config.service';
import {
  BaseError,
  CoinMarketCapCurrencyListing,
  CurrencyInfo,
} from '../interfaces';

@Injectable()
export class CoinMarketCapService {
  constructor(private readonly configService: ConfigService) {}

  async fetchCurrenciesByMarketCap(): Promise<CurrencyInfo[]> {
    try {
      const resCurrencyListings = await axios.get(
        this.configService.coinMarketCapListingsUrl,
        {
          headers: {
            'X-CMC_PRO_API_KEY': this.configService.coinMarketCapApiKey,
          },
          params: { limit: 50, sort: 'market_cap', convert: 'USD' },
        },
      );

      const coinIdsStr: string = resCurrencyListings.data.data
        .map(
          (currencyListing: CoinMarketCapCurrencyListing) => currencyListing.id,
        )
        .toString();

      const resCurrencyInfo = await axios.get(
        this.configService.coinMarketCapCurrencyInfoUrl,
        {
          headers: {
            'X-CMC_PRO_API_KEY': this.configService.coinMarketCapApiKey,
          },
          params: { id: coinIdsStr },
        },
      );

      return resCurrencyListings.data.data.map(
        (currency: CoinMarketCapCurrencyListing) => ({
          id: currency.id,
          name: currency.name,
          ticker: currency.symbol,
          price: currency.quote.USD.price,
          marketCap: currency.quote.USD.market_cap,
          volume24hUsd: currency.quote.USD.volume_24h,
          volume24hToken:
            currency.quote.USD.volume_24h / currency.quote.USD.price,
          logo: resCurrencyInfo.data.data[currency.id]?.logo || '',
        }),
      );
    } catch (error) {
      const baseError = error as BaseError;
      const statusCode =
        baseError.response?.status || HttpStatus.INTERNAL_SERVER_ERROR;
      const message =
        baseError.response?.data?.status?.error_message ||
        'Failed to fetch data';
      throw new HttpException({ statusCode, message }, statusCode);
    }
  }
}
