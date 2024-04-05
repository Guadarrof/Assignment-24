import React from "react";
import InputGroup from "../components/molecules/InputGroup";
import Button from "../components/molecules/Button";
import { useState, useEffect} from "react";
import { saveNote, editAction, deleteAction } from "../helpers";
import Notes from "../components/molecules/Notes";

const Home = () => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [notes, setNotes] = useState([]);
  const [showNotes, setShowNotes] = useState(false)
  const handleSaveNote = () => {
    saveNote(
      noteTitle,
      noteContent,
      setNotes,
      notes
    );
    setNoteTitle("");
    setNoteContent("");
    setShowNotes(true);
    
  };
  const handleEditNote = (noteId) => {
    editAction(noteId, notes, setNoteTitle, setNoteContent);
  };

  const handleDeleteNote = (noteId) => {
    deleteAction(noteId,notes,setNotes);
  };
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  return (
    <>
      <div className="inputs-container">
        <InputGroup
          labelText="Titulo"
          labelClass="label"
          inputClass="input"
          inputId="note-title"
          action={(e) => setNoteTitle(e.target.value)}
        />
        <InputGroup
          labelText="Content"
          labelClass="label"
          inputClass="input"
          inputId="note-content"
          action={(e) => setNoteContent(e.target.value)}
        />
        <Button className="btn-save" btnText="save" action={handleSaveNote} />
      </div>
      {showNotes && (
        <div className="notes-container">
          <Notes
            notes={notes}
            deleteAction={handleDeleteNote}
            editAction={handleEditNote}
          />
        </div>
      )}
    </>
  );
};

export default Home;
