import React from 'react'
import {View, Text} from  "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';  
import SplashScreen from '@features/auth/SplashScreen';
import TestScreen from '@features/auth/TestScreen';
import LoginScreen from '@features/auth/LoginScreen';
import { navigationRef } from '@utils/NavigationUtils';
import UserBottomTab from '@features/tabs/UserBottomTab';
import AnimatedTabs from '@features/tabs/AnimatedTabs';

const Stack = createNativeStackNavigator();


const Navigation = () => {
  return (
   <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="splash" screenOptions={{headerShown:false}}>
        <Stack.Screen
          name="splash"
          component={SplashScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="test" component={TestScreen} />
        <Stack.Screen name = "login" component={LoginScreen} options={{animation:"fade"}}/>
        {/* <Stack.Screen name = "userbottomtab" component={UserBottomTab} options={{animation:"fade"}}/>   */}
        <Stack.Screen name = "UserBottomTab" component={AnimatedTabs} options={{animation: "fade"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
