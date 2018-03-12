export function fetchStreamInfo(searchTerm) {
  console.log(searchTerm)
  return (dispatch) => {
    var myInit = { method: 'GET',
               headers: {'Client-ID': 'wtdjztidcgme3rqcx8304felu3ino6'},
               mode: 'cors',
               cache: 'default' };
    fetch(`https://api.twitch.tv/helix/users?login=${searchTerm}`, myInit)
    .then(response => response.json())
    .then(streamData =>{
       dispatch(addActiveStream(streamData))
     })
  }
}

export function addActiveStream(streamData){
  return {
  type: "ADD_ACTIVE_STREAM",
  payload: streamData
  }
}

export function setFocus(stream){
  return {
  type: "ADD_FOCUSED_STREAM",
  payload: stream
}

}

export function deleteActiveStream(streamData){
  return{
    type: "DELETE_ACTIVE_STREAM",
    payload: streamData
  }
}

export function resetFocus(){
  return{
    type: "REMOVE_FOCUSED_STREAM"
  }
}
