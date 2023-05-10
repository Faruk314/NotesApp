import React, { Fragment } from "react";
import NoteForm from "./NoteForm";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const EditNote = () => {
  const { id } = useParams();
  const note = useSelector((state) =>
    state.notes.notes.find((note) => note.id === id)
  );

  console.log(note.id);

  return (
    <Fragment>
      <h1 className="my-5 text-3xl px-2">Edit Note</h1>
      <NoteForm
        title={note.title}
        text={note.text}
        tags={note.tags}
        id={note.id}
      />
    </Fragment>
  );
};

export default EditNote;
