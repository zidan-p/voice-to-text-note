import { CollapseList } from "./component/collapse-list"
import { RemoveNoteButton } from "./features/note/remove"
import { UpdateNoteButton } from "./features/note/update"


function EditableNoteList(){

  return (
    <>
      <RemoveNoteButton />
      <UpdateNoteButton />
    </>
  )
}

function App() {

  return (
    <>
      <div className="container mx-auto min-h-screen bg-slate-100 py-4">
        <div className="max-w-lg mx-auto p-1 bg-white rounded">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, iste impedit expedita, magnam cupiditate assumenda magni sequi praesentium sunt aspernatur veniam aliquam distinctio, non neque temporibus tempora dolores esse. Voluptates.

          <section>
            <ul>
              <li>
                <CollapseList className="mb-2" buttonList={<EditableNoteList />} />
              </li>
            </ul>
          </section>
        </div>
      </div>
    
    </>
  )
}

export default App
