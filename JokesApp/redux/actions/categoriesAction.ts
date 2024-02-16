import {Categorie} from "../../model/Categorie";
import {CategorieFactory} from "../../model/CategorieFactory";


export enum CategoriesActionType {
    FETCH_CATEGORIES = 'FETCH_CATEGORIES',
}

export interface CategoriesAction {
    type: CategoriesActionType;
    payload: Categorie[];
}

export type Action = CategoriesAction;

export const setCategories = (categories: Categorie[]): CategoriesAction => {
    return {
        type: CategoriesActionType.FETCH_CATEGORIES,
        payload: categories
    }
}

export const getCategorie = async() : Promise<Categorie[]> => {
    try {
        const categories = await fetch('https://iut-weather-api.azurewebsites.net/jokes/categories/top');
        const categorieJson = await categories.text();
        return CategorieFactory.createCategories(categorieJson);

    }
    catch (error) {
        console.log('Error---------', error);
    }
}