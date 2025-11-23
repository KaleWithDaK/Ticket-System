import { StyleSheet, Text, TouchableOpacity, View, TextInput, KeyboardAvoidingView, ScrollView, Platform} from 'react-native';
import { SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Navigation';

type LoginScreenProp = NativeStackNavigationProp<RootStackParamList, 'loginPage'>;

export default function LoginPage() {

  const navigation = useNavigation<LoginScreenProp>();

  const login = () => navigation.navigate("homePage");

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>  
        <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'height' : 'padding'}>

          <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
          centerContent={true}
          >

        <TextInput
        style={styles.emailField}
        placeholder='Enter e-mail'
        placeholderTextColor={'#ffffff9c'}
        inputMode='email'></TextInput>


        <TextInput
        style={styles.emailField}
        placeholder='Enter password'
        placeholderTextColor={'#ffffff9c'}
        secureTextEntry={true}
        ></TextInput>
        
        <TouchableOpacity 
        onPressOut={login}
        style={styles.loginButt}> 

          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
                </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
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

});

