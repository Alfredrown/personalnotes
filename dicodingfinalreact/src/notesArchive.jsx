import React from 'react';
import NotesBody from './notesBody.jsx';

function NotesArchive({notes}) {
    if (archive === true) {
        return (
            <div className="notes-archive"> 
                {notes.map((note) => (
                    <NotesBody key={note.id} title={note.title} body={note.body} createdAt={note.date} id={note.id} onDelete={onDelete}/>
                ))}
            </div>
        );
    }
}
export default NotesArchive;