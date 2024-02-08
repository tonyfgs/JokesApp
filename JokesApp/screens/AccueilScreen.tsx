import {FlatList, Image, SafeAreaView, ScrollView, SectionListComponent, StyleSheet, Text, View} from "react-native";
import {indigo, purpleColor} from "../Theme";
import {Joke} from "../model/Joke";
import {DataGen, ListJokeScreen} from "./ListJokeScreen";
import React from "react";
import {HorizontalListJokeComponent} from "../components/HorizontalListJokeComponent";
import {ListAllCategories} from "../components/ListAllCategories";

let taille = DataGen.length;
let LastJokes = DataGen.slice(taille - 16, taille);

function filterCategory(jokes: Joke[]): String[] {
    let categories: String[] = [];
    jokes.forEach(joke => {
        if (!categories.includes(joke.type())) {
            categories.push(joke.type());
        }
    });
    return categories;
}
export function AccueilScreen() {

    // Permet de filtrer les types des blagues pour les afficher dans la liste des categories
    const FiltereData = filterCategory(LastJokes);

    return (
        <SafeAreaView style={styles.container}>

            <View>
                <Image source={require('../assets/logo.png')} style={styles.imgStyle}/>
                <Text style={styles.title}>Chat C'est Drôle</Text>
                <Text style={styles.titleAccueil}>Dernieres Blagues</Text>
            </View>
            <FlatList  showsHorizontalScrollIndicator={false} horizontal={true}
                data={LastJokes}
                renderItem={HorizontalListJokeComponent}
                keyExtractor={(item: Joke) => item.summary()}
            />
            <View style={styles.categories}>
                <Text style={styles.titleAccueil} >Top Categories</Text>
                <Image source={require("../assets/fire_icon.png")}/>
            </View>
            <FlatList showsHorizontalScrollIndicator={false} horizontal={true}
                      data={FiltereData}
                      renderItem={ListAllCategories}
                      keyExtractor={(item) => item.toString()}
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
    backgroundColor: purpleColor,

},
top: {
    backgroundColor : indigo,
},

imgStyle: {
    alignSelf: 'center',
    margin: 5,
},
titleAccueil: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    margin: 10,
},
categories: {
    flexDirection: 'row',
    alignItems: 'center',
}


});
