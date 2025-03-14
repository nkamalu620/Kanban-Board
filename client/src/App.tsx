import Navbar from './components/Navbar';
import Login from './pages/Login';
import KanbanBoard from './pages/Board';
import { Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/kanban' element={<KanbanBoard />} />
      </Routes>
    </Router>
  );
};

export default App
