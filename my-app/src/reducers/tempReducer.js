// temp reducer
// delete if needed
function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return ([
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]);
    default:
      return state
  }
}

export default todos;