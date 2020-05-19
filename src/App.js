import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Header from "./components/headerComponent/header";
import Footer from "./components/footerComponent/footer";
import Homepage from "./components/pages/homepage";
import Products from "./components/pages/products";
import Aboutus from "./components/pages/about";

import "./Assets/css/default.min.css"

class App extends Component {
    state = {  }
    render() { 
        return (
          <Router>
            <div className="App">

              <Header />
              <Route exact path='/' component={Homepage} />
              <Route exact path='/Products' component={Products} />
              <Route exact path='/Aboutus' component={Aboutus} />
              
              <Footer />

            </div>
          </Router>
         );
    }
}
 
export default App ;