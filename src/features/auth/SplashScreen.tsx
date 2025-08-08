import React, { FC, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { withUnistyles } from 'react-native-unistyles';
import { splashStyles } from '@unistyles/authStyles';

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
      <Text>This is the splash screen</Text>
      <TouchableOpacity onPress={handlePress}>
        {/* <Text style={style.msgText}>Press me</Text> */}
      </TouchableOpacity>
    </View>
  );
};

export default withUnistyles(SplashScreen);



