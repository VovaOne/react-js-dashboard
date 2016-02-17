import React, { Component } from 'react';
import ToolBar from './toolbar/toolbar';
import NavBar from './navbar/navbar';
import styles from './app.css' ;
import Sheet from './sheet/sheet' ;
import media from './util/media';
import clickOutside from './click-outside';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isNavBarOpen: !media.xs.matches //hide default side bar on extra small devices
    };
  }

  componentDidMount = () => {
    window.appContainer.addEventListener('click', clickOutside.handleDocumentClick)
  };

  componentWillUnmount = () => {
    window.appContainer.removeEventListener('click', clickOutside.handleDocumentClick)
  };

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
