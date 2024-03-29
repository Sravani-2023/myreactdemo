// import { createStore } from "redux";

// const reducerFn = (state = { counter: 0 }, action) => {

//     if(action.type === 'INC'){
//         return({counter: state.counter + 1} )
//     }
//     if(action.type === 'DEC'){
//         return({counter: state.counter - 1} )
//     }
//     if(action.type === 'RES'){
//         return({counter: 0} )
//     }
//     if(action.type === 'ADD'){
//         return({counter: state.counter + action.payload})
//     }
//     if(action.type === 'SUB'){
//         return({counter: state.counter - action.payload})
//     }

//   return state;
// };

// const store = createStore(reducerFn);
// export default store;

import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      state.counter++;
    },
    decrement(state, action) {
      state.counter--;
    },
    add(state, action) {
      state.counter += action.payload;
    },
    reset(state, action) {
      state.counter = 0;
    },
    sub(state, action) {
      state.counter -= 5;
    },
  },
});

export const actions = counterSlice.actions;
const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;