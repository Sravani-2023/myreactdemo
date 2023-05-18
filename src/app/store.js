import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../feature/counterSlice';
import postsReducer from '../features/postsSlice';

export const store = configureStore({
    reducer : {
        counter : counterReducer,
        posts : postsReducer
    }
})