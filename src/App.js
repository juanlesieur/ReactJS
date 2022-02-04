import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/navegacion/Navbar.js';
import Inicio from './components/paginas/Inicio.js';
import Footer from './components/navegacion/Footer';
import ItemListContainer from './components/ItemListContainer';


function App() {

  return (
    <div className="App">

    <Router>
      <Navbar/>
      <Inicio/>
    </Router>
    <ItemListContainer/>
    <Footer/>
    </div>
  );
}

export default App;
