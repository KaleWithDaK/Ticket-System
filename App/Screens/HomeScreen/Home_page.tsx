import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Navigation';

type HomeScreenProp = NativeStackNavigationProp<RootStackParamList, 'loginPage'>;

export default function HomePage(){

     const navigation = useNavigation<HomeScreenProp>();
    
     const logout = () => navigation.navigate("loginPage");

    return (
        <SafeAreaProvider>
            <SafeAreaView
            style={styles.safeAreaStyle}>
                <View
                 style={styles.logoutBar}>
                    <TouchableOpacity
                    onPressOut={logout}
                    style={styles.logoutButt}>
                        <Image
                        style={{width: 40, height: 40, tintColor: '#000000b4'}}
                        source={require('../../../assets/logout_icon.webp')}/>
                    </TouchableOpacity>
                </View>
                <View 
                style={styles.buttsBar}>
                    <TouchableOpacity 
                    style={styles.clockInButt}>
                        <Text style={styles.textInButt}>Clock-In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.clockOutButt}>
                        <Text style={styles.textInButt}>Clock-Out</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.statsButt}>
                        <Text style={styles.textInButt}>Stats</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    safeAreaStyle:{
    flex: 1,
    backgroundColor: '#585858ff',
    flexDirection: 'column'
    },
    
    logoutBar:{
        height: 60,
        alignItems: 'flex-end',
        width: 'auto',
        backgroundColor: '#ffffffc0',
        borderBottomEndRadius: 8,
        borderBottomLeftRadius: 8
    },

    buttsBar:{
        flex: 1,
        width: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },

    clockInButt:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#13a100e0',
        width: '90%',
        height: 150,
        borderRadius: 20,
        margin: 20
    },

    clockOutButt:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#a10000e0',
        width: '90%',
        height: 150,
        borderRadius: 20
    },

    statsButt:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0082fcd3',
        width: '90%',
        height: 150,
        borderRadius: 20,
        margin: 20
    },

    textInButt:{
        fontSize: 20,
        color: '#ffffffc9'
    },

    logoutButt:{
        marginEnd: 10,
        marginTop: 10,
    }

});
   
