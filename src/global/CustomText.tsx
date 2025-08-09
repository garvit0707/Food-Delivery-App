import React from 'react'
import {Text,View} from "react-native";

type Varient = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7"
type platformType = "android" | "ios";

interface CustomTextProps {
    variant?: Varient,
    fontFamily?:
    "Okra-Bold" |
    "Okra-Regular" |
    "Okra-black" |
    "Okra-light" |
    "Okra-medium";
    fontsize?: number;
    // color?:strinff

};

const CustomText = () => {
  return (
    <View>
      <Text></Text>
    </View>
  )
}

export default CustomText
