import { StyleSheet, Text, View, StatusBar, Image, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome5 } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Init = () => {
  const navigation = useNavigation()
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <StatusBar style="auto" />
        <View style={{ flex:6, alignItems: 'center', justifyContent: 'center' }}>
          <Image
            style={{ width: 450, height: 350 }}
            source={ require('../utils/pics/house.jpg') }
          />
        </View>
        <View style={{ flex: 2, alignItems: 'center' }}>
          <Text style={{fontSize: 25, fontWeight: 'bold', textAlign: 'center'}}>¿Deseas cambiar tu vivienda?</Text>
          <Text style={{fontSize: 16, textAlign: 'center', width: '80%', marginTop: 20}}>Aquí encontrarás la casa que siempre deseate para la comprar o rentar si lo prefieres.</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
          <Pressable style={{backgroundColor: 'black', width: 240, height: 50, borderTopLeftRadius: 25, borderBottomLeftRadius: 25, alignSelf: 'flex-end', justifyContent: 'center', flexDirection: 'row' }} onPress={() => navigation.navigate('Home')}>
            <Text style={{ width: '70%', color: 'white', alignSelf: 'center', fontSize: 18, fontWeight: 'bold', textAlign:'center' }}>Iniciar Busqueda</Text>
            <View style={{ width: '20%', alignItems: 'flex-start', justifyContent: 'center'}}>
              <FontAwesome5 name="long-arrow-alt-right" size={ 28 } color="white" />
            </View>
          </Pressable>
        </View>
      </SafeAreaView>
  )
}

export default Init

const styles = StyleSheet.create({})