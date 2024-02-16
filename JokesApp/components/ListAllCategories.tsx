import {Joke} from "../model/Joke";
import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import {greyColor, indigo} from "../Theme";
import {Categorie} from "../model/Categorie";

type ListAllCategories = {
    item: Categorie;
}



export function ListAllCategories(props: ListAllCategories) {

    return (
        <View style={styles.listItem}>
                <View style={styles.chip}>
                    <Text>{props.item.name}</Text>
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
        backgroundColor: greyColor,
        padding: 5,
        marginTop: 5,
        alignSelf: 'flex-start',
    },


});