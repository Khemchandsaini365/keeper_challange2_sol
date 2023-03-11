import React from "react";
import notes from "../note";

function Note() {
  return notes.map((item) => {
    return (
      <div className="note">
        <h1>{item.title}</h1>
        <p>{item.content}</p>
      </div>
    );
  });
}
export default Note;
