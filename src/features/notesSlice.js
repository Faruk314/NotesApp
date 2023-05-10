import { createSlice } from "@reduxjs/toolkit";

import uuid from "react-uuid";

const initialState = {
  notes: JSON.parse(localStorage.getItem("notes")) || [],
  tagsModalOpen: false,
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    createNote(state, action) {
      let note = action.payload;

      note.tags.map((tag) => {
        tag.id = uuid();
        tag.noteId = note.id;
        return tag;
      });

      state.notes.push(note);

      localStorage.setItem("notes", JSON.stringify(state.notes));
    },

    editNote(state, action) {
      let note = action.payload;

      note.tags.map((tag) => {
        if (!tag.id && !tag.noteId) {
          tag.id = uuid();
          tag.noteId = note.id;
        }

        return tag;
      });

      let noteIndex = state.notes.findIndex((x) => x.id === note.id);
      state.notes[noteIndex].text = note.text;
      state.notes[noteIndex].title = note.title;
      state.notes[noteIndex].tags = note.tags;
    },

    toggleTagsModal(state) {
      state.tagsModalOpen = !state.tagsModalOpen;
    },

    editTag(state, action) {
      let tagId = action.payload.id;
      let noteId = action.payload.noteId;
      let newValue = action.payload.value;
      let noteIndex = state.notes.findIndex((note) => note.id === noteId);

      state.notes[noteIndex].tags.find((tag) => tag.id === tagId).label =
        newValue;

      localStorage.setItem("notes", JSON.stringify(state.notes));
    },

    deleteTag(state, action) {
      let tagId = action.payload.id;
      let noteId = action.payload.noteId;
      let noteIndex = state.notes.findIndex((note) => note.id === noteId);

      let filteredNotes = state.notes[noteIndex].tags.filter(
        (tag) => tag.id !== tagId
      );
      state.notes[noteIndex].tags = filteredNotes;

      localStorage.setItem("notes", JSON.stringify(state.notes));
    },

    deleteNote(state, action) {
      let noteId = action.payload;
      let noteIndex = state.notes.findIndex((note) => note.id === noteId);
      state.notes.splice(noteIndex, 1);
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
  },
});

export const notesActions = notesSlice.actions;
export default notesSlice.reducer;
