import React, {FC} from 'react'
import {View,Text,StatusBar, Platform, Image,Animated} from "react-native";
import { withUnistyles } from 'react-native-unistyles';
import { loginStyles } from '@unistyles/authStyles';
import CustomText from '@components/global/CustomText';
import BreakerText from '@components/ui/BreakerText';


const LoginScreen: FC = () => {
  return (
    <View style={loginStyles.container}>
        <StatusBar hidden={Platform.OS !== "android"}/>
        <Image 
        source={require("@assets/images/login.png")}
        style={loginStyles.cover}/>
      {/* <Text>Log in screen</Text> */}

      <Animated.ScrollView
      bounces={false}
      keyboardShouldPersistTaps='handled'
      keyboardDismissMode="on-drag"
      contentContainerStyle={loginStyles.bottomContainer}
      >
    <CustomText fontFamily='Okra-Bold' variant='h2' style={loginStyles.title}>India's #1 Food delivery and Dining app</CustomText>
    <BreakerText text='Log in or Sign up'/>
      </Animated.ScrollView>
    </View>
  )
}

export default withUnistyles(LoginScreen);
