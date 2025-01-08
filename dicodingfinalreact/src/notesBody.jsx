import React from 'react';
import DeleteButton from './deleteButton';
import ArchiveButton from './archiveButton';
function NotesBody({title,body,createdAt,id,onDelete,onArchive,archive}) {
    return (
        <div className="note-item">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__body">{body}</p>
        <p className="note-item__date">{createdAt}</p>
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchiveButton archive={archive} onArchive={() => onArchive(id)} />
        </div>
    );
}

export default NotesBody;