import Delivery from '@assets/tabicons/delivery.png';
import DeliveryFocused from '@assets/tabicons/delivery_focused.png';
import Dining from '@assets/tabicons/dining.png';
import DiningFocused from '@assets/tabicons/dining_focused.png';
import Reorder from '@assets/tabicons/reorder.png';
import ReorderFocused from '@assets/tabicons/reorder_focused.png';
import Live from '@assets/tabicons/live.png';
import LiveFocused from '@assets/tabicons/live_focused.png';

import CustomText from '@components/global/CustomText';
import { Colors } from '@unistyles/Constants';
import { FC } from 'react';
import { TextStyle, ViewStyle, View, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface TabProps {
  name: String;
}

interface IconProps {
  focused: boolean;
}

const styles = {
  width: RFValue(18),
  height: RFValue(18),
};

const tabStyles: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
};

const textStyleInActive: TextStyle = {
  textAlign: 'center',
  marginTop: 4,
  color: Colors.lightText,
  fontSize: RFValue(9.5),
};

const TextStyleActive: TextStyle = {
  textAlign: 'center',
  marginTop: 4,
  color: Colors.active,
  fontSize: RFValue(9.5),
};

const TabIcon: FC<TabProps> = ({ name }) => {

  // console.log("the name i am receving here is!!!!!",name)
  return (
    <View style={tabStyles}>
      <Image
        source={
          name === 'Delivery'
            ? Delivery
            : name === 'Dining'
            ? Dining
            : name === 'Reorder'
            ? Reorder
            : Live
        }
        style={styles}
      />
      <CustomText style={textStyleInActive}>{name}</CustomText>
    </View>
  );
};

const TabIconFocused: FC<TabProps> = ({ name }) => {
  const isVegMode = true;
  return (
    <View style={tabStyles}>
      <Image
        source={
          name === 'DeliveryFocused'
            ? DeliveryFocused
            : name === 'DiningFocused'
            ? DiningFocused
            : name === 'ReorderFocused'
            ? ReorderFocused
            : LiveFocused
        }
        style={[
          styles,
          {
            tintColor:
              name === 'Live'
                ? undefined
                : isVegMode
                ? Colors.active
                : Colors.primary,
          },
        ]}
      />
      <CustomText style={TextStyleActive}>{name}</CustomText>
    </View>
  );
};


export const DeliveryTabIcon: FC<IconProps>=({focused})=>{
    return focused ? <TabIconFocused name = "Delivery"></TabIconFocused> : <TabIcon name="Delivery"></TabIcon>
};

export const DiningTabIcon: FC<IconProps> =({focused})=>{
    return focused ? <TabIconFocused name = "Dining"></TabIconFocused> : <TabIcon name = "Dining"></TabIcon>
};

export const ReorderedTabIcon: FC<IconProps> =({focused})=>{
    return focused ? <TabIconFocused name= "Reorder"></TabIconFocused> : <TabIcon name= "Reorder"></TabIcon>
};

export const LiveTabIcon: FC<IconProps> = ({focused})=>{
    return focused ? <TabIconFocused name ="Live"></TabIconFocused> : <TabIcon name="Live"></TabIcon>
}