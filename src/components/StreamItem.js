import React, { Component } from 'react';


class StreamItem extends Component {

  handleClick = () =>{

    this.props.setFocus(this.props.streamData)
  }

  render(){
    if(this.props.streamData){
  return (
    <div onClick={this.handleClick} className="grow">
      <img src={this.props.streamData.profile_image_url} height='100' width='100'/>
      <div style={{display:"block", textAlign:"center",  border: '1px solid black', marginBottom:"10px"}}>
        {this.props.streamData.login}
      </div>
    </div>
      )
    }
    return null
  }
}
export default StreamItem
