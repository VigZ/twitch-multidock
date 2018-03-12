import React, { Component } from 'react';
import { connect } from 'react-redux';
import StreamItem from './StreamItem'
import {setFocus} from '../actions/streams'




class StreamData extends Component {


  render() {

    const activeStreams = this.props.activeStreams.map((stream) => <StreamItem streamData={stream} setFocus={this.props.setFocus}/>)
    return (
        <div class="sidebar-second">Sidebar second: Fixed width
        {activeStreams}
        </div>

    );
  }
}

const mapStateToProps = (state) => ({activeStreams: state.streamsReducer.activeStreams})
export default connect(mapStateToProps,{setFocus})(StreamData);
