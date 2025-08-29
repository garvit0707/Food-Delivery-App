import React from 'react'
import {View,Text,Image} from "react-native";
import { withUnistyles } from 'react-native-unistyles';
import { emptyStyles } from '@unistyles/emptyStyles';


const ReorderScreen = () => {
  return (
    <View style={emptyStyles.container(false)}>
        <Image 
        source={require("@assets/images/coming_soon.jpg")}
        style ={emptyStyles.emptyImage}
        />
    </View>
  )
}

export default withUnistyles(ReorderScreen);
