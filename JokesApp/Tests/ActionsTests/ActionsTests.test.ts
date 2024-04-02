
import {describe,test ,expect, jest, it} from "@jest/globals";
import {CustomJoke} from "../../model/CustomJoke";
import {
    CustomActionType,
    getJokesCustoms,
    setCustomsJoke,
    setCustomsJokeById, setDeleteCustomJoke, setFavoriteJoke,
    setPostJoke
} from "../../redux/actions/customAction";


describe('Action Tests', () => {
    it('setPostJoke creates correct action', () => {
        const postJoke =  new CustomJoke('test', 'Why did the chicken...', 'To get to the other side!', 'http://www.jokes.com/joke1', "1");
        const expectedAction = {
            type: CustomActionType.POST_CUSTOM_JOKE,
            payload: postJoke,
        };
        expect(setPostJoke(postJoke)).toEqual(expectedAction);
    });

    it ('setCustomsJoke creates correct action', () => {
        const customJokes = [new CustomJoke('test', 'Why did the chicken...', 'To get to the other side!', 'http://www.jokes.com/joke1', "1")];
        const expectedAction = {
            type: CustomActionType.FETCH_CUSTOMS_JOKE,
            payload: customJokes,
        };
        expect(setCustomsJoke(customJokes)).toEqual(expectedAction);
    }
    );

    it('setCustomsJokeById creates correct action', () => {
        const completCustomJoke = new CustomJoke('test', 'Why did the chicken...', 'To get to the other side!', 'http://www.jokes.com/joke1', "1");
        const expectedAction = {
            type: CustomActionType.FETCH_CUSTOMS_JOKE_BY_ID,
            payload: completCustomJoke,
        };
        expect(setCustomsJokeById(completCustomJoke)).toEqual(expectedAction);
    }
    );
});