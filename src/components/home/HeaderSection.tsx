import { View, Text } from 'react-native'
import React from 'react'
import LocationHeader from './LocationHeader'
import { SearchBar } from 'react-native-screens'

const HeaderSection = () => {
  return (
    <View>
        <LocationHeader/>
        <SearchBar/>
    </View>
  )
}

export default HeaderSection