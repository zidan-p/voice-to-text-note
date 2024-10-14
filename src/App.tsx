import { NoteContainer } from "./widget/note-container/note-container"



function App() {

  return (
    <>
      <div className="container mx-auto min-h-screen bg-slate-100 py-4">
        <div className="max-w-lg mx-auto p-1 bg-white rounded">

          <section>
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
