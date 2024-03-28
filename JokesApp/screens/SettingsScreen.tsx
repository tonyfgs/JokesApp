import React, {useContext, useEffect, useState} from "react";

import {
    Appearance,
    Button,
    FlatList,
    Image,
    SafeAreaView,
    ScrollView,
    SectionListComponent,
    StyleSheet, Switch, SwitchComponent,
    Text, useColorScheme,
    View
} from "react-native";
import usePersonalTheme, {
    blackColor,
    darksalmonColor,
    greyColor,
    indigo,
    purpleColor,
    whiteColor
} from "../Theme";
import {isEnabled} from "react-native/Libraries/Performance/Systrace";
import {DarkTheme, DefaultTheme, useTheme} from "@react-navigation/native";
import {storeTheme} from "../redux/store";



export function SettingsScreen() {

    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled(previousState => {
            const newIsEnabled = !previousState;
            const newTheme = newIsEnabled ? DarkTheme : DefaultTheme;
            console.log("newTheme", newTheme);
            storeTheme(newTheme);
            return newIsEnabled;
        });
    };

    const styles = themeSettings();

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Réglages</Text>
            <View style={styles.settingsContainer}>
                <View style={styles.settingRow}>
                    <View style={styles.settingRow}>
                        <Image style={styles.img} source={require('../assets/darkmode_icon.png')}/>
                        <Text style={styles.settingText}>Dark Mode</Text>
                    </View>
                     <Switch style={styles.switch}
                        trackColor={{ false: whiteColor, true: darksalmonColor }}
                        thumbColor={isEnabled ? whiteColor :darksalmonColor}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};


export function themeSettings() {
    const theme = useTheme();

    const colors = theme.colors;
    console.log("themeSettings", colors)

    const styles = StyleSheet.create({

        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
        header: {
            padding: 16,
            alignItems: 'center',
        },
        headerText: {
            color: whiteColor,
            fontSize: 18,
        },
        settingsContainer: {
            backgroundColor: indigo,
            margin: 16,
        },
        title: {
            color: whiteColor,
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 7,
            marginLeft: 15,
            marginBottom: 8,
        },
        settingRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 12,

        },
        settingText: {
            color: whiteColor,
            marginLeft: 10,
        },
        img: {
            marginLeft: 10,
            width: 30,
            height: 30,
            tintColor: darksalmonColor,
        },
        switch: {
            marginRight: 10,
        }
    });

    return styles;

}


