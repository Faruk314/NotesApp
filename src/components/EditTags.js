import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  AiFillDelete,
  AiFillEdit,
  AiOutlineCheck,
  AiOutlineClose,
} from "react-icons/ai";
import { notesActions } from "../features/notesSlice";

const EditTags = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);
  const [tagName, setTagName] = useState("");
  const [edit, setEdit] = useState(false);
  const [message, setMessage] = useState(false);

  const editTagHandler = (tag) => {
    if (tagName.length > 0) {
      dispatch(notesActions.editTag(tag));
      setEdit(false);
    } else {
      return;
    }
  };

  return (
    <div className="fixed top-[4rem] bg-white right-4 p-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md w-[20rem] z-20 h-[20rem] overflow-y-scroll">
      <div className="flex justify-between">
        <h2 className="text-2xl">Edit Tags</h2>
        <button
          onClick={() => dispatch(notesActions.toggleTagsModal())}
          className="px-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
        >
          <AiOutlineClose />
        </button>
      </div>
      {notes.map((note) => note.tags).flat().length < 1 && (
        <p className="text-blue-600 mt-2">You dont have any tags</p>
      )}
      <div className="">
        {notes
          .map((note) => note.tags)
          .flat()
          .map((tag) => (
            <div className="flex items-center space-x-2 mt-5" key={tag.id}>
              <span>{notes.find((note) => note.id === tag.noteId).title}</span>
              <textarea
                style={edit ? { borderColor: "blue" } : {}}
                disabled={!edit ? true : false}
                onChange={(e) => setTagName(e.target.value)}
                defaultValue={tag.label}
                className="border border-gray-400"
                rows={1}
              ></textarea>

              {!edit && (
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setEdit(true)}
                    className="bg-green-600 text-white p-1 rounded-md hover:bg-green-500"
                  >
                    <AiFillEdit />
                  </button>
                  <button
                    onClick={() =>
                      dispatch(
                        notesActions.deleteTag({
                          id: tag.id,
                          noteId: tag.noteId,
                        })
                      )
                    }
                    className="bg-red-700 text-white p-1 rounded-md hover:bg-red-500"
                  >
                    <AiFillDelete />
                  </button>
                </div>
              )}

              {edit && (
                <div className="flex items-center space-x-1">
                  <button
                    onClick={() =>
                      editTagHandler({
                        id: tag.id,
                        noteId: tag.noteId,
                        value: tagName,
                      })
                    }
                    className="bg-green-600 text-white p-1 rounded-md hover:bg-green-500"
                  >
                    <AiOutlineCheck />
                  </button>

                  <button
                    onClick={() => setEdit(false)}
                    className="bg-red-700 text-white p-1 rounded-md hover:bg-red-500"
                  >
                    <AiOutlineClose />
                  </button>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default EditTags;
