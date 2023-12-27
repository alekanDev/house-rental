import { StyleSheet, Text, View, StatusBar, Image, Pressable, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FindLocation from '../components/modals/FindLocation'
import { useState, useEffect } from 'react'

import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'



const Home = () => {

  useEffect(() => {
    setViewFormBuyRent(true)
  }, [])

  const [viewFormBuyRent, setViewFormBuyRent] = useState(true)
  const navigation = useNavigation()

  const [houseType, setHouseType] = useState('rentHouse')
  const [location, setLocation] = useState('Ubicación')
  const [viewModalFind, setViewModalFind] = useState(false)


  return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        
      <ImageBackground source={ require('../utils/pics/imageForMenu.jpg')} style={{ flex: 1, justifyContent: 'flex-end'}}>
        <View  style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' ,width: '100%', height: 120, padding: 10, marginBottom: 10, justifyContent: 'center' }}>
          <Text style={{ alignItems: 'center', fontSize: 25, fontWeight: 'bold', marginBottom: 5 }}>Bienvenido Juan!</Text>
          <Text style={{ fontSize: 16 }} >Selecciona la opcion segun tu interes, y nosotros te mostraremos la casa que siempre has deseado</Text>
        </View>
      <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', height: '40%', borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
        
        <Text style={{ width: '100%', height: '10%', paddingTop: 10, paddingLeft: 30, fontSize: 16, fontWeight: 'bold' }} >Me interesa: { houseType === 'buyHouse' ? 'COMPRAR' : 'RENTAR' } </Text>
        
        <View style={{ flexDirection: 'row', width: '100%', height: '35%', justifyContent: 'space-around' }}>
          <Pressable style={ houseType === 'buyHouse' ? styles.optionHouseSel : styles.optionHouse } onPress={ () => {
            setHouseType('buyHouse')
          }} >
            <Ionicons name="md-home" size={ 40 } color={ houseType === 'buyHouse' ? 'white' : 'black' } />
            <Text style={ houseType === 'buyHouse' ? styles.textOptionHouseSel : styles.textOptionHouse }>Comprar</Text>
          </Pressable>
          <Pressable style={ houseType === 'rentHouse' ? styles.optionHouseSel : styles.optionHouse } onPress={ () => {
            setHouseType('rentHouse')
          }} >
            <Ionicons name="md-home-outline" size={ 40 } color={ houseType === 'rentHouse' ? 'white' : 'black' } />
            <Text style={ houseType === 'rentHouse' ? styles.textOptionHouseSel : styles.textOptionHouse }>Rentar</Text>
          </Pressable>
        </View>

        <View style={{ height: '50%', paddingHorizontal: 30, justifyContent: 'flex-start' }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>En que ciudad?</Text>
          <View style={{ width: '100%', borderWidth: 2, borderColor: '#2c2c2c', borderRadius: 15, height: 50, alignItems: 'center', paddingHorizontal: 10, marginTop: 10, flexDirection: 'row' }}>
            <Ionicons name="location-outline" size={28} color="black" />
            <Text style={{ flex: 1, marginLeft: 10, fontSize: 20}} onPress={ () => {
              setViewModalFind((!viewModalFind))
            } } >{ location }</Text>
          </View>
          <Pressable style={{ width: '95%', backgroundColor: '#2c2c2c', borderRadius: 25, height: 50, marginTop: 20, alignItems: 'center', justifyContent: 'center' }} onPress={() => { 
            console.log({houseType, location })
            // setViewFormBuyRent(false)
            navigation.navigate('ListHouses')
            }} >
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', letterSpacing: 1 }} >Continuar</Text>
          </Pressable>
        </View>

        <FindLocation 
          viewModalFind = { viewModalFind }
          setViewModalFind = { setViewModalFind }
          setLocation = { setLocation }
        />

      </View>
      </ImageBackground>


        <FindLocation
          viewModalFind = { false }
        />
      </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  optionHouse: {
    borderWidth: 2, borderColor: '#2c2c2c', width: '35%', height: 100, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginTop: 5
  },
  optionHouseSel: {
    borderWidth: 2, borderColor: '#2c2c2c', width: '35%', height: 100, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginTop: 5, backgroundColor: '#2c2c2c'
  },
  textOptionHouse: {
    fontWeight: 'bold', fontSize: 16, marginTop: 5, color: 'black'
  },
  textOptionHouseSel: {
    fontWeight: 'bold', fontSize: 16, marginTop: 5, color: 'white'
  }
})