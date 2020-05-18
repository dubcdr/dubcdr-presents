import { Module, HttpModule } from '@nestjs/common';
import { SpotifyProxyService } from './spotify-proxy.service';
import { SpotifyProxyController } from './spotify-proxy.controller';

@Module({
  imports: [HttpModule],
  providers: [SpotifyProxyService],
  controllers: [SpotifyProxyController],
  exports: [SpotifyProxyService]
})
export class SpotifyProxyModule { }
