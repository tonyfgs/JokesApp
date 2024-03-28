// Classe abstraite Joke permettant de creer une joke avec différents attributs
export abstract class Joke{

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
    public get type(): string {
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

    // Permet d'afficher les 25 premiers caractères du contexte de la blague suivis de ...
    public get summary():string{
        return this.setup.substring(0,25) + ' ...'
    }

    // Permet de retourner le type d'une blague + sont contexte
    public get description():string{
        return this.type + ' : ' + this.setup
    }


}

