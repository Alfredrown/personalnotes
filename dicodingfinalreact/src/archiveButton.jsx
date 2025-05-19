import React from 'react';

function ArchiveButton({ id,archived, onArchive }) {
    return (
        <button
            className="archive-button"SS
            onClick={() => onArchive(id)}
        >
            {archived ? "Unarchive" : "Archive"}
        </button>
    );
}

export default ArchiveButton;
