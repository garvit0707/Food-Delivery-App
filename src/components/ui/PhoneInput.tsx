import React , {FC} from 'react'
import {View,Image, Pressable, TextInput} from "react-native";
import { withUnistyles } from 'react-native-unistyles';
import { phoneStyles } from '@unistyles/phoneStyles';
import Icon from '@components/global/Icon';
import { Colors } from '@unistyles/Constants';
import CustomText from '@components/global/CustomText';
import SocialLogin from './SocialLogin';

interface PhoneInputProps {
    value: string;
    onChangeText: (Text:string)=> void;
    onFocus?: () => void;
    onBlur?: ()=> void
};

const PhoneInput: FC<PhoneInputProps> =({value,onChangeText, onBlur, onFocus}) => {
  return (
    <View style ={phoneStyles.container}>
        <Pressable style={phoneStyles.countryPickerContainer}>
            <Image source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSumotJ57XRmAh72fiRdm48WQqCjFW-zX2vfJ7X3gX2h680mPnBNNVBFLPLUEW83dZs2as&usqp=CAU"}} style={{height:50,width:25}} />
            <Icon 
            iconFamily='Ionicons'
            name= "caret-down-sharp"
            color= {Colors.lightText}
            size = {18}
            />
        </Pressable>

        <View style = {phoneStyles.phoneInputContainer}>
            <CustomText fontFamily='Okra-Bold'>+91</CustomText>
            <TextInput
                placeholder='Enter Mobile Number'
                keyboardType='phone-pad'
                value= {value}
                maxLength={10}
                placeholderTextColor={Colors.lightText}
                onChangeText={onChangeText}
                onFocus={onFocus}
                onBlur = {onBlur}
                style = {phoneStyles.input}
                />
        </View>
    </View>
  )
}
 
export default withUnistyles(PhoneInput)
