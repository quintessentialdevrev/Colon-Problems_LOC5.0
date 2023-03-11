// import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import * as React from 'react'
import {ChakraProvider} from '@chakra-ui/react'
import Login from './components/Authentication/Login'
import Signup from './components/Authentication/Signup'
import Loading from './components/Loading/Loading';
import Home from './components/Home/Home';


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
        </Routes>
      </Router>
            
    </ChakraProvider>
    </>
  )
}

export default App
