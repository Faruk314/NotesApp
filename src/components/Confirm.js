import React from "react";

const Confirm = ({ message, setOpen, deleteHandler }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgb(0,0,0,0.5)] flex items-center justify-center">
      <div className=" bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md flex flex-col items-center space-y-4 px-5 py-7 mx-2">
        <p className="text-center">{message}</p>

        <div className="flex space-x-2">
          <button
            onClick={deleteHandler}
            className="bg-blue-700 text-white py-1 px-4 rounded-md hover:bg-blue-500"
          >
            Yes
          </button>
          <button
            onClick={() => setOpen(false)}
            className="bg-blue-700 text-white py-1 px-4 rounded-md hover:bg-blue-500"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
