import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";


export default function HomePage(){
    return (
        <SafeAreaProvider>
            <SafeAreaView
            style={styles.safeAreaStyle}>
                
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    safeAreaStyle:{
    flex: 1,
    backgroundColor: '#585858ff'
    }
});
   
