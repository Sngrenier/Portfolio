import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./reset.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Components/Home/Home'
import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';
import About from './Components/About/About';
import Education from './Components/Education/Education';
import Client from './Components/Skills/Client';
import Design from './Components/Skills/Design';
import Dev from './Components/Skills/Dev';
import Gallery from './Components/WorkGallery/Gallery';
import MarbleOak from './Components/WorkDetail/MarbleOak';
import Workit from './Components/WorkDetail/Workit';
import StemSeed from './Components/WorkDetail/StemSeed';
import ABrand from './Components/WorkDetail/ABrand';
import Welax from './Components/WorkDetail/Welax';
import Vulgr from './Components/WorkDetail/Vulgr';
import GCakes from './Components/WorkDetail/GCakes';
import Estrips from './Components/WorkDetail/Estrips';
import LimeLemons from './Components/WorkDetail/LimeLemons';
import Test from './Components/Testimonials/Test';
// import Navbar from './Components/Navbar/Navbar';
// import NewAbout from './Components/About/NewAbout'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/" component={Home} />  
          {/* <Route exact path="/landing" component={Landing} /> */}
          {/* <Route exact path="/newabout" component={NewAbout} /> */}
          <Route exact path="/about" component={About} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/design" component={Design} />
          <Route exact path="/dev" component={Dev} />
          <Route exact path="/client" component={Client} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/marbleoak" component={MarbleOak} />
          <Route exact path="/workit" component={Workit} />
          <Route exact path="/stemseed" component={StemSeed} />
          <Route exact path="/abrand" component={ABrand} />
          <Route exact path="/welax" component={Welax} />
          <Route exact path="/vulgr" component={Vulgr} />
          <Route exact path="/gcakes" component={GCakes} />
          <Route exact path="/estrips" component={Estrips} />
          <Route exact path="/limelemons" component={LimeLemons} />
          <Route exact path="/test" component={Test} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;

