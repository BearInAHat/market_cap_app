import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';

import { CoinMarketCapModule } from './routes/coin-market-cap/coin-market-cap.module';
import { ConfigService } from './config/config.service';

@Module({
  imports: [ScheduleModule.forRoot(), CoinMarketCapModule],
  providers: [ConfigService],
})
export class AppModule {}
