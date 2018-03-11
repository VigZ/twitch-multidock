export default function streamsReducer(state = { activeStreams: [] }, action) {
  switch (action.type) {
    case "ADD_ACTIVE_STREAM":
      localStorage.setItem('jwt', action.payload.jwt)
      return {...state, username: action.payload.username, id: action.payload.id}
    case "DELETE_ACTIVE_STREAM":
      return {...state, users: action.payload}
    case "MODIFY_ACTIVE_STREAM":
      return {...state, currentlyViewingData: action.payload}
    case "LIST_FOLLOWED_STREAMS":
      return {}
    case "LIST_STREAMS":
    return {...state, username: null}
    default:
      return state
  }
}
