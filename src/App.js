import React from 'react';
import NavBar from './components/NavBar'
import Products from './pages/products/Products'
import Header from './pages/products/Header'
import Footer from './pages/products/Footer'

const App = () => {
  return (
    <div>      
      <NavBar></NavBar>
      <Header></Header>
      <Products></Products>
      <Footer></Footer>
    </div>)
}
export default App;
