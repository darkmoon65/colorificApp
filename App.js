import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import MenuScreen from './src/MenuScreen'
import PracticeScreen from './src/LostScreens/PracticeScreenLost'
import FirstExploreScreen from './src/FirstExploreScreen'
import LoadingScreen from './src/LoadingScreen'
import LogroScreen from './src/LogroScreen'
import SecondExploreScreen from './src/SecondExploreScreen'

const Stack = createNativeStackNavigator();
export default function App() {
  const onPress = () => {};
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Carga"  component={LoadingScreen} />
        <Stack.Screen name="Home"  component={MenuScreen} />
        <Stack.Screen name="FirstExplore"  component={FirstExploreScreen} />
        <Stack.Screen name="Practice"  component={PracticeScreen} />
        <Stack.Screen name="Logro"  component={LogroScreen} />
        <Stack.Screen name="SecondExplore"  component={SecondExploreScreen} />
      </Stack.Navigator>
        
    </NavigationContainer>
    
  );
}