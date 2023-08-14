import { DECREMENT, INCREMENT, RESET } from "../Action type/Actiontype";

const initialState = {
  counter: 0,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {...state, counter:state.counter + 1};

    case DECREMENT:
      return {...state, counter:state.counter - 1};

    case RESET:
      return {...state, counter:state.counter = 0};

    default:
      return state;
  }
};
export default Reducer;
