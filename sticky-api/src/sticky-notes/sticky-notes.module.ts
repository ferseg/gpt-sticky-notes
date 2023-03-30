import { Module } from '@nestjs/common';
import { StickyNotesController } from './sticky-notes.controller';

import { StickyNotesService } from './sticky-notes.service';

@Module({
  providers: [StickyNotesService],
  exports: [StickyNotesService],
  controllers: [StickyNotesController],
})
export class StickyNotesModule {}
