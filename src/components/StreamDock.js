import React, { Component } from 'react';
import { connect } from 'react-redux';
import StreamEmbed from './StreamEmbed'
import Search from './Search'
import {fetchStreamInfo} from '../actions/streams'


class StreamDock extends Component {

  render() {
    return (
      <div class="main">
      <Search fetchStreamInfo={this.props.fetchStreamInfo}/>

      </div>

    );
  }
}
const mapStateToProps = (state) => ({activeStreams: state.streamsReducer.activeStreams})
export default connect(mapStateToProps,{fetchStreamInfo})(StreamDock);
