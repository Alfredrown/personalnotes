import React from 'react';
import NotesBody from './notesBody.jsx';
function NotesList({notes,onDelete,onArchive}) {
    return (
        <div className="notes-list">
            {notes.map((note) => (
                <NotesBody key={note.id} title={note.title} body={note.body} createdAt={note.date} id={note.id} onDelete={onDelete} onArchive={onArchive} archive={note.archive}/>
                
            ))}
        </div>
    );
}

export default NotesList;