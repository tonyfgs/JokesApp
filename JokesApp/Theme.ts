import {DarkTheme, Theme, useTheme} from "@react-navigation/native";
import React, {useEffect, useState} from "react";
import DefaultTheme from "@react-navigation/native/src/theming/DefaultTheme";
import {useColorScheme} from "react-native";

export const indigo = "rgba(14, 14, 44, 1)";
export const purpleColor = "rgba(74, 74, 104, 1)";
export const darksalmonColor = "rgba(233, 150, 122, 1)";
export const greyColor = "rgba(140, 140, 161, 1)";
export const whiteColor = "rgba(239, 239, 253, 1)";

export const blackColor = "rgba(0, 0, 0, 1)";


export default function usePersonalTheme() {


    useTheme()
    const theme = React.useContext(ThemeContext);
    const [isDark, setIsDark] = useState(false);

    if (isDark) {
        theme.dark = true;
        theme.colors = MyDarkTheme.colors;
    }
    else {
        theme.dark = false;
        theme.colors = MyLightTheme.colors;
    }







    return theme;
}



//const isDark = false;


const MyDarkTheme: Theme = {
    dark: true,
    colors: {
        primary: indigo,
        background: purpleColor,
        card: darksalmonColor,
        text: whiteColor,
        border: whiteColor,
        notification: whiteColor,
    },
};

const MyLightTheme: Theme = {
    dark: false,
    colors: {
        primary: whiteColor,
        background: greyColor,
        card: '',
        text: blackColor,
        border: blackColor,
        notification:  blackColor,
    },
};


const ThemeContext = React.createContext<Theme>(MyDarkTheme);





