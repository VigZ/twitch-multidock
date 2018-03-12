import React from 'react';


const InfoPanel = (props) => {
  if (props.focusedStream){
    return (
        <div>
        <img src={props.focusedStream.profile_image_url} height='200' width='200'/>
        {props.focusedStream.login}
        {props.focusedStream.description}
        {props.focusedStream.viewCount}
        </div>

    );
  }
  else{
    return (
      <div>
      </div>
    )
  }
}

export default InfoPanel;
