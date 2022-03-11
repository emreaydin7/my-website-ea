import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import './App.css'

import Anasayfa from "./pages/Auth/Anasayfa"
import Hakkimizda from "./pages/Auth/Hakkimizda"
import Hizmetler from "./pages/Auth/Hizmetler"
import Iletisim from "./pages/Auth/Iletisim"
import Facebook from "./pages/Auth/Facebook";
import Instagram from "./pages/Auth/Instagram";

export default function App() {
  return (
    <Router>
      
      <div>
        
        <Navbar />
        <div id="content">
        <Switch>
          
          <Route path="/" exact component={Anasayfa} />
          <Route path="/Hakkimizda" component={Hakkimizda} />
          <Route path="/Hizmetler" component={Hizmetler} />
          <Route path="/Iletisim" component={Iletisim} />
          <Route path="/Facebook" component={Facebook} />
          <Route path="/Instagram" component={Instagram} />
          
          
        </Switch>
        </div>
      </div>
    </Router>
  );
}




