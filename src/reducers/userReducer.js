export default function userReducer(state = { username: null, id: null, profileImage: null }, action) {
  switch (action.type) {
    case "SET_CURRENT_USER":
      localStorage.setItem('jwt', action.payload.jwt)
      return {...state, username: action.payload.username, id: action.payload.id}
    case "LIST_USERS_DATA":
      return {...state, users: action.payload}
    case "LOG_OUT_USER":
    return {...state, username: null}
    default:
      return state
  }
}
