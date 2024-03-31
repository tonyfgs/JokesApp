import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {AccueilScreen} from "../screens/AccueilScreen";
import {JokeListItems} from "../components/ListeJokeComponent";
import {DetailJoke} from "../components/DetailJoke";
import JokeDetailScreen from "../screens/JokeDetailScreen";
import {ListJokeScreen} from "../screens/ListJokeScreen";
import {darksalmonColor, indigo, purpleColor} from "../Theme";
import {ListFavoriteJokeScreen} from "../screens/ListFavoriteJokeScreen";


export function CatalogueScreen(){
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
)}

export function FavoriteScreen(){
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator initialRouteName="FavoriteStack" screenOptions={
            {
                headerTitleStyle: {
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: darksalmonColor,

                },
                headerStyle: {
                    backgroundColor: indigo,

                },
                headerTitle : "Favoris",
                headerBackTitleVisible: false,
                headerTintColor: darksalmonColor,
            }

        }>
            <Stack.Screen name="FavoriteStack" component={ListFavoriteJokeScreen} options={{ headerTitle: 'Favoris' }}/>
            <Stack.Screen name="JokeDetail" component={JokeDetailScreen} options={{ headerTitle: 'Detail d une blague' }
            } />
        </Stack.Navigator>
    )
}