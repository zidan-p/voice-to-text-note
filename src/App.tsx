import { CollapseList } from "./component/collapse-list"
import { RemoveNoteButton } from "./features/note/remove"
import { UpdateNoteButton } from "./features/note/update"
import { NoteContainer } from "./widget/note-container/note-container"



function App() {

  return (
    <>
      <div className="container mx-auto min-h-screen bg-slate-100 py-4">
        <div className="max-w-lg mx-auto p-1 bg-white rounded">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, iste impedit expedita, magnam cupiditate assumenda magni sequi praesentium sunt aspernatur veniam aliquam distinctio, non neque temporibus tempora dolores esse. Voluptates.

          <section>
            <NoteContainer />
          </section>
        </div>
      </div>
    
    </>
  )
}

export default App
