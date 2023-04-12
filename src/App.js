import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import styled from 'styled-components'
import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  PrivateRouter
} from './pages'
import Product from './components/Product'
import ProductsPage from './pages/ProductsPage'


function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/cart'>
          <Cart />
        </Route>
        <Route exact path='/products'>
          <ProductsPage />
        </Route>
        <Route exact path='/products/:id' children={<SingleProduct />} />
        <Route exact path='/checkout'>
          <Checkout />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
    )
}

export default App
