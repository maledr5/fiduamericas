import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import ScrollToTop from './ScrollToTop';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Fideicomisos from './pages/Fideicomisos';
import ProductCard from './components/ProductCard';
import Fondos from './pages/Fondos';
import Faq from './pages/Faq';
import Contacto from './pages/Contacto';
import Resoluciones from './pages/Resoluciones';
import MarcoLegal from './pages/MarcoLegal';


const customHistory = createBrowserHistory()

const App = () =>

    <Router history={customHistory}>
        <ScrollToTop>
        <div className="app">
            <Header />

            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home} />
            <Route exact path="/nosotros" component={Nosotros} />
            <Route exact path="/fideicomisos" component={Fideicomisos} />
            <Route exact path="/fondos" component={Fondos} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/contacto" component={Contacto} />
            <Route exact path="/resoluciones" component={Resoluciones} />
            <Route exact path="/marcolegal" component={MarcoLegal} />

            <Route exact path="/fideicomisos/:name" component={ProductCard}/>

            <Footer />
        </div>
        </ScrollToTop>
    </Router>

export default App;
