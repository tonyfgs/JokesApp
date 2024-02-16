import {Joke} from "./Joke";

export class Categorie{

    private  _name : string;

    private _number : number;


    get name(): string {
        return this._name;
    }

    get number(): number {
        return this._number;
    }

    public constructor(name :string, number :number) {
        this._name = name;
        this._number = number;
    }


}