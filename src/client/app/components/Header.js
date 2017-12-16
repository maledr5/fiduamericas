import React from 'react';
import { NavLink as Link } from 'react-router-dom';

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
              <Link className="col l3 brand" to="/home" activeClassName=""></Link>
              <nav className="col l8 offset-l2">
                <input type="checkbox" id="nav" checked={ this.state.isChecked } onChange={ this.handleChecked }/><label htmlFor="nav"></label>
                <div className="nav-background"></div>
                <ul className="navbar">
                  <li>
                    <Link className="navbar-link" to="/nosotros" activeClassName="active" >
                    Quiénes somos</Link>
                  </li>
                  <li>
                    <Link className="navbar-link" to="/fideicomisos" activeClassName="active" >
                    Negocios Fiduciarios</Link>
                  </li>
                  <li>
                    <Link className="navbar-link" to="/fondos" activeClassName="active" >
                    Fondos</Link>
                  </li>
                  <li>
                    <Link className="navbar-link" to="/faq" activeClassName="active" >
                    FAQ</Link>
                  </li>
                  <li>
                    <Link className="navbar-link" to="/contacto" activeClassName="active" >
                    Contacto</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </nav>
          {this.props.children}
        </header>
      );
    }

}

export default Header;
