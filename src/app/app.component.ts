import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NoteListComponent } from './note-list/note-list.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { AddNoteDialogComponent } from './add-note-dialog/add-note-dialog.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NoteListComponent, FooterComponent, HeaderComponent, AddNoteDialogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DAKeep';
  addDialogOpen = false;
}
