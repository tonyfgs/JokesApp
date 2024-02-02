import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import React from "react";
import {ListJokeScreen} from "./screens/ListJokeScreen";


export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <ListJokeScreen/>
        </SafeAreaView>
    );
}



// Mise à jour des styles pour inclure le style de la liste
const styles = StyleSheet.create({

    title: {
        fontSize: 24,
        color: 'darksalmon',
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
        backgroundColor: 'rgba(14, 14, 44, 1)',

    },
});
