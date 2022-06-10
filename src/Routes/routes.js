import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Header } from '../components/Header'
import { Home } from '../Pages/Home'
import { NewCostumer } from '../Pages/NewCostumer'

const MyRoutes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='newcostumer' element={<NewCostumer/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes;