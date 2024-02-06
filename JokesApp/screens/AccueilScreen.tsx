import {FlatList, Image, SafeAreaView, ScrollView, SectionListComponent, StyleSheet, Text, View} from "react-native";
import {indigo, purpleColor} from "../Theme";
import {JokeListItems} from "../components/ListeJokeComponent";
import {Joke} from "../model/Joke";
import {JokeFactory} from "../model/JokeFactory";
import {JokeStub} from "../model/JokeStub";
import {ListJokeScreen} from "./ListJokeScreen";
import React from "react";
import {HorizontalListJokeComponent} from "../components/HorizontalListJokeComponent";
import {ListAllCategories} from "../components/ListAllCategories";

const DATACUSTOM = JokeFactory.createCustomJokes(JokeStub.customJokes)
const DATASAMPLE = JokeFactory.createSampleJokes(JokeStub.sampleJokes)

//@ts-ignore
let DataGen = DATACUSTOM.concat(DATASAMPLE);
let FilterData = DataGen.filter((joke) => joke.type() !== joke.type() )
export function AccueilScreen() {
    return (
        <SafeAreaView style={styles.container}>

            <View>
                <Image source={require('../assets/logo.png')} style={styles.imgStyle}/>
                <Text style={styles.title}>Chat C'est Drôle</Text>
                <Text style={styles.titleAccueil}>Dernieres Blagues</Text>
            </View>
            <FlatList showsHorizontalScrollIndicator={false} horizontal={true}
                data={DataGen}
                renderItem={HorizontalListJokeComponent}
                keyExtractor={(item: Joke) => item.summary()}
            />
            <View style={styles.categories}>
                <Text style={styles.titleAccueil} >Top Categories</Text>
                <Image source={require("../assets/fire_icon.png")}/>
            </View>
            <FlatList showsHorizontalScrollIndicator={false} horizontal={true}
                      data={FilterData}
                      renderItem={ListAllCategories}
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
