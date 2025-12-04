import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from './CheckIn_page_style';


export default function CheckInPage(){
    return(
        <SafeAreaProvider>
            <SafeAreaView
            style = {styles.safeAreaStyle}>
                <View
                style = {styles.centerBox}>

                    <TouchableOpacity
                    style = {styles.methodButts}>
                        <Text style={styles.buttText}>NFC</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style = {styles.methodButts}>
                        <Text style={styles.buttText}>Wi-Fi</Text>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}