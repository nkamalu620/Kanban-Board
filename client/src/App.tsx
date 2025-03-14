import Navbar from './components/Navbar';
import Login from './pages/Login';
import KanbanBoard from './pages/Board';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


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
