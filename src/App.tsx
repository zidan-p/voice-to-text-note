import { BodyContainer } from "./component/container/body-container"
import { WhiteCard } from "./component/container/white-card"
import { AddNoteInline } from "./features/note/add/add-note-inline"
import { NoteContainer } from "./widget/note-container/note-container"



function App() {

  return (
    <BodyContainer>
      <WhiteCard>
        <section>
          <AddNoteInline />
          <NoteContainer />
          <NoteContainer />
          <NoteContainer />
          <NoteContainer />
          <NoteContainer />
          <NoteContainer />
        </section>
      </WhiteCard>
    </BodyContainer>
  )
}

export default App
