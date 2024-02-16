import {SampleJoke} from "../../model/SampleJoke";
import {JokeFactory} from "../../model/JokeFactory";

export enum SampleActionType {
    FETCH_SAMPLE = 'FETCH_SAMPLE',
    FECTH_LAST_JOKES = 'FECTH_LAST_JOKES'
}

export interface SampleAction {
    type: SampleActionType;
    payload: SampleJoke[];
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

export const getSampleJoke = async() : Promise<SampleJoke[]> => {
        try {
            const sample = await fetch('https://iut-weather-api.azurewebsites.net/jokes/samples');
            const sampleJson = await sample.text();
            return JokeFactory.createSampleJokes(sampleJson);
        }
        catch (error) {
            console.log('Error---------', error);
        }
}

export const getLatestJokes = async() : Promise<SampleJoke[]> => {
    try {
        const sample = await fetch('https://iut-weather-api.azurewebsites.net/jokes/lasts');
        const sampleJson = await sample.text();
        return JokeFactory.createSampleJokes(sampleJson);
    }
    catch (error) {
        console.log('Error---------', error);
    }

}
