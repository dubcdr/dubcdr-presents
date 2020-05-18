import { Test, TestingModule } from '@nestjs/testing';
import { SpotifyProxyController } from './spotify-proxy.controller';

describe('SpotifyProxy Controller', () => {
  let controller: SpotifyProxyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpotifyProxyController],
    }).compile();

    controller = module.get<SpotifyProxyController>(SpotifyProxyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
