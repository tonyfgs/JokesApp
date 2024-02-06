import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {ListJokeScreen} from "../screens/ListJokeScreen";
import {Image, StyleSheet, View} from "react-native";
import {darksalmonColor, greyColor, indigo, purpleColor} from "../Theme";
const homeIcon = require("../assets/home_icon.png");
const listIcon = require("../assets/list_icon.png");
const addIcon = require("../assets/add_icon.png");
const favIcon = require("../assets/favorite_icon.png");
const setIcon = require("../assets/settings_icon.png");


export function Navigation(){
    const BottomTabNavigator = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator initialRouteName="Home" screenOptions={{
                headerTitleStyle: {
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: darksalmonColor,
                },
                headerStyle: {
                    backgroundColor: indigo,
                },
                tabBarShowLabel: false,
                tabBarStyle: styles.top,
            }}  >
                <BottomTabNavigator.Screen name="Accueil" component={ListJokeScreen}
                                           options={{
                                               tabBarIcon: ({focused}) => (
                                                   <Image
                                                       source={homeIcon}
                                                       style={{ tintColor: focused ? darksalmonColor : purpleColor }}
                                                   />
                                               )
                                           }}/>
                <BottomTabNavigator.Screen name="Catalogue" component={ListJokeScreen}
                                           options={{
                                               tabBarIcon: ({focused}) => (
                                                   <Image source={listIcon}
                                                          style={{ tintColor: focused ? darksalmonColor : purpleColor }}
                                                   />
                                               )
                                           }}/>
                <BottomTabNavigator.Screen name="Ajouter" component={ListJokeScreen}
                                           options={{
                                               tabBarShowLabel: false,
                                               tabBarIcon: ({focused}) => (
                                                   <View style={styles.addJoke}>
                                                       <Image source={addIcon}
                                                              style={{ tintColor: focused ? darksalmonColor : purpleColor }}
                                                       />
                                                   </View>
                                               )
                                           }}/>

                <BottomTabNavigator.Screen name="Favoris" component={ListJokeScreen}
                                           options={{
                                               tabBarIcon: ({focused}) => (
                                                   <Image source={favIcon}
                                                          style={{ tintColor: focused ? darksalmonColor : purpleColor }}
                                                   />
                                               )
                                           }}/>
                <BottomTabNavigator.Screen name="Paramètres" component={ListJokeScreen}
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
        backgroundColor : "rgba(14, 14, 44, 1)"
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
