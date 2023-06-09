import './App.css'
import NavBar from '../components/nav-bar/nav-bar'
import SearchingBar from '../components/searching-bar/searching-bar'
import Slider from '../components/slider/slider'
import ProductList from '../components/product-list/product-list'
import ProductList_2 from '../components/product-list-2/product-list-2'
import Footer from '../components/footer/footer'

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <SearchingBar/>
      <Slider/>
      <ProductList/>
      <ProductList_2/>
      <Footer/>
    </div>
  )
}

export default App
