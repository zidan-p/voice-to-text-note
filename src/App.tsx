import { BodyContainer } from "./component/container/body-container"
import { WhiteCard } from "./component/container/white-card"
import { AddNoteInline } from "./features/note/add/add-note-inline"
import { AudioRecorder } from "./widget/audio-recorder/audio-recorder"
import { NoteContainer } from "./widget/note-container/note-container"
import TropicalBeach from "./assets/tropical-beach.jpg";
import { AudioToText } from "./features/audio-to-text"


function App() {

  return (
    <BodyContainer>
      <WhiteCard>
        <img src={TropicalBeach} alt="" className="h-20 w-full object-cover object-bottom" />
        <section className="mb-3">
          <AudioRecorder />
          <AudioToText />
        </section>
        <section>
          <div className="mb-3">
            <AddNoteInline />
          </div>
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
