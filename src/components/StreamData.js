import React, { Component } from 'react';
import { connect } from 'react-redux';
import StreamItem from './StreamItem'
import {setFocus} from '../actions/streams'




class StreamData extends Component {


  render() {

    const activeStreams = this.props.activeStreams.map((stream) => <StreamItem streamData={stream} setFocus={this.props.setFocus}/>)
    return (
        <div class="sidebar-second">
          <div>
            <img src="https://cdn1.iconfinder.com/data/icons/simple-icons/256/twitch-256-black.png" style={{border:"none"}}/>
          </div>
          {activeStreams}
        </div>

    );
  }
}

const mapStateToProps = (state) => ({activeStreams: state.streamsReducer.activeStreams})
export default connect(mapStateToProps,{setFocus})(StreamData);
