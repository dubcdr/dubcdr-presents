import { Injectable, HttpService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
// @ts-ignore
import * as SpotifyWebApi from 'spotify-web-api-node';


@Injectable()
export class SpotifyProxyService {
  private client: SpotifyWebApi;
  private scopes = ['user-library-read', 'user-read-recently-played', 'user-follow-read', 'playlist-read-private', 'user-top-read']

  private get hostId() {
    return this.config.get('SPOTIFY_HOST_USER');
  }

  constructor(private readonly config: ConfigService) {
    const clientConfig = {
      clientId: this.config.get('SPOTIFY_CLIENT_ID'),
      clientSecret: this.config.get('SPOTIFY_CLIENT_SECRET'),
      redirectUri: this.config.get('API_CALLBACK_URL')
    };
    console.log({ clientConfig })

    this.client = new SpotifyWebApi(clientConfig);
  }

  getHostPlaylists() {
    return this.client.getUserPlaylists(this.hostId);
  }

  getArtistPlaylists(artistUri: string) {
    return this.client.getArtist(artistUri);
  }

  getAuthUrl() {
    return this.client.createAuthorizeURL(this.scopes, 'some-state');
  }


}
