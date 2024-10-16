import { BodyContainer } from "./component/container/body-container"
import { WhiteCard } from "./component/container/white-card"
import { AddNoteInline } from "./features/note/add/add-note-inline"
import TropicalBeach from "./assets/tropical-beach.jpg";
import { NoteContainerListener } from "./widget/note-container/note-container-list"
import { AddNoteByAudioInput } from "./features/note/add-by-audio"


function App() {

  return (
    <BodyContainer>
      <WhiteCard>
        <img src={TropicalBeach} alt="" className="h-20 w-full object-cover object-bottom" />
        <section className="mb-3">
          <AddNoteByAudioInput />
        </section>
        <section>
          <div className="mb-3">
            <AddNoteInline />
          </div>
          {/* <NoteContainer /> */}
          <NoteContainerListener />
        </section>
      </WhiteCard>
    </BodyContainer>
  )
}

export default App
