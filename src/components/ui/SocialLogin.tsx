import React , {FC} from 'react'
import {View,TouchableOpacity, Image} from "react-native";
import { withUnistyles } from 'react-native-unistyles';
import { phoneStyles } from '@unistyles/phoneStyles';
import Icon from '@components/global/Icon';
import { RFValue } from 'react-native-responsive-fontsize';

const SocialLogin: FC = () => {
  return (
    <View style={phoneStyles.socialContainer}>
      <TouchableOpacity style={phoneStyles.iconContainer}>
        <Image source={require("@assets/icons/google.png")} style={phoneStyles.gimg}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={phoneStyles.iconContainer}>
        <Icon 
        name='logo-apple'
        iconFamily='Ionicons'
        color='#222'
        size={RFValue(18)}
        />
      </TouchableOpacity>
      <TouchableOpacity style={phoneStyles.iconContainer}>
        <Icon
         name = "ellipsis-horizontal-sharp"
         iconFamily='Ionicons'
         color='#222'
         size={RFValue(18)}
         />
      </TouchableOpacity>
    </View>
  )
}

export default withUnistyles(SocialLogin);

