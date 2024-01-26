class JokeFactory {

    public static createCustomJokes(jsonArray: string) : CustomJoke[]{
        let array = []
        let json = JSON.parse(jsonArray)
        json.forEach(function (joke) {
            array.push(new CustomJoke(joke.type,joke.setup,joke.punchline,joke.image,joke.id))
        })

        return array
    }


    public static createSampleJokes(jsonArray: string) : SampleJoke[] {
        let array = []
        let json = JSON.parse(jsonArray)
        json.forEach(function (joke) {
            array.push(new SampleJoke(joke.type,joke.setup,joke.punchline,joke.image,joke.id))
        })

        return array
    }


}