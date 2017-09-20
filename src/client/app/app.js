import React from 'react';
import {HashRouter, Route, Link} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Fideicomisos from './pages/Fideicomisos';
import Fondos from './pages/Fondos';
import Faq from './pages/Faq';
import Contacto from './pages/Contacto';
import Resoluciones from './pages/Resoluciones';

const App = () =>
    <HashRouter>
      <div className="app">

        <Header />

        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/nosotros" component={Nosotros} />
        <Route exact path="/fideicomisos" component={Fideicomisos} />
        <Route exact path="/fondos" component={Fondos} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/contacto" component={Contacto} />
        <Route exact path="/resoluciones" component={Resoluciones} />

        <Footer />

      </div>
    </HashRouter>;


export default App;
