import Dexie, { EntityTable } from "dexie";
import 'dexie-observable';

export const DATABASE_NAME = "JustDB"
export const DATABASE_VERSION = 1;
export const DatabaseTable = {
  Note: "NoteDb"
} as const




export interface NotePersistence {
  id: string;
  content: string;
  date: Date;
}

type nganu = "nganu"

export type DBDocument = Dexie & {
  NoteDb : EntityTable<
    NotePersistence,
    'id' // primary key "id" (for the typings only)
  >;
};

export const mainDb  = new Dexie(DATABASE_NAME) as DBDocument;

mainDb.version(1).stores({
  [DatabaseTable.Note] : "id, date"
});


