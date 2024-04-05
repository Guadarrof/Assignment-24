import React from "react";
import Text from "../atoms/Text";
import Button from "./Button";

const Notes = ({ deleteAction, editAction, notes }) => {
  if (notes.length === 0) {
    return (
      <div className="empty-message">
        <p>No hay nota disponible.</p>
      </div>
    );
  } else {
    return (
      <div>
        {notes.map((newNote) => (
          <div className="note" key={newNote.id}>
            <Button
              className="btn-delete"
              btnText="x"
              action={deleteAction(newNote.id)}
            />
            <Text
              renderAs="h3"
              className="note-title"
              content={newNote.title}
            />
            <Text
              renderAs="p"
              className="note-content"
              content={newNote.content}
            />
            <Button
              className="btn-edit"
              btnText="Edit"
              action={() => editAction(newNote.id)}
            />
          </div>
        ))}
      </div>  
    );
  }
};

export default Notes;
