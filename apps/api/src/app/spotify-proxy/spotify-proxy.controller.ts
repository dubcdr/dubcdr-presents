import { Controller, Get } from '@nestjs/common';
import { SpotifyProxyService } from './spotify-proxy.service';

@Controller('spotify-proxy')
export class SpotifyProxyController {
  constructor(private spotifyProxyService: SpotifyProxyService) { }

  @Get('playlists')
  playlists() {
    return this.spotifyProxyService.getHostPlaylists();
  }

  @Get('artist')
  artist() {
    return this.spotifyProxyService.getArtistPlaylists('spotify:artist:5KNNVgR6LBIABRIomyCwKJ');
  }

  @Get('authUrl')
  getAuthUrl() {
    return this.spotifyProxyService.getAuthUrl();
  }
}
