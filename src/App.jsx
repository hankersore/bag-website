import './App.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Showcase from './components/showcase/Showcase';
import Category from './components/category/Category';
import About from './components/about/About';

function App() {

  return (
    <>
    <Navbar/>
    <Showcase/>
    <Category/>
    <About/>
    </>
  )
}

export default App
