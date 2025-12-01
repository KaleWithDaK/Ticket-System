import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomePage from "./Screens/HomeScreen/Home_page";
import LoginPage from "./Screens/LoginScreen/Login_page";


export type RootStackParamList = {
  loginPage: undefined;
  homePage: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();


const AppNav = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='loginPage' component={LoginPage} options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name='homePage' component={HomePage} options={{headerShown: false}}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
)

export default AppNav;



