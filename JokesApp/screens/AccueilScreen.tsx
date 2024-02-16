import {FlatList, Image, SafeAreaView, ScrollView, SectionListComponent, StyleSheet, Text, View} from "react-native";
import {indigo, purpleColor} from "../Theme";
import {Joke} from "../model/Joke";
import React, {useEffect} from "react";
import {HorizontalListJokeComponent} from "../components/HorizontalListJokeComponent";
import {ListAllCategories} from "../components/ListAllCategories";
import {CustomJoke} from "../model/CustomJoke";
import {JokeFactory} from "../model/JokeFactory";
import {JokeStub} from "../model/JokeStub";
import {useDispatch, useSelector} from "react-redux";
import {getLatestJokes, getSampleJoke, setRecentJokes, setSample} from "../redux/actions/sampleAction";
import {getCategorie, setCategories} from "../redux/actions/categoriesAction";
import {Categorie} from "../model/Categorie";


export function AccueilScreen() {

    const DataGen = useSelector((state: any) => state.sampleReducer.recentJokes);
    const DataCate = useSelector((state: any) => state.categorieReducer.categories);
    const dispatch = useDispatch();
    useEffect(() => {

        const getJokes = async () => {
            dispatch(setRecentJokes(await getLatestJokes()));
        };
        getJokes();

        const getTopCategories = async () => {
            dispatch(setCategories(await getCategorie()));
        };
        getTopCategories();
    }, [dispatch]);

    return (
        <SafeAreaView style={styles.container}>

            <View>
                <Image source={require('../assets/logo.png')} style={styles.imgStyle}/>
                <Text style={styles.title}>Chat C'est Drôle</Text>
                <Text style={styles.titleAccueil}>Dernieres Blagues</Text>
            </View>
            <FlatList  showsHorizontalScrollIndicator={false} horizontal={true}
                data={DataGen}
                renderItem={HorizontalListJokeComponent}
                keyExtractor={(item: CustomJoke) => item.id.toString()}
            />
            <View style={styles.categories}>
                <Text style={styles.titleAccueil} >Top Categories</Text>
                <Image source={require("../assets/fire_icon.png")}/>
            </View>
            <FlatList showsHorizontalScrollIndicator={false} horizontal={true}
                      data={DataCate}
                      renderItem={ListAllCategories}
                      keyExtractor={(item : Categorie) => item.name}/>
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