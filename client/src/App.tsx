import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';

function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/login' component={Login} />
        {/* Add other routes here */}
      </Switch>
    </Router>
  );
};
export default App
