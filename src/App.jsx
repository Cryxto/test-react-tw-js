import { useState } from "react";
import "./App.css";

function App() {
  const [note, setNote] = useState("");
  const [count, setConut] = useState(1);
  const [noteList, setNoteList] = useState([{ id: 0, note: "test" }]);

  function handleAdd() {
    if (note !== "") {
      setNoteList([
        ...noteList,
        {
          id: count,
          note: note,
        },
      ]);
      setConut(count + 1);
      setNote("");
    }
  }
  function handleChange(e) {
    setNote(e.target.value);
    // e.target.value = note;
  }

  const listItem = noteList.map((note) => {
    if (note.id !== 0) {
      return (
        <li key={note.id}>
          {note.id}. {note.note}
        </li>
      );
    }
  });
  return (
    <>
      <input id="noteInput" type="text" onChange={(e) => handleChange(e)} value={note} />
      <button onClick={handleAdd}>Add</button>
      <h1>Hello not in app</h1>
      <h2>Hello not in app</h2>
      <h3>Hello not in app</h3>
      <h1>List Note</h1>
      <ol>{listItem}</ol>
    </>
  );
}

export default App;
