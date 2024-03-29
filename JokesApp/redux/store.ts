import { configureStore } from '@reduxjs/toolkit';
import categorieReducer from './reducers/categoryReducer';
import sampleReducer from './reducers/sampleJokeReducer';
import customReducer from "./reducers/customJokeReducer";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Theme} from "@react-navigation/native";
import {CustomJoke} from "../model/CustomJoke";
import {setFavoriteJoke} from "./actions/customAction";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {SampleJoke} from "../model/SampleJoke";
import {Joke} from "../model/Joke";

const reducer = {
    categorieReducer: categorieReducer,
    sampleReducer: sampleReducer,
    customReducer: customReducer
};


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

export const storeFavoriteJoke = (joke : CustomJoke) => {
    return async dispatch => {
        try {
            const favoriteJokes = await AsyncStorage.getItem('favorites');
            const favoriteJokesList = favoriteJokes != null ? JSON.parse(favoriteJokes) : [];
            favoriteJokesList.push(joke);
            await AsyncStorage.setItem('favorites', JSON.stringify(favoriteJokesList));
            const favorites = favoriteJokesList.map(joke => new SampleJoke(joke["type"], joke["setup"], joke["punchline"], joke["image"], joke["id"]))
            dispatch(setFavoriteJoke(favorites));
            const length = favoriteJokes.length;
            console.log("Leght" + length);
            console.log("favorite stored");
        } catch (e) {
            console.log(e);
        }
    }
}

export const getFavorite = () => {
    return async (dispatch) => {
        try {
            const favoriteJokes = await AsyncStorage.getItem('favorites');
            let favoriteJokesList = favoriteJokes != null ? JSON.parse(favoriteJokes) : [];
            favoriteJokesList = favoriteJokesList.filter(joke => joke.id !== undefined);
            await AsyncStorage.setItem('favorites', JSON.stringify(favoriteJokesList));
            const favorites = favoriteJokesList.map(joke => new SampleJoke(joke["type"], joke["setup"], joke["punchline"], joke["image"], joke["id"]))
            dispatch(setFavoriteJoke(favorites));
        } catch (e) {
            console.log(e);
        }
    }
}

export const removeFavoriteJoke =  (joke) => {
    return async dispatch => {
        try {
            await AsyncStorage.clear()
        } catch (e) {
            console.log("An error occurred", e);
        }
    }
}

export type AppDispatch = typeof store.dispatch;

export type AppStore = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppStore> = useSelector;

export default store;
