import './App.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Showcase from './components/showcase/Showcase';
import Category from './components/category/Category';
import About from './components/about/About';
import Product from './components/product/Product';
import News from './components/news/News';
import Sponsors from './components/sponsors/Sponsors';

function App() {

  return (
    <>
    <Navbar/>
    <Showcase/>
    <Category/>
    <About/>
    <Product/>
    <News/>
    <Sponsors/>
    </>
  )
}

export default App
