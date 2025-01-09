import React from 'react';
import NotesList from './notesList.jsx';
import { getInitialData } from './data.js';
import UserInput from './userInput.jsx';
class NotesMain extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     notes: getInitialData(),
   }
 
   this.onDeleteHandler = this.onDeleteHandler.bind(this);
   this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
   this.onArchiveHandler = this.onArchiveHandler.bind(this);

 }
 
 onDeleteHandler = (id) => {
    console.log('deleting notes with id, ', id);
   const notes = this.state.notes.filter(note => note.id !== id);
   this.setState({notes});
 }
 
 onAddNotesHandler({ title, body, id, createdAt, archived }) {
  this.setState(prevState => ({
    notes: [
      ...prevState.notes,
      { id: `${Date.now()}`, title, body, createdAt:new Date().toLocaleString(), archived:false },
    ],
  }));
}
onArchiveHandler = (id) => {
  this.setState(prevState => ({
      notes: prevState.notes.map(note =>
          note.id === id ? { ...note, archived: true } : note
      ),
  }));
};
 
render() {
  const activeNotes = this.state.notes.filter(note => !note.archived);
  const archivedNotes = this.state.notes.filter(note => note.archived);

  return (
      <div className="notes-app">
          <h1>Notes App</h1>
          <UserInput addNotes={this.onAddNotesHandler} />
          <h2>Your Notes</h2>
          <NotesList 
              notes={activeNotes} 
              onDelete={this.onDeleteHandler} 
              onArchive={this.onArchiveHandler} 
          />
          <h2>Archived Notes</h2>
          <NotesList 
              notes={archivedNotes} 
              onDelete={this.onDeleteHandler} 
              onArchive={this.onArchiveHandler} 
          />
      </div>
  );
}
}
 
export default NotesMain;