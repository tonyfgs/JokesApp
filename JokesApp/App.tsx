import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {JokeStub} from "./model/JokeStub";
import {JokeFactory} from "./model/JokeFactory";
import {loadExtensions} from "./extensions";
loadExtensions();

export default function App() {

    // La JokeFactory permet de transformer les blagues json en tableau de blague SampleJoke ou CustomJoke afin de pouvoir les afficher
    let customJokes = JokeFactory.createCustomJokes(JokeStub.customJokes);
    let samplesJokes = JokeFactory.createSampleJokes(JokeStub.sampleJokes);

    return (
        <View style={styles.container}>
            <Text>CustomJokes</Text>
            <Text>{customJokes.displayJoke()}</Text>
            <Text>SamplesJokes</Text>
            <Text>{samplesJokes.displayJoke()}</Text>

            <StatusBar style="auto"/>
        </View>
    );
}

// Styles pour le composant
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

