import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {AccueilScreen} from "../screens/AccueilScreen";
import {JokeListItems} from "../components/ListeJokeComponent";
import {DetailJoke} from "../components/DetailJoke";
import JokeDetailScreen from "../screens/JokeDetailScreen";
import {ListJokeScreen} from "../screens/ListJokeScreen";
import {darksalmonColor, indigo, purpleColor} from "../Theme";

export default function StackNavigation() {

    const Stack = createStackNavigator();
    return(
        <Stack.Navigator initialRouteName="CatalogueStack" screenOptions={
            {
                headerTitleStyle: {
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: darksalmonColor,

                },
                headerStyle: {
                    backgroundColor: indigo,

                },
                headerTitle : "Catalogue",
                headerBackTitleVisible: false,
                headerTintColor: darksalmonColor,
            }

        }>
                <Stack.Screen name="CatalogueStack" component={ListJokeScreen} options={{ headerTitle: 'Catalogue' }}/>
                <Stack.Screen name="JokeDetail" component={JokeDetailScreen} options={{ headerTitle: 'Detail d une blague' }
                } />
        </Stack.Navigator>
    )
}