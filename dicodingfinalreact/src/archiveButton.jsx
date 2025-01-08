import React from 'react';

function ArchiveButton({ archive, onArchive }) {
    return (
        <button
            className="archive-button"
            onClick={onArchive}
        >
            {archive ? "Unarchive" : "Archive"}
        </button>
    );
}

export default ArchiveButton;
