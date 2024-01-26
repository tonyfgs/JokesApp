class CustomJoke extends Joke{
    get id(): string {
        return this._id;
    }

    constructor(type : string, setup : string,punchline : string,image : string ,id : string) {
        super(type,setup,punchline,image);
        this._id = id
    }


    private _id : string


}