import React, { Component } from 'react';
import ToolBar from './toolbar/toolbar';
import NavBar from './navbar/navbar';
import styles from './app.css' ;
import Sheet from './sheet/sheet' ;
import classNames from 'classnames';

export default class App extends Component {

  constructor(props) {
    super(props);
    let xs = window.matchMedia("(max-width: 768px)");

    this.state = {
      isNavBarOpen: !xs.matches,
    };
  }

  onHamburgerClick = () => {
    this.setState({isNavBarOpen: !this.state.isNavBarOpen});
  };


  render() {

    return (
      <div className="container-fluid">
        <div className="row">
          <ToolBar onHamburgerClick={this.onHamburgerClick}/>
        </div>

        <div className="row">
          {this.state.isNavBarOpen ?

            <NavBar/>
            : null
          }
          <div className={this.state.isNavBarOpen ? styles.contentWithOpendSideBar : null}>
            <Sheet/>
          </div>
        </div>
      </div>
    );
  }
}
