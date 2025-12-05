import React from "react";
import { styles } from './Stats_page_style';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function StatsPage(){
    return(
        <SafeAreaProvider>
            <SafeAreaView
            style = {styles.safeAreaStyle}>

            </SafeAreaView>
        </SafeAreaProvider>
    )
}