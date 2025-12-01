import React from "react";
import { StyleSheet } from 'react-native';

export const darkStyles = StyleSheet.create({
    safeAreaStyle:{
    flex: 1,
    backgroundColor: '#585858ff',
    flexDirection: 'column'
    },
    
    logoutBar:{
        height: 60,
        width: 'auto',
        flexDirection: 'row',
        backgroundColor: '#ffffffc0',
        borderBottomEndRadius: 8,
        borderBottomLeftRadius: 8,
        justifyContent: 'space-between'
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
    },

    ButtImage:{
        width: 40, 
        height: 40,
        tintColor: '#000000b4'
    },

    themeButt:{
        marginStart: 10,
        marginTop: 10,
    }
})

export const lightStyles = StyleSheet.create({
    safeAreaStyle:{
    flex: 1,
    backgroundColor: '#ffffffe5',
    flexDirection: 'column'
    },
    
    logoutBar:{
        height: 60,
        width: 'auto',
        flexDirection: 'row',
        backgroundColor: '#000000c0',
        borderBottomEndRadius: 8,
        justifyContent: 'space-between',
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
    },

    ButtImage:{
        width: 40, 
        height: 40,
        tintColor: '#ffffffb4'
    },

    themeButt:{
        marginStart: 10,
        marginTop: 10,
    }
})
