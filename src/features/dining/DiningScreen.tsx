import React from 'react'
import {View,Text,Image,FlatList} from "react-native";
import { withUnistyles } from 'react-native-unistyles';
import { emptyStyles } from '@unistyles/emptyStyles';


const DiningScreen = () => {

  const data_fun =()=>{
   <View>
    <Text>H1 is the text here</Text>
    <View>
      <Text style ={{textAlign:"center",justifyContent: "center",flexDirection:"row",}}></Text>
    </View>
   </View> 
  };

  return (
    <View style={emptyStyles.container(false)}>
        <Image
        source={require("@assets/images/coming_soon3.png")}
        style ={emptyStyles.emptyImage}
      
        />
        {/* <FlatList
          keyExtractor={(item)=>item.id}
          renderItem={data_fun}
        /> */}
    </View>
  )
}

export default withUnistyles(DiningScreen);

