import { configureStore } from '@reduxjs/toolkit';
import categorieReducer from './reducers/categoryReducer';
import sampleReducer from './reducers/sampleJokeReducer';
import customReducer from "./reducers/customJokeReducer";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Theme} from "@react-navigation/native";

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


export const storeTheme = async (theme) => {
    try {
        const jsonValue = JSON.stringify(theme)
        await AsyncStorage.setItem('@theme', jsonValue)
        console.log("theme stored")
    } catch (e) {
        console.log(e);
    }
}

export const getTheme = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@theme')
        return jsonValue != null ? JSON.parse(jsonValue) as Theme : null;
    } catch(e) {
        console.log(e);
    }
}
export default store;
