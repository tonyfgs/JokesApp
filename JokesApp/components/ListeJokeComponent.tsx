import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";
import React from "react";
import {Joke} from "../model/Joke";
import * as url from "url";

type JokeListItemProps = {
    item: Joke;
}
export function JokeListItems(props: JokeListItemProps) {
    return (
        <View style={styles.listItem}>
            <View style={styles.rectangle}></View>
            <Image style={styles.imageSettings} source={{
                uri: props.item.image}}/>
            <View style={styles.contentList}>
                <Text style={styles.titleResume}>Résumé de la blague</Text>
                <Text style={styles.contentSummary}>{props.item.summary()}</Text>
                <View style={styles.chip}>
                    <Text >Type : {props.item.type()}</Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    titleResume: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 20,
        color: "rgba(239, 239, 253, 1)",
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        backgroundColor : "rgba(14, 14, 44, 1)",
    },
    imageSettings: {
        width: '40%',
        height: 150,
    },
    contentList :{
        margin: 10,
    },
    chip: {
        borderRadius: 16,
        backgroundColor: 'rgba(140, 140, 161, 1)',
        padding: 5,
        marginTop: 5,
        alignSelf: 'flex-start',
    },
    rectangle: {
        flexShrink: 0,
        width: 11,
        height: 150,
        backgroundColor: 'darksalmon',
    },
    contentSummary: {
        color: "rgba(239, 239, 253, 1)",
    }

});

