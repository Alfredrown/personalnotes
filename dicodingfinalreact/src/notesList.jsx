import React from 'react';
import NotesBody from './notesBody.jsx';

function NotesList({ notes, onDelete, onArchive }) {
    return (
        <div className="notes-list">
            {notes.length > 0 ? (
                notes.map((note) => (
                    <NotesBody
                        key={note.id}
                        title={note.title}
                        body={note.body}
                        createdAt={note.createdAt}
                        id={note.id}
                        onDelete={onDelete}
                        onArchive={onArchive}
                        archived={note.archived}
                    />
                ))
            ) : (
                <p className="empty-notes">No notes available</p>
            )}
        </div>
    );
}

export default NotesList;
