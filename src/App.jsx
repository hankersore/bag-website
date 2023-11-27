import './App.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Showcase from './components/showcase/Showcase';

function App() {

  return (
    <>
    <Navbar/>
    <Showcase/>
    </>
  )
}

export default App
