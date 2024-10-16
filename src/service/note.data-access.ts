import { Note } from "../entity/note";



export interface UpdateNotePayload {
  content: string
}

export interface CreateNotePayload {
  content: string
}


export interface NoteDataAccess {

  getAllNote(): Promise<Note[]>;

  deleteNote(id: string): Promise<Note>;

  updateNote(id: string, payload: UpdateNotePayload): Promise<Note>;

  createNote(payload: CreateNotePayload): Promise<Note>;
}