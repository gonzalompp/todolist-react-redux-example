//Define the Reducers

const tasks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return []
    case 'EDIT_TASK':
      return []
    case 'DELETE_TASK':
      return []
    default:
      return state
  }
}

export default todos
