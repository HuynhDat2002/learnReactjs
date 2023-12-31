import { ADD_TODO, SET_TODO_INPUT } from "./constants";

const initState = {
  todo: [],
  todoInput: "",
};

function reducer(state, action) {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo,action.payload]
      };
    default:
      throw new Error("Invalid action");
  }
}

export { initState };
export default reducer;
