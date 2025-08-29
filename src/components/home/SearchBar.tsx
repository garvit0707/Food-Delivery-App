import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import { homeStyles } from '@unistyles/homeStyles';
import { useSharedState } from '@features/tabs/SharedContext';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import Icon from '@components/global/Icon';
import { Colors } from '@unistyles/Constants';
import { Image } from 'react-native-reanimated/lib/typescript/Animated';
import CustomText from '@components/global/CustomText';
import RollingContent from 'react-native-rolling-bar';

const SearchItems: string[] = [
  'Search  "Chai samosa"',
  'Search  "Cake"',
  'Search "ice cream"',
  'Search "Biryani"',
  'Search "Pizza"',
];

const SearchBar = () => {
  const isVegMode = true;
  const { scrollYGlobal } = useSharedState();
  const textColorAnimation = useAnimatedStyle(() => {
    const textColor = interpolate(scrollYGlobal.value, [0, 8], [255, 0]);
    return {
      color: `rgb(${textColor},${textColor}, ${textColor})`,
    };
  });
  return (
    <>
      <SafeAreaView></SafeAreaView>
      <View style={[homeStyles.flexRowBetween, homeStyles.padding]}>
        <TouchableOpacity
          style={homeStyles.searchInputContainer}
          activeOpacity={0.8}
        >
          <Icon
            iconFamily="Ionicons"
            name="search"
            color={isVegMode ? Colors.active : Colors.primary}
            size={20}
          ></Icon>
        
            {/* <RollingContent
             interval ={3000}   
             defaultStyle = {false}
             customStyle = {homeStyles.textContainer}>
                {SearchItems?.map((item,index)=>{
                    return(
                        <CustomText
                        fontsize={12}
                        fontFamily="Okra-Regular"
                        key = {index}
                        style={homeStyles.rollingText}>
                        {item}
                        </CustomText>
                    )
                })}
             </RollingContent> */}

             <Icon iconFamily='Ionicons' name = "mic-outline" color = {isVegMode?Colors.active:Colors.primary} size={20}></Icon>
        </TouchableOpacity>
        <Pressable style={homeStyles.vegMode} onPress={() => {}}>
          <Animated.Text style={[textColorAnimation, homeStyles.animatedText]}>
            VEG
          </Animated.Text>
          <Animated.Text
            style={[textColorAnimation, homeStyles.animatedSubText]}
          >
            MODE
          </Animated.Text>
          <Image
            source={
              isVegMode
                ? require('@assets/icons/switch_on.png')
                : require('@assets/icons/switch_off.png')
            }
            style={homeStyles.switch}
          />
        </Pressable>
      </View>
    </>
  );
};

export default SearchBar;
