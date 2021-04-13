import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './home'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RegisterScreen from './register-screen';
import PasswordScreen from './password-screen';
import OtpScreen from './otp-screen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Home' }}
          />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: 'Register' }}
        />
        <Stack.Screen
          name="Password"
          component={PasswordScreen}
          options= {{title: 'Enter Password'}} />
        <Stack.Screen
          name="OtpScreen"
          component={OtpScreen}
          options={{ title: 'Enter OTP' }} />
    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
