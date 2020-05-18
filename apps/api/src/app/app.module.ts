import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpotifyProxyModule } from './spotify-proxy/spotify-proxy.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    SpotifyProxyModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
