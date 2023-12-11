import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LocationList = ({locations}) => {
const { item } = locations
const { districts } = item

  return (
    <View>
      <Text style={{ color: 'white', fontSize: 18}}>Elemento</Text>
    </View>
  )
}

// export default LocationList

const styles = StyleSheet.create({})