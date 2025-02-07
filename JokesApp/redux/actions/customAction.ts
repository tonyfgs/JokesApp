import {CustomJoke} from "../../model/CustomJoke";
import {JokeFactory} from "../../model/JokeFactory";

export enum CustomActionType {
    POST_CUSTOM_JOKE = 'POST_CUSTOM_JOKE',
    FETCH_CUSTOMS_JOKE = 'FETCH_CUSTOMS_JOKE',
    FETCH_CUSTOMS_JOKE_BY_ID = 'FETCH_CUSTOMS_JOKE_BY_ID',
    DELETE_CUSTOM_JOKE = 'DELETE_CUSTOM_JOKE',
    FETCH_FAVORITE_JOKE = 'FETCH_FAVORITE_JOKE'
}

export interface CustomAction {
    type: CustomActionType;
    payload: [];
}

export interface postCustomAction {
    type: CustomActionType;
    payload: CustomJoke;
}

export interface CustomsAction {
    type: CustomActionType;
    payload: CustomJoke[];
}



export type Action = CustomAction;


export const setPostJoke = (postJoke: CustomJoke): postCustomAction => {
    return {
        type: CustomActionType.POST_CUSTOM_JOKE,
        payload: postJoke
    }
}

export const setCustomsJoke = (customJokes: CustomJoke[]): CustomsAction => {
    return {
        type: CustomActionType.FETCH_CUSTOMS_JOKE,
        payload: customJokes
    }
}

export const setCustomsJokeById = (completCustomJoke: CustomJoke): postCustomAction => {
    return {
        type: CustomActionType.FETCH_CUSTOMS_JOKE_BY_ID,
        payload: completCustomJoke
    }

}

export const setDeleteCustomJoke = (deleteCustomJoke: CustomJoke): postCustomAction => {
    return {
        type: CustomActionType.DELETE_CUSTOM_JOKE,
        payload: deleteCustomJoke
    }
}

export const setFavoriteJoke = (favoriteJokes: CustomJoke[]): CustomsAction => {
    return {
        type: CustomActionType.FETCH_FAVORITE_JOKE,
        payload: favoriteJokes
    }
}


export const postJoke = (type : string, setup : string, punchline : string) => {
    return async  dispatch => {
        try {
            console.log('type', type, 'setup', setup, 'punchline', punchline);
            const reponse = await fetch('https://iut-weather-api.azurewebsites.net/jokes/', {
                method: 'POST',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(
                    {
                        type: type,
                        setup: setup,
                        punchline: punchline
                    }
                )
            });
            const data = await reponse.json();
            dispatch(setPostJoke(data));
        } catch (error) {
            console.log('Error---------', error);
        }
    }
}

export const getJokesCustoms = () => {
    return async dispatch => {
        try {
            const custom = await fetch('https://iut-weather-api.azurewebsites.net/jokes/');
            const customsJson = await custom.text();
            const customJokes = JokeFactory.createCustomJokes(customsJson);
            dispatch(setCustomsJoke(customJokes));
        } catch (error) {
            console.log('Error---------', error);
        }
    }
}

export const getJokesCustomsById = (id : number) => {
    return async dispatch => {
        try {
            const custom = await fetch('https://iut-weather-api.azurewebsites.net/jokes/' + id);
            const customsJson = await custom.text();
            const customJokes = JokeFactory.createCustomJokeById(customsJson);
            console.log('customJokes', customJokes);
            dispatch(setCustomsJokeById(customJokes));
        } catch (error) {
            console.log('Error---------', error);
        }
    }
}

export const deleteJoke = (id : number) => {
    return async dispatch => {
        try {
            const custom = await fetch('https://iut-weather-api.azurewebsites.net/jokes/' + id, {
                method: 'DELETE',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                }
            });
            console.log('Suppression');
            dispatch(setDeleteCustomJoke({} as CustomJoke));
        } catch (error) {
            console.log('Error---------', error);
        }
    }
}
