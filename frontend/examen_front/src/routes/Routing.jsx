import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Login from '../loginPage/Pages/Login';
import Register from '../loginPage/Pages/Register';
import Home from '../homePage/Pages/Home';
import TestPage from '../testPage/pages/TestPage';
import PracticePage from '../pracPage/pages/PracticePage';
const Routing = () =>{
    return(
        <>
        <Router>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/crear-cuenta' element={<Register/>}/>
                <Route path='/inicio' element={<Home/>}/>
                <Route path='/practica' element={<PracticePage/>}/>
                <Route path='/examen' element={<TestPage/>}/>
            </Routes>
        </Router>

        </>
    )
}
export default Routing;