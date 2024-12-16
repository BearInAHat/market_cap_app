import { Controller, Get } from '@nestjs/common';

import { CoinMarketCapService } from './coin-market-cap.service';
import { CurrencyInfo } from '../interfaces';

@Controller('coin-market-cap')
export class CoinMarketCapController {
  constructor(private readonly coinMarketCapService: CoinMarketCapService) {}

  @Get()
  async getCurrencies(): Promise<CurrencyInfo[]> {
    return await this.coinMarketCapService.fetchCurrenciesByMarketCap();
  }
}
