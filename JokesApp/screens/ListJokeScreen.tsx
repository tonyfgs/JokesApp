import {FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from "react-native";
import React, {useEffect, useState} from "react";
import {JokeListItems} from "../components/ListeJokeComponent";
import {darksalmonColor, indigo, purpleColor, whiteColor} from "../Theme";
import {CustomJoke} from "../model/CustomJoke";
import {useDispatch, useSelector} from 'react-redux';
import {getSampleJoke, setSample} from "../redux/actions/sampleAction";
import {getJokesCustoms} from "../redux/actions/customAction";

export function ListJokeScreen({route, navigation}) {
    const [isActivated2, setIsActivated2] = useState(false);
    function toggleActivation2() {
        setIsActivated2(!isActivated2);
        getCustoms();
    }

    const DataGen = useSelector((state: any) => state.sampleReducer.sampleJoke);
    const DataCustomsJoke = useSelector((state : any) => state.customReducer.customJokes)
    const dispatch = useDispatch();
    useEffect(() => {
        const getJokes = async () => {
            // @ts-ignore
            await dispatch(getSampleJoke());
        };
        getJokes();
    }, [dispatch]);
    const getCustoms = async () => {
        // @ts-ignore
        await dispatch(getJokesCustoms());
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Afficher les exemples</Text>
                <TouchableOpacity style={styles.button2}  onPress={toggleActivation2}>
                    <Image source={isActivated2 ? require('../assets/eye_icon.png') : require('../assets/eye_off_icon.png')} style={styles.img2} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={isActivated2 ? DataCustomsJoke : DataGen}
                renderItem={({ item }) => (
                    <TouchableHighlight onPress={() => navigation.navigate("JokeDetail", {"joke" : item.id})}>
                        <JokeListItems item={item}/>
                    </TouchableHighlight>
                )}
                keyExtractor={(item:  CustomJoke) => item.id.toString()}
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
        backgroundColor: purpleColor    ,

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