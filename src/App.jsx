import './App.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Showcase from './components/showcase/Showcase';
import Category from './components/category/Category';

function App() {

  return (
    <>
    <Navbar/>
    <Showcase/>
    <Category/>
    </>
  )
}

export default App
