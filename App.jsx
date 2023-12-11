import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/views/Home';
import Init from './src/views/Init';
import ListHouses from './src/views/ListHouses';


export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Init' screenOptions={{ headerShown: false }} >
        <Stack.Screen name='Init' component={ Init } />
        <Stack.Screen name='Home' component={ Home } />
        <Stack.Screen name='ListHouses' component={ ListHouses } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

