import { Test, TestingModule } from '@nestjs/testing';
import { StickyNotesController } from './sticky-notes.controller';

describe('StickyNotesController', () => {
  let controller: StickyNotesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StickyNotesController],
    }).compile();

    controller = module.get<StickyNotesController>(StickyNotesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
