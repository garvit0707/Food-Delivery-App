import { useSharedState } from '@features/tabs/SharedContext';
import React, { FC, useState } from 'react';
import { View, Text, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { homeStyles } from '@unistyles/homeStyles';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import Graphics from '@components/home/Graphics';
import HeaderSection from '@components/home/HeaderSection';
// import extrapol
const DeliveryScreen: FC = () => {
  const insets = useSafeAreaInsets();
  // const {styles} = unistle(homeStyles)
  const { scrollYGlobal } = useSharedState();

  const backgroundColorChanges = useAnimatedStyle(() => {
    const opacity = interpolate(scrollYGlobal.value, [1, 50], [0, 1]);
    return {
      backgroundColor: `rgba(255,255,255,${opacity})`,
    };
  });

  const moveUpStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollYGlobal.value,
      [0, 50],
      [0, - 50],
      // Extrapolate.CLAMP,
    );
    return {
      transform: [{ translateY: translateY }],
    };
  });

  const moveUpStyleNotExtrapolate = useAnimatedStyle(() => {
    const translateY = interpolate(scrollYGlobal.value, [0, 50], [0 ,- 50]);
    return {
      transform: [{ translateY: translateY }],
    };
  });

  return (
    <View style={homeStyles.container}>
      <View style={{ height: Platform.OS === 'android' ? insets.top : 0 }} />
      <Animated.View style={moveUpStyle}>
        <Animated.View style={moveUpStyleNotExtrapolate}>
          <Graphics />
          <Animated.View
            style={[backgroundColorChanges, homeStyles.topHeader]}
          >
            <HeaderSection/>
          </Animated.View>
        </Animated.View>
      </Animated.View>
      <Animated.View style={moveUpStyle} />
    </View>
  );
};

export default DeliveryScreen;
