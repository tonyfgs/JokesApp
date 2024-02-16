import {Categorie} from "./Categorie";

export class CategorieFactory {
    public static createCategories(jsonArray: string): Categorie[] {
        let array = [];
        let json = JSON.parse(jsonArray);
        json.forEach(function (categorie) {
            array.push(new Categorie(categorie.name, categorie.number));
        });
        return array;
    }
}