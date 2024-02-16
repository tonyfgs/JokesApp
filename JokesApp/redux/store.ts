import { configureStore } from '@reduxjs/toolkit';
import categorieReducer from './reducers/categoryReducer';
import sampleReducer from './reducers/sampleJokeReducer';

const reducer = {
    categorieReducer: categorieReducer,
    sampleReducer: sampleReducer
};

// @ts-ignore
const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});

export default store;
