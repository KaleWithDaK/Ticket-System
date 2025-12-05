import React from "react";
import { styles } from './CheckOut_page_style';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function CheckOutPage(){
    return(
        <SafeAreaProvider>
            <SafeAreaView
            style = {styles.safeAreaStyle}>

            </SafeAreaView>
        </SafeAreaProvider>
    )
}