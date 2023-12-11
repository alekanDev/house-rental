import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormBuyRent from '../components/forms/FormBuyRent'
import FindLocation from '../components/modals/FindLocation'

const Home = () => {

  return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <View style={{ width: '100%', height: '65%', zIndex: 0 }}>
          <Image 
            source={ require('../utils/pics/imageForMenu.jpg') }
            style={{ width: '100%', height: '100%' }}
          />
        </View>
        <FormBuyRent />
        <FindLocation
          viewModalFind = { false }
        />
      </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})