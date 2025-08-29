import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import React, { FC } from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { homeStyles } from '@unistyles/homeStyles';
import { useSharedState } from '@features/tabs/SharedContext';
import Icon from '@components/global/Icon';
import CustomText from '@components/global/CustomText';

const LocationHeader = () => {
  const { scrollYGlobal } = useSharedState();
  const textColor = '#fff';
  const opacityFadingStyles = useAnimatedStyle(() => {
    const opacity = interpolate(scrollYGlobal.value, [0, 80], [1, 0]);
    return {
      opacity: opacity,
    };
  });

  return (
    <Animated.View style={opacityFadingStyles}>
      {/* <Text>LocationHeader</Text> */}
      <SafeAreaView />
      <View style={homeStyles.flexRowBetween}>
        <View style={homeStyles.flexRowGap}>
          <Icon
            name="map-marker"
            color={textColor}
            iconFamily="MaterialCommunityIcons"
            size={32}
          />
          <View>
            <TouchableOpacity style={homeStyles.flexRow}>
              <CustomText variant="h5" color={textColor} fontFamily="Okra-Bold">
                Erangal pochinki
              </CustomText>
              <Icon
                name="chevron-down"
                color={textColor}
                iconFamily="MaterialCommunityIcons"
                size={18}
              />
            </TouchableOpacity>
            <CustomText color={textColor} fontFamily="Okra-Bold">
              Noida , Uttarpradesh
            </CustomText>
          </View>
        </View>
        <View style={homeStyles.flexRowGap}>
          <TouchableOpacity style={homeStyles.translation}>
            <Image
              source={require('@assets/icons/translation.png')}
              style={homeStyles.translationIcon}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity style={homeStyles.profileAvatar}>
            <Image
              source={require('@assets/icons/golden_circle.png')}
              style={homeStyles.goldenCircle}
            ></Image>
            {/* <Image
              source={require('@assets/images/user.jpg')}
              style={homeStyles.profileImage}
            /> */}
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};

export default LocationHeader;
