
import './App.css';
import TopHeader from './components/TopHeader';
import Testimonials from './pages/Testimonials'
import Testimonials1 from './pages/Testimonials1'
import Home from './pages/Home'
import { Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/testimonials">
        <Testimonials />
      </Route>
      <Route path="/testimonials1">
        <Testimonials1 />
      </Route>
      </div>
  );
}

export default App;
