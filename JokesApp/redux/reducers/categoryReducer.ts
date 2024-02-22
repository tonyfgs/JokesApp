import {Action, CategoriesActionType} from "../actions/categoriesAction";
import {Categorie} from "../../model/Categorie";

interface State {
    categories: Categorie[];
}


// initial state for categories
const initialState: State = {
    categories: [],
}

// app reducer for categories
// @ts-ignore
export default appReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case CategoriesActionType.FETCH_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state;
    }
}