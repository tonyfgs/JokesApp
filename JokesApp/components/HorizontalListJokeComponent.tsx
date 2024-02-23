import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";
import React from "react";
import {Joke} from "../model/Joke";
import * as url from "url";
import {greyColor, indigo, purpleColor} from "../Theme";

type JokeListItemProps = {
    item: Joke;
}


export function HorizontalListJokeComponent(props: JokeListItemProps) {
    return (
        <View style={styles.listItem}>
            <View style={styles.rectangle}></View>
            <Image style={styles.imageSettings} source={{
                uri: props.item.image}}/>
            <View style={styles.contentList}>
                <Text style={styles.titleResume}>Résumé de la blague</Text>
                <Text style={styles.contentSummary}>{props.item.summary}</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    titleResume: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 20,
        color: "white",
        textAlign: 'center',
    },
    listItem: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: indigo,
        margin: 10,
        height: 270,
        width: 250,
        borderRadius: 5,
    },
    imageSettings: {
        width: '75%',
        height: 150,
        position: 'absolute',
        margin: 5,
    },
    contentList :{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: 30,
    },
    chip: {
        borderRadius: 16,
        backgroundColor: greyColor,
        padding: 5,
        marginTop: 5,
        alignSelf: 'center',
    },
    rectangle: {
        borderRadius: 4,
        flexShrink: 0,
        width: "100%",
        height: "20%",
        backgroundColor: 'darksalmon',
    },
    contentSummary: {
        textAlign: 'center',
        color: "white",
    }

});

