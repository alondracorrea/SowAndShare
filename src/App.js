import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home'
import Literature from './routes/Literature'
import Resources from './routes/Resources'
import Story from './routes/Story'
import Map from './routes/Map'
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

const App = () => {
    return (
       <>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/literature' element={<Literature/>} />
        <Route path='/resources' element={<Resources/>} />
        <Route path='/story' element={<Story/>} />
        <Route path='/map' element={<Map/>} />
       </Routes>
       </>
    );

}

export default App;