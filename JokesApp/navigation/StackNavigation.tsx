import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {AccueilScreen} from "../screens/AccueilScreen";
import {JokeListItems} from "../components/ListeJokeComponent";
import {DetailJoke} from "../components/DetailJoke";
import JokeDetailScreen from "../screens/JokeDetailScreen";
import {ListJokeScreen} from "../screens/ListJokeScreen";

export default function StackNavigation() {

    const Stack = createStackNavigator();
    return(
        <Stack.Navigator initialRouteName="CatalogueStack">
                <Stack.Screen name="CatalogueStack" component={ListJokeScreen}/>
                <Stack.Screen name="JokeDetail" component={JokeDetailScreen}/>
        </Stack.Navigator>
    )
}