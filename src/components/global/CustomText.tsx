import { Colors } from '@unistyles/Constants';
import React, { FC } from 'react'
import { Platform, Text, TextStyle, View } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize';
import { StyleSheet } from 'react-native-unistyles';

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
  color?: string;
  style?: TextStyle | TextStyle[];
  children: React.ReactNode;
  numberOfLines?: number;
  onLayout?: (event: any) => void;
};

const fontSizeMap: Record<Varient, Record<platformType, number>> = {
  h1: { android: 24, ios: 22 },
  h2: { android: 22, ios: 20 },
  h3: { android: 20, ios: 18 },
  h4: { android: 18, ios: 16 },
  h5: { android: 16, ios: 14 },
  h6: { android: 12, ios: 10 },
  h7: { android: 10, ios: 9 },
};

const CustomText: FC<CustomTextProps> = ({
  variant,
  fontFamily = "Okra-Regular",
  fontsize,
  style,
  color,
  children,
  numberOfLines,
  onLayout,
  ...props
}) => {

  let computedFontSize: number = Platform.OS === "android" ? RFValue(fontsize || 12) : RFValue(fontsize || 10);

  if (variant && fontSizeMap[variant]) {
    const defaultSize = fontSizeMap[variant][Platform.OS as platformType];
    computedFontSize = RFValue(fontsize || defaultSize);
  };
  const fontFamilyStyle = {
    fontFamily
  }
  return (
    <Text numberOfLines={numberOfLines !== undefined ? numberOfLines : undefined}
      {...props}
      onLayout={onLayout}
      style={[styles.text, { color: color || Colors.text, fontSize: computedFontSize }, fontFamilyStyle, style]}
    >{children}</Text>
  )
}

export default CustomText;

const styles = StyleSheet.create({
  text: {
    textAlign: "left"
  },

})
