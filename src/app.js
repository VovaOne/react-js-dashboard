import React, { Component } from 'react';
import ToolBar from './toolbar/toolbar';
import NavBar from './navbar/navbar';
import styles from './app.css' ;
import Sheet from './sheet/sheet2' ;
import media from './util/media';
import clickOutside from './window-events';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isNavBarOpen: false//!media.xs.matches //hide default side bar on extra small devices
    };
  }

  onHamburgerClick = () => {
    this.setState({isNavBarOpen: !this.state.isNavBarOpen});
  };


  render() {

    return (
      <div>

        {this.state.isNavBarOpen && <NavBar/>}

        <div className="container-fluid">
          <div className="row">
            <ToolBar onHamburgerClick={this.onHamburgerClick}/>
          </div>

          <div className="row">
            <div
              className={this.state.isNavBarOpen ? 'content-width-with-opened-sidebar' : 'content-width-with-closed-sidebar'}>
              <Sheet/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
