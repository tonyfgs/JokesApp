import {Joke} from "../model/Joke";
import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import {indigo} from "../Theme";

type JokeListItemProps = {
    item: Joke;
}
export function ListAllCategories(props: JokeListItemProps) {

    return (
        <View style={styles.listItem}>
                <View style={styles.chip}>
                    <Text>{props.item.type()}</Text>
                </View>
        </View>
    );
}



const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        margin: 10,
    },
    chip: {
        borderRadius: 16,
        backgroundColor: 'rgba(140, 140, 161, 1)',
        padding: 5,
        marginTop: 5,
        alignSelf: 'flex-start',
    },


});