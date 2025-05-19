import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NotesMain from './notesMain'
import Login from './loginMain'

function App(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return isLoggedIn ? (
        <NotesMain />
    ) : (
        <Login onLoginSuccess={() => setIsLoggedIn(true)} />
    );
}
const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );