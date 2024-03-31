import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {darksalmonColor, greyColor, indigo, purpleColor, whiteColor} from "../Theme";
import React, {useState} from "react";
import {SampleJoke} from "../model/SampleJoke";
import {Joke} from "../model/Joke";
import {CustomJoke} from "../model/CustomJoke";
import {removeFavoriteJoke, storeFavoriteJoke, useAppDispatch, useAppSelector} from "../redux/store";

type DetailJokeProps = {
    item: CustomJoke;
}


export function DetailJoke(props: DetailJokeProps) {

    const favoriteJokes = useAppSelector(state => state.customReducer.favoriteJokes) as [CustomJoke, SampleJoke];
    const dispatch = useAppDispatch();
    const isFav : boolean = favoriteJokes.some(it => it.id == props.item.id )
    console.log("Is fav"+isFav)
    const [isActivated, setIsActivated] = useState(isFav);
    const [isActivated2, setIsActivated2] = useState(false);

    function toggleActivation() {
        setIsActivated(!isActivated);
        if (isActivated) {
            console.log("Joke retirée des favoris");
            dispatch(removeFavoriteJoke(props.item));
        }
        else {
            dispatch(storeFavoriteJoke(props.item));
            console.log("Joke ajoutée aux favoris");
        }
    }




    function toggleActivation2() {
        setIsActivated2(!isActivated2);
    }

    return (
        <View style={styles.listItem}>
            <Image style={styles.imageSettings} source={{
                uri: props.item.image}}/>
            <View style={styles.chip}>
                <Text >Type : {props.item.type}</Text>
            </View>
            <View style={styles.contentList}>
                <Text style={styles.contentSummary}>{props.item.description}</Text>
            </View >
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button1} onPress={toggleActivation}>
                    <Image source={isActivated ? require('../assets/plain_favorite_icon.png') : require('../assets/favorite_icon.png')} style={styles.img1}  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2}  onPress={toggleActivation2}>
                    <Image source={isActivated2 ? require('../assets/eye_icon.png') : require('../assets/eye_off_icon.png')} style={styles.img2} />
                    <Text style={styles.bt2text}>LA CHUTE</Text>
                </TouchableOpacity>
            </View>
            {isActivated2 ? <Text style={styles.contentSummary}>{props.item.punchline}</Text> : null}
        </View>
    )
}


const styles = StyleSheet.create({

    titleResume: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 20,
        color: whiteColor,
    },
    listItem: {
        flexDirection: 'column',
        margin: 10,
        height : '80%',
        borderRadius: 20,
        borderColor: whiteColor,
        backgroundColor : indigo,
        borderWidth: 1,
    },
    imageSettings: {
        flex: 1,
        width: '85%',
        height: 100,
        margin :30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentList :{
        margin: 10,
    },
    chip: {
        borderRadius: 16,
        backgroundColor: whiteColor,
        padding: 5,
        margin: 5,
        marginLeft: 30,
        alignSelf: 'flex-start',
    },
    contentSummary: {
        color: greyColor,
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'left',
        margin: 10,
        marginLeft: 20,

    },
    buttons:
    {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginBottom: 20,
    },
    button1:{
        marginRight: 20,
        borderRadius: 10,
        width: 100,
        height: 50,
        alignItems: "center",
        borderColor: '#ffffff',
        borderWidth: 1
    },
    button2:{
        flexDirection: "row",
        justifyContent: "center",
        marginRight: 30,
        borderRadius: 10,
        width: 140,
        height: 50,
        alignItems: "center",
        borderColor: whiteColor,
        borderWidth: 1,
        backgroundColor: darksalmonColor,
    },

    img1:{
        justifyContent: "center",
        tintColor: darksalmonColor,
        alignItems: "center",
        marginTop: 2,
    },


    img2: {
        tintColor: whiteColor,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginRight: 10,
    },
    bt2text: {
        fontSize: 16,
        color: whiteColor,
        textAlign: 'center',
        fontWeight: 'bold',
    },

});

