import { StyleSheet, Text, TouchableOpacity, View, TextInput, KeyboardAvoidingView, ScrollView, Platform} from 'react-native';
import { SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Navigation';
import { styles } from './Login_page_style'

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

