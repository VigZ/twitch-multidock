import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StreamDock from './components/StreamDock'
import StreamData from './components/StreamData'
import FollowingBar from './components/FollowingBar'

class App extends Component {
  componentDidMount = () => {

  }

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
const mapStateToProps = (state) => ({ username: state.userReducer.username, id: state.userReducer.id, profileImage: state.userReducer.profileImage })
export default withRouter(connect(mapStateToProps, {verifyUser})(App))
