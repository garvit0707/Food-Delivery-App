import React, { FC } from 'react'
import {View, Text} from "react-native";
import { withUnistyles } from 'react-native-unistyles';
import { loginStyles } from '@unistyles/authStyles';
import CustomText from '@components/global/CustomText';


const BreakerText: FC<({text: string})> = ({text}) => {
  
  return (
    <View style={loginStyles.breakerContainer}>
      <View style={loginStyles.horizontalLine}/>
        <CustomText style={loginStyles.breakerText} fontsize={12} fontFamily='Okra-medium'>
          {text}
        </CustomText>
      <View style={loginStyles.horizontalLine}/>
    </View>
  ) 
}

export default withUnistyles(BreakerText);
