import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaViewBase} from 'react-native';
import { SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>

      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
       
      </View>
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#466339ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
