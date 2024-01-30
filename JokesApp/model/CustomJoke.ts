import { Joke } from "./Joke";

// Class CustomJoke héritant de Joke
export class CustomJoke extends Joke{
    private  _id : string

    get id(): string {
        return this._id;
    }

    constructor(type : string, setup : string,punchline : string,image : string ,id : string) {
        super(type,setup,punchline,image);
        this._id = id
    }




}