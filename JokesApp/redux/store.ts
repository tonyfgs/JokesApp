import { configureStore } from '@reduxjs/toolkit';
import categorieReducer from './reducers/categoryReducer';
import sampleReducer from './reducers/sampleJokeReducer';
import customReducer from "./reducers/customJokeReducer";

const reducer = {
    categorieReducer: categorieReducer,
    sampleReducer: sampleReducer,
    customReducer: customReducer
};


// @ts-ignore
const store = configureStore({
    // @ts-ignore
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});

export default store;
