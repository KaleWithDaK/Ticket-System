import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View} from 'react-native';
import { SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>  
        
        <Pressable 
        onPressOut={() => console.log("LOGIN pressed")}
        style={styles.loginButt}> 

          <Text></Text>
        </Pressable>
    
      </SafeAreaView>
      
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#466339ff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  loginButt:{
  backgroundColor: "#0300b8ff",
  borderRadius: 8,
  padding: 20,
  },

  loginText:{
    color: 'white',
    fontWeight:'bold',

  }

});

