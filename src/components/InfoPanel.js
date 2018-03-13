import React from 'react';


const InfoPanel = (props) => {
  if (props.focusedStream){
    return (
        <div style={{marginTop: "55px"}}>
          <img src={props.focusedStream.profile_image_url} height='125' width='125' style={{display: "block", margin:"auto", borderWidth:"5px"}}/>
          <div className="title" style={{textAlign:"center"}}>
            {props.focusedStream.login}
          </div>
          <div style={{textAlign:"center"}}>
            {props.focusedStream.description}
          </div>
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
