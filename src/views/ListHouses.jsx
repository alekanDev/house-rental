import { StyleSheet, Text, View, Modal, StatusBar } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native'


const ListHouses = () => {
  const navigation = useNavigation()

  return (
    <Modal visible={ true } >
      <StatusBar style="auto" />
      <View style={{flex:1}} > 
        <View style={{ width: '100%', height:'8%', alignItems: 'center', marginLeft: 20, flexDirection: 'row' }} >
          <Feather name="arrow-left-circle" size={ 30 } color="black" onPress={() => {
            navigation.navigate('Home')
            }} />
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>Viviendas</Text>
        </View>
      </View>
    </Modal>
  )
}

export default ListHouses

const styles = StyleSheet.create({})