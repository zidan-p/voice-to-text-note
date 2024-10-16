import { mainDb } from "./indexeddb/db";
import { NoteIndexedDB } from "./indexeddb/note.indexeddb";







export const appNoteService = new NoteIndexedDB(mainDb); 