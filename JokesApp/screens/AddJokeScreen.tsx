import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { darksalmonColor, indigo, purpleColor, whiteColor } from "../Theme";
import { useDispatch, useSelector } from "react-redux";
import { postJoke} from "../redux/actions/customAction";

export function AddJokeScreen() {
    const [joke, setJoke] = useState("");
    const [jokeFall, setJokeFall] = useState("");
    const [category, setCategory] = useState("");
    const [categoryExceeded, setCategoryExceeded] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const MAX_CATEGORY_LENGTH = 10;
    const dispatch = useDispatch();

    useEffect(() => {
        if (joke !== "" && jokeFall !== "" && category !== "") {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [joke, jokeFall, category]);
    const postjoke = async () => {
        // @ts-ignore
        await dispatch(postJoke(joke, jokeFall, category));
        clearFields();
    };

    const clearFields = () => {
        setJoke("");
        setJokeFall("");
        setCategory("");
        setCategoryExceeded(false);
        setButtonDisabled(true);
    };

    const handleCategoryChange = (text) => {
        if (text.length > MAX_CATEGORY_LENGTH) {
            setCategoryExceeded(true);
        } else {
            setCategoryExceeded(false);
            setCategory(text);
        }
    };

    return (
        <View style={styles.font}>
            <Text style={styles.titleTextInput}>Blague</Text>
            <TextInput
                editable
                multiline
                style={styles.textInput}
                value={joke}
                onChangeText={(text) => setJoke(text)}
            />

            <Text style={styles.titleTextInput}>Chute de la blague</Text>
            <TextInput
                editable
                multiline
                style={styles.textInput}
                value={jokeFall}
                onChangeText={(text) => setJokeFall(text)}
            />

            <Text style={styles.titleTextInput}>Catégorie</Text>
            <TextInput
                editable
                multiline
                style={styles.textInput1}
                value={category}
                onChangeText={handleCategoryChange}
            ></TextInput>
            <View style={styles.characterCountContainer}>
                <Text style={styles.characterCountText}>
                    {category.length}/{MAX_CATEGORY_LENGTH}
                </Text>
            </View>

            <TouchableOpacity
                style={[styles.viewButtonCreate, { opacity: buttonDisabled ? 0.5 : 1 }]}
                disabled={buttonDisabled} // Désactiver le bouton si buttonDisabled est vrai
                onPress={postjoke}
            >
                <Text style={styles.textButton1}>CRÉER</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewButtonClear} onPress={clearFields}>
                <Text style={styles.textButton2}>EFFACER</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    font: {
        backgroundColor: purpleColor,
        width: "100%",
        height: "100%",
    },
    titleTextInput: {
        fontSize: 20,
        color: whiteColor,
        textAlign: "left",
        fontWeight: "bold",
        marginTop: 25,
        marginVertical: 10,
        marginLeft: 10,
    },
    textInput: {
        backgroundColor: indigo,
        height: "13%",
        color: whiteColor,
        textAlign: "left",
        textAlignVertical: "top",
        margin: 10,
        padding: 30,
        paddingTop: 15,
    },
    textInput1: {
        backgroundColor: indigo,
        height: "9%",
        color: whiteColor,
        textAlign: "left",
        textAlignVertical: "top",
        margin: 10,
        padding: 20,
        paddingTop: 10,
        fontSize: 12,
    },
    viewButtonCreate: {
        backgroundColor: darksalmonColor,
        height: "7%",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        borderRadius: 10,
    },
    viewButtonClear: {
        backgroundColor: whiteColor,
        height: "7%",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        borderRadius: 10,
    },
    textButton1: {
        fontSize: 16,
        color: whiteColor,
        alignSelf: "center",
        padding: 12,
        fontWeight: "bold",
    },
    textButton2: {
        fontSize: 16,
        color: darksalmonColor,
        alignSelf: "center",
        padding: 12,
        fontWeight: "bold",
    },
    characterCountContainer: {
        alignItems: 'flex-end',
        bottom: 10,
        right: 10,
    },
    characterCountText: {
        fontSize: 12,
        color: whiteColor,
    },
});
