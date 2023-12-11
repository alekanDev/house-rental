import { Modal, StyleSheet, View, TextInput, ImageBackground, StatusBar, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'

import { Feather, AntDesign } from '@expo/vector-icons';

import background from '../../utils/pics/imageForMenu.jpg'
import { locationList } from '../../utils/locationList';

const FindLocation = (data) => {
  //#region DBLocations
  // title: ["El Pesebre", "Blanquizal", "Santa Rosa de Lima", "Los Alcázares", "Metropolitano", "La Pradera", "Juan XIII – La Quiebra", "San Javier Nº 2", "San Javier Nº 1", "Veinte de Julio", "Belencito", "Betania", "El Corazón", "Las Independencias", "Nuevos Conquistadores", "El Salado", "Eduardo Santos", "Antonio Nariño", "El Socorro"]
  const locations_bck = [
    {
      id: 0,
      city: 'medellín',
      districts: [
        {
          id: 0,
          title: 'san javier'
        },
        {
          id: 1,
          title: 'el salado'
        },
        {
          id: 2,
          title: 'el pesebre'
        }
      ]
    },
    {
      id: 1,
      city: 'itagüí',
      districts: [
        {
          id: 0,
          title: 'san javier'
        },
        {
          id: 1,
          title: 'el salado'
        },
        {
          id: 2,
          title: 'el pesebre'
        }
      ]
    },
    {
      id: 2,
      city: 'envigado',
      districts: [
        {
          id: 0,
          title: 'san javier'
        },
        {
          id: 1,
          title: 'el salado'
        },
        {
          id: 2,
          title: 'el pesebre'
        }
      ]
    },
  ]
  // const capitalice = (text) => {
  //   const firstLetter = text.charAt(0)
  //   const rest = text.slice(1)
  //   return firstLetter.toUpperCase()+rest
  // }
  //#endregion
  const [listDist, setListDist] = useState([])
  const [foundList, setFoundList] = useState([])

  const { viewModalFind, setViewModalFind, setLocation } = data

  useEffect(() => {
    setFoundList(listDist)
  }, [viewModalFind])

  useEffect(() => {
    const listLocations = () => {
      locationList.forEach(cit => {
        cit.districts.forEach(dist => {
          setListDist(listDist => [...listDist, `${ dist.title }, ${ cit.city }`])
        })
      })
    }
    listLocations()
  }, [])
  
  const findDistrict = (findText) => {
    findText = findText.toLowerCase()
    if(!findText){
      setFoundList(listDist)
    } else {
      const distFound = listDist.filter( find => find.includes(findText))
      if(!distFound){ 
      } else {
        setFoundList(distFound)
      }
    }
  }

  return (
    <Modal visible={ viewModalFind } transparent={ true } >
      <StatusBar style='auto' />
      <ImageBackground style={{flex: 1 }} blurRadius={ 50 } source={ background } >
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.8)' }}>
          <View style={{ width: '100%', height: '6%', justifyContent: 'flex-end', alignItems: 'flex-end' }} >
            <AntDesign name="close" size={ 32 } color="white" style={{ marginRight: 20 }} onPress={ () => setViewModalFind(!viewModalFind) } />
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
            <Feather name="search" size={ 32 } color="white" />
            <TextInput style={{ width: '70%', height: 50, borderBottomColor: 'white', borderBottomWidth: 2, fontSize: 25, marginLeft: 20, color: 'white' }} placeholder='Ciudad o Barrio' placeholderTextColor={ 'rgba(255,255,255,0.5)' } onChangeText={(text) => findDistrict(text)} />
          </View>
          <View style={{ flex: 3 }}>
            {
              foundList.map((el, index) => (
                  <Text key={ index } style={{ color: 'white', letterSpacing: 1, fontSize: 16, textAlign: 'center', height: 30 }} onPress={() => { 
                    setLocation(el)
                    setViewModalFind(!viewModalFind)
                  }} >{ el }</Text>
              ))
            }
          </View>
        </View>
      </ImageBackground>
    </Modal>
  )
}

export default FindLocation

const styles = StyleSheet.create({})