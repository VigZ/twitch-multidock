import React, { Component } from 'react';


class StreamItem extends Component {

  handleClick = () =>{
    this.props.setFocus(this.props.streamData)
  }

  render(){
  return (
    <div onClick={this.handleClick}>
    {this.props.streamData.login}
    <img src={this.props.streamData.profile_image_url} height='100' width='100'/>
    </div>
    )
  }
}
export default StreamItem
