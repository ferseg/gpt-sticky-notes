import { NotFoundException } from '@nestjs/common';
import { StickyNotesService } from './sticky-notes.service';

describe('StickyNotesService', () => {
  let service: StickyNotesService;

  beforeEach(() => {
    service = new StickyNotesService();
  });

  describe('create', () => {
    it('should create a new sticky note', () => {
      const content = 'hello world';
      const note = service.create(content);
      expect(note.id).toBeDefined();
      expect(note.content).toBe(content);
    });
  });

  describe('update', () => {
    it('should update an existing sticky note', () => {
      const content = 'hello world';
      const note = service.create(content);
      const newContent = 'new content';
      const updatedNote = service.update(note.id, newContent);
      expect(updatedNote.content).toBe(newContent);
    });

    it('should throw a NotFoundException for a non-existent note', () => {
      expect(() => {
        service.update(999, 'new content');
      }).toThrow(NotFoundException);
    });
  });

  describe('delete', () => {
    it('should delete an existing sticky note', () => {
      const content = 'hello world';
      const note = service.create(content);
      service.delete(note.id);
      expect(service.getAll()).toEqual([]);
    });

    it('should throw a NotFoundException for a non-existent note', () => {
      expect(() => {
        service.delete(999);
      }).toThrow(NotFoundException);
    });
  });

  describe('getAll', () => {
    it('should return all sticky notes', () => {
      const note1 = service.create('note 1');
      const note2 = service.create('note 2');
      const notes = service.getAll();
      expect(notes).toEqual([note1, note2]);
    });
  });
});
