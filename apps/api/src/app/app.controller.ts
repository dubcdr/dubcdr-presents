import { Controller, Get, Post, Body } from '@nestjs/common';

import { Message } from '@dubcdr-presents/api-interfaces';

import { ConfigService } from '@nestjs/config';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly configService: ConfigService,
    private readonly appService: AppService
  ) { }

  @Get('hello')
  getData(): Message {
    return this.configService.get('SPOTIFY_CLIENT_ID');
  }

  @Post('callback')
  handleCallback(@Body() body: object) {
    console.log(`HANDLE CALLBACK`, body);
  }
}
