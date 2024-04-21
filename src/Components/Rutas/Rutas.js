import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from '../Profile/Profile';
import Error from '../Error/Error';
import Tasks from '../Tasks/Tasks';
import FormTarea from '../FormTarea/FormTarea';
import './Rutas.css';
function Rutas() {
    return (
        <div className="rutas-container d-flex justify-content-center">
            <div className="col-md-7 col-sm-11 col-11 rutas-container-central">
                <Router>
                    <Routes>
                        <Route path='/' element={<Tasks />}></Route>
                        <Route path='/profile' element={<Profile />}></Route>
                        <Route path='/FormTarea' element={<FormTarea />} />
                        <Route path='/FormTarea/:parametro' element={<FormTarea />} />
                        <Route path='*' element={<Error />} />
                    </Routes>
                </Router>
            </div>
        </div>
    );
}
export default Rutas;