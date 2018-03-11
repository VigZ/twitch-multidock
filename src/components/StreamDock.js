import React, { Component } from 'react';
import StreamEmbed from './StreamEmbed'
import Search from './Search'


class StreamDock extends Component {

  render() {
    return (
      <div class="main">
      <StreamEmbed channel="fuslie" height="300" width="400" handleId=".handle1"/>
      <StreamEmbed channel="iwilldominate" height="200" width="100" handleId=".handle2"/>

      </div>

    );
  }
}

export default StreamDock;
