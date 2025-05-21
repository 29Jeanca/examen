import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Login from '../loginPage/Pages/Login';
import Register from '../loginPage/Pages/Register';
const Routing = () =>{
    return(
        <>
        <Router>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/crear-cuenta' element={<Register/>}/>
            </Routes>
        </Router>

        </>
    )
}
export default Routing;