abstract class Joke{

    private _type : string
    private _setup : string
    private _punchline : string
    private _image : string

    protected constructor(type : string, setup : string, punchline : string, image : string ) {
        this._type = type
        this._setup = setup
        this._punchline = punchline
        this._image = image
    }
    public type(): string {
        return this._type;
    }

    public get setup(): string {
        return this._setup;
    }

    public get punchline(): string {
        return this._punchline;
    }

    public get image(): string {
        return this._image;
    }

    public summary():string{
        return this.setup.padEnd(25,'.')
    }

    public description():string{
        return this.type+ ' - ' +this.summary()
    }
}

