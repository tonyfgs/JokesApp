import {SampleJoke} from "../../model/SampleJoke";
import {Action, SampleActionType} from "../actions/sampleAction";
import {CustomJoke} from "../../model/CustomJoke";


interface state {
    sampleJoke: SampleJoke[];
    recentJokes: SampleJoke[];
    completJoke: SampleJoke;
}

// initial state for sampleJokes
const initialState: state = {
    completJoke: {} as SampleJoke,
    sampleJoke: [],
    recentJokes: [],
}

// app reducer for sampleJokes
// @ts-ignore
export default appReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case SampleActionType.FETCH_SAMPLE:
            return {
                ...state,
                sampleJoke: action.payload
            }
        case SampleActionType.FECTH_LAST_JOKES:
            return {
                ...state,
                recentJokes: action.payload
            }
        case SampleActionType.FECTH_COMPLET_JOKE:
            return {
                ...state,
                completJoke: action.payload,
            }


        default:
            return state;
    }
}