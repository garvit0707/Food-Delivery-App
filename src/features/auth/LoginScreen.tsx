import React, { FC, useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  Platform,
  Image,
  Animated,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { withUnistyles } from 'react-native-unistyles';
import { loginStyles } from '@unistyles/authStyles';
import CustomText from '@components/global/CustomText';
import BreakerText from '@components/ui/BreakerText';
import PhoneInput from '@components/ui/PhoneInput';
import { phoneStyles } from '@unistyles/phoneStyles';
import SocialLogin from '@components/ui/SocialLogin';
import { resetAndNavigate } from '@utils/NavigationUtils';
import useKeyboardOffsetHeight from '@utils/useKeyboardOffsetHeight';
import { transformer } from 'metro.config';

const LoginScreen: FC = () => {
    const animatedValue = useRef(new Animated.Value(0)).current
    const keyboardOffsetHeight = useKeyboardOffsetHeight()
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);

  const handleLogin = async() => {
        setLoading(false);
        setTimeout(() => {
            setLoading(false);
            resetAndNavigate("UserBottomTab")
        }, 2000);
  };
  
  useEffect(()=>{
    if (keyboardOffsetHeight == 0){
        Animated.timing(animatedValue,{
            toValue:0,
            duration:500,
            useNativeDriver:true
        }).start()
    } else{
        Animated.timing(animatedValue,{
            toValue: -keyboardOffsetHeight*0.25,
            duration: 500,
            useNativeDriver:true
        }).start()
    }
  },[keyboardOffsetHeight])
  return (
    <View style={loginStyles.container}>
      <StatusBar hidden={Platform.OS !== 'android'} />
      <Image
        source={require('@assets/images/login.png')}
        style={loginStyles.cover}
      />

      <Animated.ScrollView
        bounces={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        style={{transform: [{translateY:animatedValue}] }}
        contentContainerStyle={loginStyles.bottomContainer}
      >
        <CustomText
          fontFamily="Okra-Bold"
          variant="h2"
          style={loginStyles.title}
        >
          World's #1 Food delivery and Dining app
        </CustomText>
        <BreakerText text="Log in or Sign up" />
        <PhoneInput
          onBlur={() => {}}
          onFocus={() => {}}
          value={phone}
          onChangeText={setPhone}
        />

        <TouchableOpacity
          style={loginStyles.buttonContainer}
          activeOpacity={0.8}
          disabled={loading}
          onPress={handleLogin}
        >
          {loading ? (
            <ActivityIndicator size={'small'}></ActivityIndicator>
          ) : (
            <CustomText color="#fff" fontFamily="Okra-medium" variant="h5">
              Continue
            </CustomText>
          )}
        </TouchableOpacity>

        <BreakerText text="or" />
        <SocialLogin />
      </Animated.ScrollView>
      <View style={loginStyles.footer}>
        <CustomText>By Continuing, you agree to our</CustomText>
        <View style={loginStyles.footerTextContainer}>
          <CustomText style={loginStyles.footerText}>
            Terms of Service
          </CustomText>
          <CustomText style={loginStyles.footerText}>Privacy Policy</CustomText>
          <CustomText style={loginStyles.footerText}>
            Content Policies
          </CustomText>
        </View>
      </View>
    </View>
  );
};

export default withUnistyles(LoginScreen);
