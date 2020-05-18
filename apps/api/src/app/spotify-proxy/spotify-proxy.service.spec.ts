import { Test, TestingModule } from '@nestjs/testing';
import { SpotifyProxyService } from './spotify-proxy.service';

describe('SpotifyProxyService', () => {
  let service: SpotifyProxyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpotifyProxyService],
    }).compile();

    service = module.get<SpotifyProxyService>(SpotifyProxyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
