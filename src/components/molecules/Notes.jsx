import React from "react";
import Text from "../atoms/Text";
import Button from "./Button";

const Notes = ({ deleteAction, editAction, notes }) => {
  if (notes.length === 0) {
    return (
      <div className="empty-message">
        <p>No hay nota/s disponible/s.</p>
      </div>
    );
  } else {
    return (
      <>
        {notes.map((newNote) => (
          <div className="note" key={newNote.id}>
            <Button
              className="btn-delete"
              btnText="x"
              action={()=>deleteAction(newNote.id)}
            />
            {newNote.title && (
              <Text
                renderAs="h3"
                className="note-title"
                content={newNote.title}
              />
            )}
            {newNote.content && (
              <Text
                renderAs="p"
                className="note-content"
                content={newNote.content}
              />
            )}
            <Button
              className="btn-edit"
              btnText="Edit"
              action={() => editAction(newNote.id)}
            />
          </div>
        ))}
      </>  
    );
  }
};

export default Notes;
