import React, { Fragment } from "react";
import NoteForm from "./NoteForm";

const NewNote = () => {
  return (
    <Fragment>
      <h1 className="my-5 text-3xl px-2">New Note</h1>
      <NoteForm />
    </Fragment>
  );
};

export default NewNote;
