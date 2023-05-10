import { Routes, Route } from "react-router-dom";
import EditNote from "./components/EditNote";
import Main from "./components/Main";
import NewNote from "./components/NewNote";
import NoteLayout from "./components/NoteLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/new" element={<NewNote />} />
      <Route path="/edit/:id" element={<EditNote />} />
      <Route path="/:id" element={<NoteLayout />}></Route>
    </Routes>
  );
}

export default App;
