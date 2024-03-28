import {SampleJoke} from "../../model/SampleJoke";
import {CustomJoke} from "../../model/CustomJoke";
import {CustomActionType} from "../actions/customAction";


interface state {
    postJoke: CustomJoke;
    customJokes: CustomJoke[];
    completCustomJoke: CustomJoke;
}

// initial state for sampleJokes
const initialState: state = {
    postJoke: {} as CustomJoke,
    customJokes: [],
    completCustomJoke: {} as CustomJoke,
}

// app reducer for sampleJokes
// @ts-ignore
export default appReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case CustomActionType.POST_CUSTOM_JOKE:
            return {
                ...state,
                postJoke: action.payload,
            }
        case CustomActionType.FETCH_CUSTOMS_JOKE:
            return {
                ...state,
                customJokes: action.payload,
            }
        case CustomActionType.FETCH_CUSTOMS_JOKE_BY_ID:
            return {
                ...state,
                completCustomJoke: action.payload,
            }

        default:
            return state;
    }
}