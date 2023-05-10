import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, tags, id, text }) => {
  return (
    <Link to={`/${id}`} className="px-4 mt-2">
      <div className="cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-[20rem] p-2 rounded-md hover:scale-105 hover:duration-75">
        <h2 className="text-2xl text-center">{title}</h2>
        <div className="flex flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag.id}
              className="bg-blue-600 text-white rounded-md px-2 font-bold mt-2 ml-2"
            >
              {tag.label}
            </span>
          ))}
        </div>

        <p className="px-2 mt-4 break-all">
          {text.length > 300 ? `${text.slice(0, 300)}...` : text}
        </p>
      </div>
    </Link>
  );
};

export default Card;
