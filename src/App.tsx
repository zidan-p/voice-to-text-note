import { AddNoteButton } from "./features/note/add"
import { AddNoteInline } from "./features/note/add/add-note-inline"
import { NoteContainer } from "./widget/note-container/note-container"



function App() {

  return (
    <>
      <div className="container mx-auto min-h-screen bg-slate-100 py-4">
        <div className="max-w-lg mx-auto p-1 bg-white rounded">

          <section>
            <AddNoteInline />
            {/* <div className="mb-2 flex flex-row-reverse">
              <AddNoteButton />
            </div> */}
            <NoteContainer />
            <NoteContainer />
            <NoteContainer />
            <NoteContainer />
            <NoteContainer />
            <NoteContainer />
          </section>
        </div>
      </div>
    
    </>
  )
}

export default App
