import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import KanbanBoard from './pages/KanbanBoard';

function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/kanban' component={KanbanBoard} />
      </Switch>
    </Router>
  );
};

export default App
