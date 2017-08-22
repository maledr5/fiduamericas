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

const App = () =>
    <HashRouter>
      <div className="app">

        <Header />

        <Route path="/nosotros" component={Nosotros} />
        <Route path="/fideicomisos" component={Fideicomisos} />
        <Route path="/fondos" component={Fondos} />
        <Route path="/faq" component={Faq} />
        <Route path="/contacto" component={Contacto} />
        <Route path="/" component={Home} />

        <Footer />

      </div>
    </HashRouter>;


export default App;
