import React from "react";
import { StyleSheet, Dimensions } from 'react-native';



const {width: screenWidth, height: screenHeight} = Dimensions.get("window");


export const styles = StyleSheet.create({
    safeAreaStyle:{
    flex: 1,
    backgroundColor: '#585858ff',
    alignItems: 'center',
    justifyContent: 'center'
    },

    centerBox:{
        borderColor: '#ffffffc7',
        borderWidth: 2,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        height: screenHeight*0.33,
        width: screenWidth*0.85
    },

    methodButts:{
        width: '95%',
        height: 100,
        marginTop: 10,
        backgroundColor: '#fffffff1',
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttText:{
        fontSize: 18,
        tintColor: '#000000e1'
    }
})