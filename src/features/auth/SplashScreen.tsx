import React, { FC, useCallback } from 'react';
import { View, Text, TouchableOpacity, Image, } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { withUnistyles } from 'react-native-unistyles';
import { splashStyles } from '@unistyles/authStyles';
import Animated, {FadeInDown} from "react-native-reanimated";

type RootStackParamList = {
  test: undefined;
};


const SplashScreen: FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePress = useCallback(() => {
    navigation.navigate('test');
  }, [navigation]);

  return (
    <View style={splashStyles.container}>
      <Image source={require("@assets/images/logo_t.png")} style={splashStyles.logoImage}></Image>
      <Animated.View
        style={splashStyles.animatedContainer}
        entering = {FadeInDown.delay(400).duration(800)}>
          <Image source={require("@assets/images/tree.png")} 
          style={splashStyles.treeImage}></Image>
        </Animated.View>
    </View>
  );
};

export default withUnistyles(SplashScreen);



