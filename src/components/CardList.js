import React, { useEffect, useState } from "react";
import Note from "./Note";
import { useDispatch, useSelector } from "react-redux";
import { notesActions } from "../features/notesSlice";

const CardList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const notes = useSelector((state) => state.notes.notes);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setFiltered(
      notes.filter(
        (note) => searchTerm === "" || note.title.includes(searchTerm)
      )
    );
  }, [searchTerm, notes]);

  return (
    <main>
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border px-2 py-1 border-gray-400 rounded-md focus:outline-blue-500 m-4"
        id="title"
        placeholder="Search notes"
      ></input>

      <div className="py-5 space-x-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filtered.length === 0 && (
          <p className="p-4 text-xl text-blue-500">No notes found!</p>
        )}
        {filtered.map((note) => (
          <Note
            key={note.id}
            title={note.title}
            tags={note.tags}
            text={note.text}
            id={note.id}
          />
        ))}
      </div>
    </main>
  );
};

export default CardList;
