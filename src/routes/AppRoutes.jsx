import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Show from '../pages/Show';

function AppRoutes(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/:id" element={<Show />} />

            
        </Routes>
        </>
    )
}

export default AppRoutes