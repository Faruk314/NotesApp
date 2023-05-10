import React from "react";
import { Link } from "react-router-dom";
import EditTags from "./EditTags";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { notesActions } from "../features/notesSlice";

const Header = () => {
  const dispatch = useDispatch();
  const isEditTagsOpen = useSelector((state) => state.notes.tagsModalOpen);

  return (
    <header className="w-full shadow-md flex items-center justify-between px-4 py-2">
      <h1 className="text-3xl">Notes</h1>

      <div className="flex space-x-2">
        <Link to="/new">
          <button className="bg-blue-700 text-white py-2 px-3 rounded-md hover:bg-blue-500">
            Create
          </button>
        </Link>
        <button
          onClick={() => dispatch(notesActions.toggleTagsModal())}
          className="bg-blue-700 text-white py-2 px-3 rounded-md hover:bg-blue-500"
        >
          Edit Tags
        </button>

        {isEditTagsOpen && <EditTags />}
      </div>
    </header>
  );
};

export default Header;
