import React from 'react';
import { NavLink } from 'react-router-dom';


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
                    <NavLink className="navbar-link" to="/nosotros" onClick={ this.unCheck } >
                    Quienes somos</NavLink>
                  </li>
                  <li>
                    <NavLink className="navbar-link" to="/fideicomisos"onClick={ this.unCheck } >
                    Negocios Fiduciarios</NavLink>
                  </li>
                  <li>
                    <NavLink className="navbar-link" to="/fondos" onClick={ this.unCheck } >
                    Fondos</NavLink>
                  </li>
                  <li>
                    <NavLink className="navbar-link" to="/faq" onClick={ this.unCheck } >
                    FAQ</NavLink>
                  </li>
                  <li>
                    <NavLink className="navbar-link" to="/contacto" onClick={ this.unCheck } >
                    Contacto</NavLink>
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
