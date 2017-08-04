//Define here the action creators here

export const addTask = (text) => {
  return {
    type: 'ADD_TASK',
    text
  }
}

export const editTask = (id,text) => {
  return {
    type: 'EDIT_TASK',
    id,
    text
  }
}

export const deleteTask = (id) => {
  return {
    type: 'DELETE_TASK',
    id
  }
}
