import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
     container:{
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },

  safeArea: {
    flex: 1,
    backgroundColor: '#585858ff'
  },

  loginButt:{
  backgroundColor: "#5956ffff",
  borderRadius: 20,
  paddingHorizontal: 100,
  paddingVertical: 15,
  alignItems: 'center',
  marginTop: 50
  },
  
  loginText:{
    color: 'white',
    fontWeight:'bold',
    fontSize: 20
  },

  emailField: {
    alignContent: 'flex-start',
    height: 60,
    margin: 12,
    width: 300,
    borderWidth: 2,
    borderColor: '#ffffffbe',
    color: '#fff',
    fontWeight: '600',
    borderRadius: 8,
    paddingLeft: 15
  }

})