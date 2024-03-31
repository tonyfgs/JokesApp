import {useTheme} from "@react-navigation/native";
import {darksalmonColor, indigo, whiteColor} from "../Theme";
import React, {useEffect, useState} from "react";
import {getFavorite} from "../redux/store";
import {FlatList, SafeAreaView, StyleSheet, TouchableHighlight, View, Text} from "react-native";
import {JokeListItems} from "../components/ListeJokeComponent";
import {CustomJoke} from "../model/CustomJoke";
import {SampleJoke} from "../model/SampleJoke";
import {useAppSelector, useAppDispatch} from "../redux/store";
import {useDispatch} from "react-redux";
export function ListFavoriteJokeScreen({route, navigation}){

    const favoriteJokes: CustomJoke[] = useAppSelector((state) => state.customReducer.favoriteJokes);
    const dispatch = useDispatch();

    useEffect(() => {
        const getFavoriteJokes = async () => {
            // @ts-ignore
            await dispatch(getFavorite());
        }
        getFavoriteJokes();
    }, []);



    const styles = themeSettings();

    return (
        <SafeAreaView style={styles.container}>
            { favoriteJokes.length ? (
                <FlatList
                    data = {favoriteJokes}
                    renderItem={({ item }) => (
                        <TouchableHighlight onPress={() => navigation.navigate("JokeDetail", {"joke" : item.id})}>
                            <JokeListItems item={item}/>
                        </TouchableHighlight>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            ) : (
                <Text style={styles.title}>Aucun favoris</Text>
            )}

        </SafeAreaView>
    );
}
export function themeSettings() {
    const {colors} = useTheme();
    const styles = StyleSheet.create({
        title: {
            fontSize: 24,
            color: colors.text,
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
            backgroundColor: colors.background,

        },
        top: {
            backgroundColor : indigo,
        },
        header: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 9,
        },
        headerText: {
            fontSize: 18,
            color: whiteColor,
            textAlign: 'center',
            fontWeight: 'bold',
        },
        img2: {
            tintColor: whiteColor,
            justifyContent: "center",
            alignItems: "center",
        },
        button2:{
            flexDirection: "row",
            justifyContent: "center",
            marginRight: 10,
            borderRadius: 10,
            alignItems: "center",
            height: 30,
            width: 70,

            borderColor: darksalmonColor,
            borderWidth: 1,
            backgroundColor: darksalmonColor,
        },
    });

    return styles;
}