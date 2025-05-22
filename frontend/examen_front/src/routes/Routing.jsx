import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Login from '../loginPage/Pages/Login';
import Register from '../loginPage/Pages/Register';
import Home from '../homePage/Pages/Home';
const Routing = () =>{
    return(
        <>
        <Router>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/crear-cuenta' element={<Register/>}/>
                <Route path='/inicio' element={<Home/>}/>
            </Routes>
        </Router>

        </>
    )
}
export default Routing;