import React, {FC} from 'react'
import {View,Text} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

interface IconProps {
    iconFamily: "Ionicons" | "MaterialCommunityIcons" | "MaterialIcons"
    color?: string,
    name: string,
    size: number,
};

const Icon:FC<IconProps> = ({color,size,name,iconFamily}) => {
  return (
    <>
    {iconFamily === "Ionicons" && (
        <Ionicons name = {name} size = {size} color = {color}/>
    )}
    {iconFamily === "MaterialIcons" && (
        <MaterialIcons name = {name} size = {size} color = {color}/>
    )}
    {iconFamily === "MaterialCommunityIcons" && (
        <MaterialCommunityIcons name = {name} size = {size} color = {color} />
    )}
    </>
  )
}

export default Icon;
