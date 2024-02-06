import React from "react";

import {FlatList, Image, SafeAreaView, ScrollView, SectionListComponent, StyleSheet, Text, View} from "react-native";
import {indigo, purpleColor} from "../Theme";

export function AddJokeScreen() {
    return (
        <View style={styles.font}>
            <Text style={styles.text}>Ajouter une blague</Text>
            <Text style={styles.text}>In Work</Text>
        </View>
    );
}




const styles = StyleSheet.create({
    font: {
        backgroundColor: indigo,
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
