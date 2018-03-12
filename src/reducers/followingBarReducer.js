export default function followingBarReducer(state = { focusedStream:null }, action) {
  switch (action.type) {
    case "ADD_FOCUSED_STREAM":
      return {...state, focusedStream: action.payload}
    case "REMOVE_FOCUSED_STREAM":
      return {...state, focusedStream:null}
    default:
      return state
  }
}
