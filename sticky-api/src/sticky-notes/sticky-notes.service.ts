import { Injectable, NotFoundException } from '@nestjs/common';


@Injectable()
export class StickyNotesService {
  private stickyNotes: { id: number; content: string }[] = [];
  private idCounter = 0;

  create(content: string) {
    const newNote = { id: ++this.idCounter, content };
    this.stickyNotes.push(newNote);
    return newNote;
  }

  update(id: number, content: string) {
    const sticky = this.stickyNotes.filter(note => note.id === id)[0];
    if (!sticky) {
      throw new NotFoundException(`Sticky note with ID ${id} not found`);
    }
    sticky.content = content;
    return sticky;
  }
  
  delete(id: number): void {
    const index = this.stickyNotes.findIndex(note => note.id === id);
    if (index === -1) {
      throw new NotFoundException(`Sticky note with ID ${id} not found`);
    }
    this.stickyNotes.splice(index, 1);
  }  

  getAll() {
    return this.stickyNotes;
  }
}
