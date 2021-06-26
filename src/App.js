import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./reset.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';
// import Cash from './Components/WorkDetail/Cash';



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

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />

        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/education" component={Education} />
          <Route path="/design" component={Design} />
          <Route path="/dev" component={Dev} />
          <Route path="/client" component={Client} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/marbleoak" component={MarbleOak} />
          <Route path="/workit" component={Workit} />
          <Route path="/stemseed" component={StemSeed} />
          <Route path="/abrand" component={ABrand} />
          <Route path="/welax" component={Welax} />
          <Route path="/vulgr" component={Vulgr} />
          <Route path="/gcakes" component={GCakes} />
          <Route path="/estrips" component={Estrips} />
          <Route path="/limelemons" component={LimeLemons} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;

