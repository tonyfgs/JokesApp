import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import React from "react";
import {ListJokeScreen} from "./screens/ListJokeScreen";
import {Navigation} from "./navigation/Navigation";
import {darksalmonColor, indigo, purpleColor} from "./Theme";
import {Provider} from "react-redux";
import store from "./redux/store";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function App() {
    return (
        <Provider store={store}>
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Navigation/>
        </SafeAreaView>
        </Provider>
    );
}



// Mise à jour des styles pour inclure le style de la liste
const styles = StyleSheet.create({

    title: {
        fontSize: 24,
        color: darksalmonColor,
        textAlign: 'center',
        marginVertical: 20,
    },
    titleResume: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    container: {
        flex: 1,
        backgroundColor: indigo,

    },
});
