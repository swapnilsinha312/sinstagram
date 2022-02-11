import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/Screens/HomeScreen';
import NewPostScreen from './components/Screens/NewPostScreen';
import LoginScreen from './components/Screens/LoginScreen';
import SignupScreen from './components/Screens/SignupScreen';
import Creator from './components/Screens/Creator';

const Stack=createStackNavigator()

const screenOptions={
    headerShown:false,
    backgroundColor: 'black',
}
const theme={
    colors:{
        background:'black'
    }
}

// function Navigation() {
//   return (
//     <SignedInStack/>
//   );
// };

export const SignedInScreens=()=> {
    return (
      <NavigationContainer theme={theme}>
          <Stack.Navigator initialRouteName='HomeScreen'
            screenOptions={screenOptions}
          >
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='NewPostScreen' component={NewPostScreen} />
            <Stack.Screen name='Creator' component={Creator} />
            {/* <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='SignupScreen' component={SignupScreen} /> */}
          </Stack.Navigator>
      </NavigationContainer>
    );
  };

export const SignedOutScreens=()=> {
    return (
      <NavigationContainer theme={theme}>
          <Stack.Navigator initialRouteName='LoginScreen'
            screenOptions={screenOptions}
          >
            {/* <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='NewPostScreen' component={NewPostScreen} /> */}
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='SignupScreen' component={SignupScreen} />
            <Stack.Screen name='Creator' component={Creator} />
          </Stack.Navigator>
      </NavigationContainer>
    );
  };

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        borderWidth:1,
        borderColor:'red'
    }
});
