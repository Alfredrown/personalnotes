import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NotesMain from './notesMain'
const root = createRoot(document.getElementById('root'));
root.render(<NotesMain/>);