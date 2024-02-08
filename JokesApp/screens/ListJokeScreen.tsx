import {FlatList, SafeAreaView, StyleSheet, Text, View} from "react-native";
import React from "react";
import {JokeListItems} from "../components/ListeJokeComponent";
import {Joke} from "../model/Joke";
import {JokeFactory} from "../model/JokeFactory";
import {JokeStub} from "../model/JokeStub";
import {indigo, purpleColor} from "../Theme";


const DATACUSTOM = JokeFactory.createCustomJokes(JokeStub.customJokes)
const DATASAMPLE = JokeFactory.createSampleJokes(JokeStub.sampleJokes)

//@ts-ignore
export let DataGen: Joke[] = DATACUSTOM.concat(DATASAMPLE);

export function ListJokeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DataGen}
                renderItem={JokeListItems}
                keyExtractor={(item: Joke) => item.summary()}
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
