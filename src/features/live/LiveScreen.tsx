import React from 'react'
import {View,Text,Image} from "react-native";
import { withUnistyles } from 'react-native-unistyles';
import { emptyStyles } from '@unistyles/emptyStyles';


const LiveScreen = () => {
  return (
    <View style={emptyStyles.container(true)}>
        <Image 
        source={require("@assets/images/coming_soon2.jpg")}
        style ={emptyStyles.emptyImage}
        />
    </View>
  )
}

export default withUnistyles(LiveScreen);
