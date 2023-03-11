// import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import * as React from 'react'
import {ChakraProvider} from '@chakra-ui/react'
import Login from './components/Authentication/Login'
import Signup from './components/Authentication/Signup'
import Loading from './components/Loading/Loading';
import Home from './components/Home/Home';
import Store from './store';
import StockImages from './components/stock_imgs/stock_images';
import Predict from './components/predict';
import Events from './components/Events/Events';
import Model from '../model';


function App() {
  return (
    <>
    <ChakraProvider>
    <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/loading" element={<Loading/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/store" element={<Store name={'Your Company Name'} description={'Item that you sold'} amount={350}/>}/>
          <Route path="/stockimages" element={<StockImages/>}/>
          <Route path="/predict" element={<Predict/>}/>
          <Route path="/Events" element={<Events/>}/>
          <Route path="/playground" element={<Model />}/>
        </Routes>
      </Router>
    </ChakraProvider>
    </>
  )
}

export default App
