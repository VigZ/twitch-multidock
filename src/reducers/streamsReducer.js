export default function streamsReducer(state = { activeStreams: [] }, action) {
  switch (action.type) {
    case "ADD_ACTIVE_STREAM":
      return {...state, activeStreams: [...state.activeStreams, action.payload.data[0]]}
    case "DELETE_ACTIVE_STREAM":
      return {...state, activeStreams: [...state.activeStreams.filter((stream) => stream.id !== action.payload.id)]}
    case "MODIFY_ACTIVE_STREAM":
      return {...state, currentlyViewingData: action.payload}
    case "LIST_STREAMS":
    return {...state}
    default:
      return state
  }
}
