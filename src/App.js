import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import StreamDock from './components/StreamDock'
import StreamData from './components/StreamData'
import FollowingBar from './components/FollowingBar'
import Search from './components/Search'

class App extends Component {

  render() {
    return (
      <div class="wrapper">
        <div class="content">
          <div class="columns">
            <FollowingBar/>
            <StreamDock/>
            <StreamData/>
          </div>
        </div>
        </div>

    );
  }
}
const mapStateToProps = (state) => ({})
export default connect(mapStateToProps, {})(App)
