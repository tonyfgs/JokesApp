import {Action, CategoriesActionType} from "../actions/categoriesAction";
import {Categorie} from "../../model/Categorie";

interface State {
    categories: Categorie[];
}

const initialState: State = {
    categories: [],
}
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