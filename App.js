import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {View,StyleSheet,Text, ImageBackground} from 'react-native';
import SplashScreen from './src/screens/splash';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './src/screens/signin';
import SignUpScreen from './src/screens/SignUp';
const Stack=createNativeStackNavigator();


const App = () => {
  return (
  <>
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={'Splash'} 
      component={SplashScreen}
      options={{headerShown:true}}
      />
      <Stack.Screen name={'SignIn'} 
      component={SignIn}
      options={{headerShown:true}}
      />
      <Stack.Screen name={'SignUpScreen'} 
      component={SignUpScreen}
      options={{headerShown:true}}
      />
    </Stack.Navigator>
  </NavigationContainer>
    </>
    
    );
};

const styles = StyleSheet.create({});

export default App;
