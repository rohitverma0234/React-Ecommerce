import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import SingleProduct from './SingleProduct';
import Cart from './Cart';
import ErrorPage from './ErrorPage';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Products from './Products';

function App() {

  const theme = {
    colors:{
      bg:"#000",
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/singleproduct' element={<SingleProduct />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
