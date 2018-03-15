import React from 'react'
import { connect } from 'react-redux'

import ReactTwitchEmbedVideo from "react-twitch-embed-video";
import Draggable from 'react-draggable';

const StreamEmbed = (props) => {
  const handleClass = props.handleId.slice(1)
  return (
    <div className="stream">
      <Draggable
      axis="both"
      handle= {props.handleId}
      defaultPosition={{x: 0, y: 0}}
      position={null}>
      <div>
      <img src="https://www.clker.com/cliparts/w/k/A/6/R/V/purple-push-pin-md.png" height= "50" width= "50" style={{border:"none"}} className={handleClass} draggable="false"/>
      <ReactTwitchEmbedVideo channel={props.channel}  height={props.height} width={props.width} targetClass={props.channel}/>
    </div>
    </Draggable>
    </div>
  )
}
export default StreamEmbed
