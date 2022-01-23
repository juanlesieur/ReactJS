import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/navegacion/Navbar.js';
import Inicio from './components/paginas/Inicio.js';


function App() {

  return (
    <div className="App">

    <Router>
      <Navbar/>
      <h1>Pagina de inicio</h1>
    </Router>

    </div>
  );
}

export default App;
