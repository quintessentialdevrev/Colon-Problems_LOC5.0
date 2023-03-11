// import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import * as React from 'react'
import {ChakraProvider} from '@chakra-ui/react'
import Login from './components/Authentication/Login'
import Signup from './components/Authentication/Signup'
import Loading from './components/Loading/Loading';

function App() {
  return (
    <>
    <ChakraProvider>

    <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/loading" element={<Loading/>}/>
        </Routes>
      </Router>
            
    </ChakraProvider>
    </>
  )
}

export default App
