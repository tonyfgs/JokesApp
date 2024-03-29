import React, {useContext, useEffect, useState} from "react";
import {DarkTheme, DefaultTheme, NavigationContainer, Theme, useTheme} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {ListJokeScreen} from "../screens/ListJokeScreen";
import {Image, StyleSheet, useColorScheme, View} from "react-native";
import usePersonalTheme, {darksalmonColor, greyColor, indigo, purpleColor} from "../Theme";
import {AccueilScreen} from "../screens/AccueilScreen";
import {AddJokeScreen} from "../screens/AddJokeScreen";
import {SettingsScreen} from "../screens/SettingsScreen";
import {JokeListItems} from "../components/ListeJokeComponent";
import StackNavigation from "./StackNavigation";
const homeIcon = require("../assets/home_icon.png");
const listIcon = require("../assets/list_icon.png");
const addIcon = require("../assets/add_icon.png");
const favIcon = require("../assets/favorite_icon.png");
const setIcon = require("../assets/settings_icon.png");
import store, {getTheme, storeTheme} from "../redux/store";
import {ListFavoriteJokeScreen} from "../screens/ListFavoriteJokeScreen";


export function Navigation(){
    const BottomTabNavigator = createBottomTabNavigator();

    const [themes, setThemes] = useState<Theme>(DefaultTheme);

    useEffect(() => {
        const fetchTheme = async () => {
            const theme = await getTheme();
            setThemes(theme);
        };

        fetchTheme();
    });

    if (themes == null) {
        return null;
    }
    return (
        <NavigationContainer  theme={ themes.dark === false ? DefaultTheme :  DarkTheme} >
            <BottomTabNavigator.Navigator initialRouteName="Home"  screenOptions={{
                headerTitleStyle: {
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: themes.colors.text,
                },
                headerStyle: {
                    backgroundColor: indigo,
                },
                tabBarShowLabel: false,
                tabBarStyle: styles.top,
            }}>
                <BottomTabNavigator.Screen name="Accueil" component={AccueilScreen}
                                           options={{
                                               tabBarIcon: ({focused}) => (
                                                   <Image
                                                       source={homeIcon}
                                                       style={{ tintColor: focused ? darksalmonColor : purpleColor }}
                                                   />
                                               )
                                           }}/>
                <BottomTabNavigator.Screen name="Catalogue" component={StackNavigation}
                                           options={{
                                               tabBarIcon: ({focused}) => (
                                                   <Image source={listIcon}
                                                          style={{ tintColor: focused ? darksalmonColor : purpleColor }}
                                                   />
                                               ),
                                               headerShown: false,
                                           }}/>
                <BottomTabNavigator.Screen name="Ajouter" component={AddJokeScreen}
                                           options={{
                                               tabBarIcon: ({focused}) => (
                                                   <View style={styles.addJoke}>
                                                       <Image source={addIcon}
                                                              style={{ tintColor: focused ? darksalmonColor : purpleColor }}
                                                       />
                                                   </View>
                                               ),

                                           }}/>

                <BottomTabNavigator.Screen name="Favoris" component={ListFavoriteJokeScreen}
                                           options={{
                                               tabBarIcon: ({focused}) => (
                                                   <Image source={favIcon}
                                                          style={{ tintColor: focused ? darksalmonColor : purpleColor }}
                                                   />
                                               )
                                           }}/>
                <BottomTabNavigator.Screen name="Paramètres" component={SettingsScreen}
                                           options={{
                                               tabBarIcon: ({focused}) => (
                                                   <Image source={setIcon}
                                                          style={{ tintColor: focused ? darksalmonColor : purpleColor }}
                                                   />
                                               )
                                           }}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({

    title: {
        fontSize: 24,
        color: 'darksalmon',
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: 20,
    },
    top: {
        backgroundColor : indigo
    },
    addJoke: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: greyColor,
        width: '70%',
        height: '100%',
        borderRadius: 4,
        marginTop: 4,
    },


});


const stylesDark = StyleSheet.create({

    title: {
        fontSize: 24,
        color: 'darksalmon',
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: 20,
    },
    top: {
        backgroundColor : indigo
    },
    addJoke: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: greyColor,
        width: '70%',
        height: '100%',
        borderRadius: 4,
        marginTop: 4,
    },


});
