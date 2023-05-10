import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { notesActions } from "../features/notesSlice";
import Confirm from "./Confirm";

const NoteLayout = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const note = useSelector((state) =>
    state.notes.notes.find((note) => note.id === id)
  );
  const navigate = useNavigate();

  const deleteNoteHandler = () => {
    dispatch(notesActions.deleteNote(id));
    navigate("/");
  };

  return (
    <section className="">
      <div className="w-full shadow-md flex flex-col space-y-2 md:flex-row items-center justify-between px-4 py-2">
        <h1 className="text-3xl">
          <span className="">Title: </span>
          <span>{note.title}</span>
        </h1>

        <div className="flex space-x-2">
          <Link to={`/edit/${id}`}>
            <button className="bg-green-600 text-white py-2 px-3 rounded-md hover:bg-green-500">
              Edit
            </button>
          </Link>
          <button
            onClick={() => setOpen(true)}
            className="bg-red-600 text-white py-2 px-3 rounded-md hover:bg-red-500"
          >
            Delete
          </button>

          <Link to="..">
            <button className="bg-blue-700 text-white py-2 px-3 rounded-md hover:bg-blue-500">
              Back
            </button>
          </Link>
        </div>
      </div>

      <div className="flex items-center space-x-2 p-4">
        <span className="text-2xl">Tags:</span>
        {note.tags.map((tag) => (
          <span
            className="bg-blue-600 text-white rounded-md px-2 py-1 font-bold"
            key={tag.id}
          >
            {tag.label}
          </span>
        ))}
      </div>

      <div className="p-4">
        <span className="text-2xl">Text: </span>

        <p>{note.text}</p>
      </div>

      {open && (
        <Confirm
          message={"Are you sure you want to delete this note?"}
          setOpen={setOpen}
          deleteHandler={deleteNoteHandler}
        />
      )}
    </section>
  );
};

export default NoteLayout;
