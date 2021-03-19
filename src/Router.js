import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home'
import Product from './Components/Product'
import ProductItems from './Components/ProductItems'
import About from './Components/About'
import NavBar from './Components/NavBar'



function RouteConfig() {
  return (
    <div className="App">
     <Router>
       <NavBar/>
         <Switch>
             <Route exact path="/" component={Home}></Route>
             <Route exact path="/product" component={Product}></Route>
             <Route path="/about" component={About}></Route>
             <Route path="/product/:id" component={ProductItems}></Route>
             <Route path="*" component={()=><h1>404 Not Found</h1>}></Route>

         </Switch>
     </Router>
    </div>
  );
}

export default RouteConfig;
