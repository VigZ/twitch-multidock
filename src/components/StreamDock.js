import React, { Component } from 'react';
import { connect } from 'react-redux';

import StreamEmbed from './StreamEmbed'
import Search from './Search'
import {fetchStreamInfo} from '../actions/streams'


class StreamDock extends Component {

  createEmbed = (streamData) => {
    if (streamData){
     return  <StreamEmbed channel={streamData.login} height='500' width='500' handleId='.handleId'/>
   }
  }

  createEmbeds = (streams) => {
    if (streams){
    return streams.map((stream) => this.createEmbed(stream));
    }
  }

  render() {
    return (
      <div class="main">
        <Search fetchStreamInfo={this.props.fetchStreamInfo}/>
        {this.createEmbeds(this.props.activeStreams)}
      </div>

    );
  }
}
const mapStateToProps = (state) => ({activeStreams: state.streamsReducer.activeStreams})
export default connect(mapStateToProps,{fetchStreamInfo})(StreamDock);
