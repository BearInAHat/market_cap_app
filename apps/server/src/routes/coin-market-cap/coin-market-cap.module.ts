import { Module } from '@nestjs/common';

import { CoinMarketCapService } from './coin-market-cap.service';
import { CoinMarketCapController } from './coin-market-cap.controller';
import { CoinMarketCapGateway } from './coin-market-cap.gateway';
import { ConfigService } from '../../config/config.service';

@Module({
  controllers: [CoinMarketCapController],
  providers: [CoinMarketCapService, CoinMarketCapGateway, ConfigService],
})
export class CoinMarketCapModule {}
