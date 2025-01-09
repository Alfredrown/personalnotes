import React from 'react';
import NotesBody from './notesBody.jsx';

function NotesArchive({ notes, onDelete }) {
    // Filter archived notes
    const archivedNotes = notes.filter(note => note.archive === true);

    return (
        <div className="notes-archive">
            {archivedNotes.length > 0 ? (
                archivedNotes.map(note => (
                    <NotesBody
                        key={note.id}
                        title={note.title}
                        body={note.body}
                        createdAt={note.createdAt}
                        id={note.id}
                        onDelete={onDelete}
                        archived={note.archive}
                    />
                ))
            ) : (
                <p>No archived notes</p>
            )}
        </div>
    );
}

export default NotesArchive;
