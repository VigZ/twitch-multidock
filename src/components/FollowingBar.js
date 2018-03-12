import React, { Component } from 'react';
import InfoPanel from './InfoPanel';
import ControlPanel from './ControlPanel';
import { connect } from 'react-redux';
import {deleteActiveStream, resetFocus } from '../actions/streams';


class FollowingBar extends Component {

  render() {
    return (
        <div class="sidebar-first">
        <InfoPanel focusedStream={this.props.focusedStream}/>
        <ControlPanel focusedStream={this.props.focusedStream} deleteActiveStream={this.props.deleteActiveStream} resetFocus={this.props.resetFocus}/>
        </div>

    );
  }
}


const mapStateToProps = (state) => ({focusedStream: state.followingBarReducer.focusedStream})
export default connect(mapStateToProps,{deleteActiveStream, resetFocus})(FollowingBar);
