import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Navigation';
import { darkStyles , lightStyles } from './Home_page_style'

type HomeScreenProp = NativeStackNavigationProp<RootStackParamList, 'loginPage'>;


export default function HomePage(){

     const navigation = useNavigation<HomeScreenProp>();
    
     const logout = () => navigation.pop();

     const [isLight, setIsLight] = useState(false);

     const switchTheme = () => {
        setIsLight(prev => !prev);
     };


     const theme = isLight ? lightStyles : darkStyles;
     const icon = isLight ? require("../../../assets/sun_icon.png") : require("../../../assets/moon_icon.png");

    return (
        <SafeAreaProvider>
            <SafeAreaView
            style={darkStyles.safeAreaStyle}>
                <View
                 style={theme.logoutBar}>
                    <TouchableOpacity
                    onPressOut={switchTheme}
                    style={theme.themeButt}>
                        <Image
                        style={theme.ButtImage}
                        source={icon}>
                        
                        </Image>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPressOut={logout}
                    style={theme.logoutButt}>
                        <Image
                        style={theme.ButtImage}
                        source={require("../../../assets/logout_icon.png")}/>
                    </TouchableOpacity>
                </View>
                <View 
                style={theme.buttsBar}>
                    <TouchableOpacity 
                    style={theme.clockInButt}>
                        <Text style={theme.textInButt}>Clock-In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={theme.clockOutButt}>
                        <Text style={theme.textInButt}>Clock-Out</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={theme.statsButt}>
                        <Text style={theme.textInButt}>Stats</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}