import { Note } from "../../entity/note";
import { CreateNotePayload, NoteDataAccess, UpdateNotePayload } from "../note.data-access";
import { v4 } from "uuid";
import { DBDocument } from "./db";


export class NoteIndexedDB implements NoteDataAccess {

  constructor(
    private readonly db: DBDocument,
  ){}


  getAllNote(): Promise<Note[]> {
    return this.db.NoteDb.toCollection().sortBy('date');
  }


  async deleteNote(id: string): Promise<Note> {
    const result = await this.db.NoteDb.get({"id" : id});
    if(!result) throw new Error("note with id : " + id + " not found");

    await this.db.NoteDb.delete(id);
    return result;

  }


  async updateNote(id: string, payload: UpdateNotePayload): Promise<Note> {
    const result = await this.db.NoteDb.get({"id" : id});
    if(!result) throw new Error("note with id : " + id + " not found");

    await this.db.NoteDb.update(id, payload);
    return result;
  }


  async createNote(payload: CreateNotePayload): Promise<Note> {
    const data: Note = {
      id: v4(),
      content: payload.content,
      date: new Date()
    };

    await this.db.NoteDb.add(data);

    return data;
  }

  listenDbUpdate(listener: (data: Note[]) => any): void {
    this.db.on("changes", async ( changes) => {
      // see https://dexie.org/docs/Observable/Dexie.Observable

      // for noe let just retrieve all data
      const notes = await this.db.NoteDb.toArray();

      listener(notes);
    })
  }

  
}