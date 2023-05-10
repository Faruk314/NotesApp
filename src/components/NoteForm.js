import React, { useRef, useState } from "react";
import CreatableReactSelect from "react-select/creatable";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { notesActions } from "../features/notesSlice";
import uuid from "react-uuid";

const NoteForm = ({ title = "", text = "", tags = [], id }) => {
  const dispatch = useDispatch();
  const [titleValue, setTitleValue] = useState(title);
  const [textValue, setTextValue] = useState(text);
  const [selectedTags, setSelectedTags] = useState(tags);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let note;

    if (id) {
      note = {
        id: id,
        title: titleValue,
        text: textValue,
        tags: selectedTags,
      };

      dispatch(notesActions.editNote(note));
    } else {
      note = {
        id: uuid(),
        title: titleValue,
        text: textValue,
        tags: selectedTags,
      };
      dispatch(notesActions.createNote(note));
    }

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="p-2">
      <div className="flex space-x-2">
        <div className="flex flex-col w-1/2 lg:w-1/3">
          <label htmlFor="title">Title</label>
          <input
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value)}
            className="border border-gray-400  px-2 py-[0.35rem] rounded-md focus:outline-blue-500"
            id="title"
            placeholder=""
          ></input>
        </div>

        <div className="flex flex-col w-1/2 lg:w-1/3">
          <label htmlFor="tags">Tags</label>
          <CreatableReactSelect
            value={selectedTags.map((tag) => {
              return { label: tag.label, value: tag.id };
            })}
            onChange={(tags) => setSelectedTags(tags)}
            isMulti
            id="tags"
            placeholder="Select..."
          ></CreatableReactSelect>
        </div>
      </div>

      <textarea
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        className="border w-full mt-5 md:w-3/4"
        rows={15}
      ></textarea>

      <div className="mt-5 flex space-x-2">
        <button
          className="bg-blue-700 text-white py-2 px-3 rounded-md hover:bg-blue-500"
          type="submit"
        >
          Save
        </button>

        <Link to="..">
          <button
            className="bg-white border-2 border-blue-500 text-blue-700 py-2 px-3 rounded-md hover:bg-blue-500"
            type="button"
          >
            Cancel
          </button>
        </Link>
      </div>
    </form>
  );
};

export default NoteForm;
