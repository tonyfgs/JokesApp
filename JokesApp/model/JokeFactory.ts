import { CustomJoke } from "./CustomJoke";
import { SampleJoke } from "./SampleJoke";
import {Categorie} from "./Categorie";

export class JokeFactory {

    // Permets de transformer les données json en Tableau de CustomsJokes et de le retourner
    public static createCustomJokes(jsonArray: string) : CustomJoke[]{
        let array = []
        let json = JSON.parse(jsonArray)
        json.forEach(function (joke) {
            array.push(new CustomJoke(joke.type,joke.setup,joke.punchline,joke.image,joke.id))
        })

        return array;
    }

    // Permets de transformer les données json en Tableau de SampleJokes et de le retourner

    static createSampleJokes(jsonArray: string): SampleJoke[] {
        let array = [];
        let json = JSON.parse(jsonArray);
        json.forEach(function (joke) {
            array.push(new SampleJoke(joke.type, joke.setup, joke.punchline, joke.image, joke.id));
        })

        return array;
    }

    static createSampleJokeById(jsonArray: string): SampleJoke {
        let array = [];
        let json = JSON.parse(jsonArray);
        return new SampleJoke(json.type, json.setup, json.punchline,json.image, json.id)
        //json.forEach(function (joke) {
           // array.push(new SampleJoke(joke.type, joke.setup, joke.image,joke.punchline, joke.id));
        //})
    }
}