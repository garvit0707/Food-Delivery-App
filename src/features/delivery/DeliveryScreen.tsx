import { useSharedState } from '@features/tabs/SharedContext';
import React,{FC, useState} from 'react'
import {View, Text} from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { homeStyles } from '@unistyles/homeStyles';

const DeliveryScreen: FC = () => {

  const insets = useSafeAreaInsets();
  // const {styles} = useUnistyles(homeStyles)
  // const {scrollGlobal} = useSharedState();

  const backgroundColorChanges = useAnimatedState(()=>{
    const opacity
  })


  return (
    <View>
      <Text>
        this is the Delivery Screen
      </Text>
    </View>
  )
}

export default DeliveryScreen
