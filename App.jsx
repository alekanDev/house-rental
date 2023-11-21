import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Home from './src/views/Home';

export default function App() {
  return (
    <LinearGradient style={{ flex: 1 }} colors={ ['#2c2c2c', '#131624'] }>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <Home />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
