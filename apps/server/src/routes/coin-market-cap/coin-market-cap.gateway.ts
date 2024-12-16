import { Injectable, OnModuleInit } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';
import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

import { CoinMarketCapService } from './coin-market-cap.service';

@WebSocketGateway()
@Injectable()
export class CoinMarketCapGateway implements OnModuleInit {
  @WebSocketServer()
  server!: Server;

  constructor(
    private readonly coinMarketCapService: CoinMarketCapService,
    private readonly schedulerRegistry: SchedulerRegistry,
  ) {}

  onModuleInit() {
    this.scheduleCurrencyUpdates();
  }

  private async fetchAndBroadcastCurrencies(): Promise<void> {
    const currencies =
      await this.coinMarketCapService.fetchCurrenciesByMarketCap();
    this.server.emit('currenciesUpdate', currencies);
  }

  private scheduleCurrencyUpdates(): void {
    const interval = setInterval(async () => {
      await this.fetchAndBroadcastCurrencies();
    }, 5000);

    this.schedulerRegistry.addInterval('fetch-currencies-interval', interval);
  }
}
