import { Controller, Post, Body, Get, Patch, Param, Delete } from '@nestjs/common';
import { StickyNotesService } from './sticky-notes.service';


@Controller('sticky-notes')
export class StickyNotesController {
  constructor(private readonly stickyNotesService: StickyNotesService) {}

  @Post()
  createStickyNote(@Body('content') content: string) {
    return this.stickyNotesService.create(content);
  }

  @Patch(':id')
    updateStickyNote(@Param('id') id: number, @Body('content') content: string) {
    return this.stickyNotesService.update(+id, content);
  }

  @Delete(':id')
  deleteStickyNote(@Param('id') id: string) {
    this.stickyNotesService.delete(+id);
    return { message: 'Sticky note deleted' };
  }


  @Get()
  getAllStickyNotes() {
    return this.stickyNotesService.getAll();
  }
}
