
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import Footer from './components/Footer';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/services' component={Services} />
          <Route path='/blog' component={Blog} />
          <Route path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
