import React from 'react'
import {View, Text} from  "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';  
import SplashScreen from '@features/auth/SplashScreen';
import TestScreen from '@features/auth/TestScreen';

const Stack = createNativeStackNavigator();


const Navigation = () => {
  return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName="splash" screenOptions={{headerShown:false}}>
        <Stack.Screen
          name="splash"
          component={SplashScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="test" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
