import {FlatList, SafeAreaView, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import React, {useEffect} from "react";
import {JokeListItems} from "../components/ListeJokeComponent";
import {indigo, purpleColor} from "../Theme";
import {CustomJoke} from "../model/CustomJoke";
import {useDispatch, useSelector} from 'react-redux';
import {getSampleJoke, setSample} from "../redux/actions/sampleAction";

export function ListJokeScreen({route, navigation}) {
    const DataGen = useSelector((state: any) => state.sampleReducer.sampleJoke);
    const dispatch = useDispatch();
    useEffect(() => {
        const getJokes = async () => {
            // @ts-ignore
            dispatch(setSample(await getSampleJoke()));
        };
        getJokes();
    }, [dispatch]);
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DataGen}
                renderItem={({ item }) => (
                    <TouchableHighlight onPress={() => navigation.navigate("JokeDetail", {"joke" : item.id})}>
                        <JokeListItems item={item}/>
                    </TouchableHighlight>
                )}
                keyExtractor={(item:  CustomJoke) => item.id.toString()}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    title: {
        fontSize: 24,
        color: 'darksalmon',
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: 20,
    },
    titleResume: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    container: {
        flex: 1,
        backgroundColor: purpleColor    ,

    },
    top: {
        backgroundColor : indigo,
    },
});