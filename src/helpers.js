let idNum = 0;

export const saveNote = (noteTitle, noteContent, setNotes, notes) => {
  const inputTitle = document.getElementById("note-title");
  const inputContent = document.getElementById("note-content");
  if (noteTitle.trim() !== "" || noteContent.trim() !== "") {
    const newNote = {
      title: noteTitle,
      content: noteContent,
      id: idNum,
    };
    setNotes([...notes, newNote]);
    idNum++;
    inputTitle.value = "";
    inputContent.value = "";
    localStorage.setItem("notes", JSON.stringify([...notes, newNote]));
  }
};

export const editAction = (noteId, notes) => {
  const inputTitle = document.getElementById("note-title");
  const inputContent = document.getElementById("note-content");
  const noteToEdit = notes.find((eachNote) => eachNote.id === noteId);
  if (noteToEdit) {
    inputTitle.value = noteToEdit.title;
    inputContent.value = noteToEdit.content;
  }
};

export const deleteAction = (noteId, notes, setNotes) => {
  const updatedNotes = notes.filter((note) => note.id !== noteId);
  setNotes(updatedNotes);
  localStorage.setItem("notes", JSON.stringify(updatedNotes));
};