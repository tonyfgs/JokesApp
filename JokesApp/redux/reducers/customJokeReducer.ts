import {SampleJoke} from "../../model/SampleJoke";
import {CustomJoke} from "../../model/CustomJoke";
import {CustomActionType} from "../actions/customAction";


interface state {
    postJoke: CustomJoke;
    customJokes: CustomJoke[];
    completCustomJoke: CustomJoke;
    deleteCustomJoke: CustomJoke;
    favoriteJokes: CustomJoke[];
}

// initial state for sampleJokes
const initialState: state = {
    postJoke: {} as CustomJoke,
    customJokes: [],
    completCustomJoke: {} as CustomJoke,
    deleteCustomJoke: {} as CustomJoke,
    favoriteJokes: []
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
        case CustomActionType.DELETE_CUSTOM_JOKE:
            return {
                ...state,
                deleteCustomJoke: action.payload,
            }
        case CustomActionType.FETCH_FAVORITE_JOKE:
            return {
                ...state,
                favoriteJokes: action.payload,
            }

        default:
            return state;
    }
}