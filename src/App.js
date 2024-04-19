import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './Components/Sidebar/Sidebar';
import Profile from './Components/Profile/Profile';
import Tasks from './Components/Tasks/Tasks';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyTask from './Components/MyTask/MyTask';

function App() {
  return (
    <div className="App d-flex all">
      <Sidebar/>
      <Router>
        <Routes>
          <Route path='/' element={<Profile/>}></Route>
          <Route path='/tasks' element={<Tasks/>}></Route>
          <Route path='/myTask/:parametro' element={<MyTask />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
