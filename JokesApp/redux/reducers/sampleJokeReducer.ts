import {SampleJoke} from "../../model/SampleJoke";
import {Action, SampleActionType} from "../actions/sampleAction";


interface state {
    sampleJoke: SampleJoke[];
    recentJokes: SampleJoke[];
}

const initialState: state = {
    sampleJoke: [],
    recentJokes: [],
}

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

        default:
            return state;
    }
}