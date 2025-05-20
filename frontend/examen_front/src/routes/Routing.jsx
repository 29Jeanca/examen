import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Login from '../loginPage/Pages/Login';
const Routing = () =>{
    return(
        <>
        <Router>
            <Routes>
                <Route path='/' element={<Login/>}/>
            </Routes>
        </Router>

        </>
    )
}
export default Routing;