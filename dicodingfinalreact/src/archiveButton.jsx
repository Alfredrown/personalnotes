import React from 'react';

function ArchiveButton({ id,archived, onArchive }) {
    return (
        <button
            className="archive-button"
            onClick={() => onArchive(id)}
        >
            {archived ? "Unarchive" : "Archive"}
        </button>
    );
}

export default ArchiveButton;

// function DeleteButton({id,onDelete}) {
//     return <button className='notes-item-delete' onClick={() => onDelete(id)}>Delete</button>
// }

// export default DeleteButton;