import {View, Text, StyleSheet} from "react-native";
import {indigo, purpleColor, whiteColor} from "../Theme";
import React, {useEffect} from "react";
import {CustomJoke} from "../model/CustomJoke";
import {DetailJoke} from "../components/DetailJoke";
import {Joke} from "../model/Joke";
import {useDispatch, useSelector} from "react-redux";
import {getCompletJokes, setCompletJokes, setSample} from "../redux/actions/sampleAction";
import {validatePathConfig} from "@react-navigation/native";
import {getJokesCustomsById} from "../redux/actions/customAction";
//svjh
export default function JokeDetailScreen({route}) {
    const jokeId = route.params.joke;
    const state = route.params.state;
    console.log(state);

    // Déterminer quelle donnée utiliser en fonction de l'état de `state`
    const DataGen = state ? useSelector((state: any) => state.customReducer.completCustomJoke) : useSelector((state: any) => state.sampleReducer.completJoke);
   // const DataGen = useSelector((state: any) => state.sampleReducer.completJoke);

    const dispatch = useDispatch();
    useEffect(() => {
        const getDetails = async () => {
            // @ts-ignore
           { state  ? await dispatch(getJokesCustomsById(jokeId)) : await dispatch(getCompletJokes(jokeId));}

        };
        getDetails();
    }, [dispatch]);
    return (
        <View style={styles.font}>
            <DetailJoke item={DataGen}/>

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
    }
});