import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';


class Header extends React.Component {

    constructor(props){
      super(props);
      this.state = { isChecked: false }
      this.handleChecked = this.handleChecked.bind(this);
      this.unCheck = this.unCheck.bind(this);
    }

    handleChecked(){
      this.setState( { isChecked: !this.state.isChecked } );
    }

    unCheck(){
      this.setState( { isChecked: false } );
    }

    render(){
      return (
        <header id="header">
          <nav className="container">
            <div className="main-header row">
              <NavLink className="col l3 brand" to="/home"></NavLink>
              <nav className="col l8 offset-l2">
                <input type="checkbox" id="nav" checked={ this.state.isChecked } onChange={ this.handleChecked }/><label htmlFor="nav"></label>
                <div className="nav-background"></div>
                <ul className="navbar">
                  <li>
                    <Link className="navbar-link" to="/nosotros#header" onClick={ this.unCheck } >
                    Quienes somos</Link>
                  </li>
                  <li>
                    <Link className="navbar-link" to="/fideicomisos#header"onClick={ this.unCheck } >
                    Negocios Fiduciarios</Link>
                  </li>
                  <li>
                    <Link className="navbar-link" to="/fondos#header" onClick={ this.unCheck } >
                    Fondos</Link>
                  </li>
                  <li>
                    <Link className="navbar-link" to="/faq#header" onClick={ this.unCheck } >
                    FAQ</Link>
                  </li>
                  <li>
                    <Link className="navbar-link" to="/contacto#header" onClick={ this.unCheck } >
                    Contacto</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </nav>
        </header>
      );
    }

}

export default Header;
