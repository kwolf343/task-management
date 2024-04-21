import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Rutas from './Components/Rutas/Rutas';

function App() {
  return (
    <div className="App all">
      <Sidebar/>
      <Rutas/>
    </div>
  );
}

export default App;
