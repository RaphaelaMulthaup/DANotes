import { Injectable, inject } from '@angular/core';
import { Firestore, collection, doc, collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class NoteListService {

  firestore = inject(Firestore);
  items$;

  constructor() {
    this.items$ = collectionData(this.getNoteslRef());
   }

  getNoteslRef(){
    return collection(this.firestore, 'notes');
  }

  getTrashRef(){
    return collection(this.firestore, 'trash');
  }

  getSingleDocRef(colId: string, docId: string){
    return doc(collection(this.firestore, colId), docId);
  }
}


