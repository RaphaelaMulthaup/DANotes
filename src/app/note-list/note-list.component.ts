import { Component } from '@angular/core';
import { Note } from '../interfaces/note.interface';
import { NoteListService } from '../firebase-services/note-list.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note/note.component';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [FormsModule, CommonModule, NoteComponent],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.scss',
})
export class NoteListComponent {
  noteList: Note[] = [];
  favFilter: 'all' | 'fav' = 'all';
  status: 'notes' | 'trash' = 'notes';

  constructor(private noteService: NoteListService) {}

  getList(type: 'normal' | 'trash'): Note[] {
    return type === 'normal' ? this.noteService.normalNotes : this.noteService.trashNotes;
  }
  
  
  changeFavFilter(filter: 'all' | 'fav') {
    this.favFilter = filter;
  }

  changeTrashStatus() {
    if (this.status == 'trash') {
      this.status = 'notes';
    } else {
      this.status = 'trash';
      this.favFilter = 'all';
    }
  }
}
