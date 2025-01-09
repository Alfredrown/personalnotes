import React from 'react';
import DeleteButton from './deleteButton';
import ArchiveButton from './archiveButton';
function NotesBody({ id, title, body, createdAt, onDelete, onArchive }) {
    return (
        <div className="note-item">
            <h3>{title}</h3>
            <p>{body}</p>
            <small>{createdAt}</small>
            <DeleteButton onDelete={() => onDelete(id)} />
            <ArchiveButton onArchive={() => onArchive(id)} />
        </div>
    );
}
export default NotesBody;