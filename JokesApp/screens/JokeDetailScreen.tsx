import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import {indigo, purpleColor, whiteColor} from "../Theme";
import React, {useEffect} from "react";
import {CustomJoke} from "../model/CustomJoke";
import {DetailJoke} from "../components/DetailJoke";
import {Joke} from "../model/Joke";
import {useDispatch, useSelector} from "react-redux";
import {getCompletJokes, setCompletJokes, setSample} from "../redux/actions/sampleAction";
import {useIsFocused, useNavigation, validatePathConfig} from "@react-navigation/native";
import {deleteJoke, getJokesCustomsById} from "../redux/actions/customAction";
import {Navigation} from "../navigation/Navigation";
export default function JokeDetailScreen({route}) {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const dispatch = useDispatch();
    const jokeId = route.params.joke;
    const state = route.params.state;
    console.log(state);

    const DataGen = state ? useSelector((state: any) => state.customReducer.completCustomJoke) : useSelector((state: any) => state.sampleReducer.completJoke);
   // const DataGen = useSelector((state: any) => state.sampleReducer.completJoke);

    useEffect(() => {
        const getDetails = async () => {
            // @ts-ignore
           { state  ? await dispatch(getJokesCustomsById(jokeId)) : await dispatch(getCompletJokes(jokeId));}

        };
        getDetails();
    }, [dispatch]);

    async function deleteJokes() {
        // @ts-ignore
        await dispatch(deleteJoke(jokeId));
        navigation.goBack();
    }

    return (
        <View style={styles.font}>
            <DetailJoke item={DataGen}/>
            {state ? <TouchableOpacity onPress={deleteJokes}>
                <Image style={styles.img} source={require('../assets/delete-icon.png')} />
            </TouchableOpacity> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    font: {
        backgroundColor: purpleColor,
        width: '100%',
        height: '100%',

    },
    text: {
        fontSize: 24,
        color: 'darksalmon',
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: 20,
    },
    img: {
        width: 50,
        height: 50,
        margin: 20,
        alignSelf: 'center'
    }
});