import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './Components/Sidebar/Sidebar';
import Profile from './Components/Profile/Profile';
import Error from './Components/Error/Error';
import Tasks from './Components/Tasks/Tasks';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyTask from './Components/MyTask/MyTask';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App d-flex all">
      <Sidebar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Profile' element={<Profile/>}></Route>
          <Route path='/tasks' element={<Tasks/>}></Route>
          <Route path='/myTask' element={<MyTask />} />
          <Route path='/myTask/:parametro' element={<MyTask />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
