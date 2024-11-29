import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { data } from "./components/data";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
import CategoryPage from "./components/CategoryPage";

function App() {
    const [results, setResults] = useState([]);
    const [query, setQuery] = useState("");
    const [notFoundMessage, setNotFoundMessage] = useState("");

    return (
        <div className="">
            <BrowserRouter>
                <Navbar data={data} query={query} setQuery={setQuery} results={results} setResults={setResults} setNotFoundMessage={setNotFoundMessage} />
                <Switch>
                    <Route exact path="/" component={() => <Home data={data} results={results} query={query} notFoundMessage={notFoundMessage} />} />
                    <Route exact path="/product/:id" component={() => <ProductPage data={data} />} />
                    <Route exact path="/cart" component={() => <Cart products={data} />} />
                    <Route exact path="/catalogue/category/:category/:subcategory?" component={() => <CategoryPage data={data} />} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
