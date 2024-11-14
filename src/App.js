import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

// import Common from "./components/Common";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import {data} from "./components/data";
import ProductPage from './components/ProductPage';

function App() {

  return (
    <div className=''>
    <BrowserRouter>
      <Navbar/>
        <Switch >
          {/* <Route path='/' element={<Common/>}/>
            <Route index element={<Home/>}/> */}
          <Route exact path="/" component={() => <Home data={data}/>}/>
          <Route exact path="/product/:id" component={() => <ProductPage data={data}/>}/>
        </Switch>
        <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;