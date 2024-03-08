import {SampleJoke} from "../../model/SampleJoke";
import {JokeFactory} from "../../model/JokeFactory";
import {CustomJoke} from "../../model/CustomJoke";

export enum SampleActionType {
    FETCH_SAMPLE = 'FETCH_SAMPLE',
    FECTH_LAST_JOKES = 'FECTH_LAST_JOKES',
    FECTH_COMPLET_JOKE = 'FECTH_COMPLET_JOKE',
    POST_CUSTOM_JOKE = 'POST_CUSTOM_JOKE',
}

export interface SampleAction {
    type: SampleActionType;
    payload: SampleJoke[];
}

export interface SampleActionComplet {
    type: SampleActionType;
    payload: SampleJoke;
}

export interface postCustomAction {
    type: SampleActionType;
    payload: CustomJoke;
}

export type Action = SampleAction;


export const setSample = (sample: SampleJoke[]): SampleAction => {
    return {
        type: SampleActionType.FETCH_SAMPLE,
        payload: sample
    }
}

export const setRecentJokes = (recentJokes: SampleJoke[]): SampleAction => {
    return {
        type: SampleActionType.FECTH_LAST_JOKES,
        payload: recentJokes
    }
}

export const setCompletJokes = (completJoke: SampleJoke): SampleActionComplet => {
    return {
        type: SampleActionType.FECTH_COMPLET_JOKE,
        payload: completJoke
    }
}

export const setPostJoke = (postJoke: CustomJoke): postCustomAction => {
    return {
        type: SampleActionType.POST_CUSTOM_JOKE,
        payload: postJoke
    }
}

export const getSampleJoke = () => {
    return async dispatch => {
        try {
            const sample = await fetch('https://iut-weather-api.azurewebsites.net/jokes/samples');
            const sampleJson = await sample.text();
            const joke = JokeFactory.createSampleJokes(sampleJson);
            dispatch(setSample(joke));
        } catch (error) {
            console.log('Error---------', error);
        }
    }
}

export const getLatestJokes = () => {
    return async dispatch => {
        try {
            const sample = await fetch('https://iut-weather-api.azurewebsites.net/jokes/lasts');
            const sampleJson = await sample.text();
            const latestJoke = JokeFactory.createSampleJokes(sampleJson);
            dispatch(setRecentJokes(latestJoke));
        } catch (error) {
            console.log('Error---------', error);
        }
    }
}

export const getCompletJokes = (id : number) => {
    return async dispatch => {
        try {
            const sample = await fetch('https://iut-weather-api.azurewebsites.net/jokes/samples/' + id);
            const sampleJson = await sample.text();
            const jokeSelect = JokeFactory.createSampleJokeById(sampleJson);
            dispatch(setCompletJokes(jokeSelect))
        } catch (error) {
            console.log('Error---------', error);
        }
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