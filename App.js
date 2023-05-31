import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Font from 'expo-font';

const Stack = createNativeStackNavigator();
export default function App() {
  const onPress = () => {};
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'custom-font': require('./assets/fonts/BreeSerif-Regular.ttf'),
      });

      setFontLoaded(true);
    }

    loadFont();
  }, []);

  return (
    <NavigationContainer style={{fontFamily: 'custom-font'}}>
      <Stack.Navigator  screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Carga"  component={LoadingScreen} />
        <Stack.Screen name="Home"  component={MenuScreen} />
        <Stack.Screen name="Explore"  component={ExploreScreen} />
      </Stack.Navigator>
        
    </NavigationContainer>
    
  );
}
const LoadingScreen = ({navigation}) => {
  return (

    <View style={styles.container}>
        <Image source={require('./assets/logo.png')} style={{width: 300, height: 120}} />
        <TouchableHighlight style={styles.submit} onPress={() => navigation.navigate('Home')} > 
          <Text style={styles.submitText}>Empezar</Text>
        </TouchableHighlight>
        <StatusBar style="auto" />
      </View>
  );
};
const MenuScreen = ({navigation}) => {
  return (

    <View style={styles.container}>
      <Text style={styles.menuTitle}>Menús</Text>
        <View style={styles.miniConteiner}>

        <TouchableHighlight style={styles.submit2} onPress={() => navigation.navigate('Explore')} > 
        <Image source={require('./assets/explore.png')} style={{width: 100, height: 100}} />
        </TouchableHighlight>
         <View style={styles.menuItems}>
            <Text style={styles.menuItem1}>Explore</Text>
          <Text style={styles.menuItem2}>(Explorar)</Text>
         </View>
        </View>
        <View style={styles.miniConteiner}>

          <Image source={require('./assets/combine.png')} style={{width: 100, height: 100}} />  
          <View style={styles.menuItems}>
            <Text style={styles.menuItem1}>Combine</Text>
            <Text style={styles.menuItem2}>(Combinar)</Text>
          </View>
        </View>
        <View style={styles.miniConteiner}>
          <Image source={require('./assets/evaluate.png')} style={{width: 100, height: 100}} />
          <View style={styles.menuItems}>
            <Text style={styles.menuItem1}>Evaluate</Text>
            <Text style={styles.menuItem2}>(Evaluar)</Text>
          </View>
        </View>
        <StatusBar style="auto" />
    </View>
  );
};

const ExploreScreen = ({navigation}) => {
  return (

    <View style={styles.container}>
        <Image source={require('./assets/triangle.png')} style={{width: 350, height: 300}} />  
        <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcf9a8',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff'
  },
  miniConteiner: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20
  },
  submit: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 100,
    borderWidth: 1,
    backgroundColor: 'green',
    borderColor: "#fff",
    width: 120,

  },
  submitText: {
    color:'white',
    textAlign: 'center'
  },
  menuItems : {
    paddingLeft: 20
  },
  menuTitle : {
    alignItems: 'center',
    fontSize: 40,
    paddingBottom: 40
  },
  menuItem1: {
    alignItems: 'center',
    fontSize: 35,
  },
  menuItem2: {
    alignItems: 'center',
    fontSize: 25,
  },
  submit2: {
    borderRadius: 100,
    borderWidth: 1,
    backgroundColor: 'green',
    borderColor: "#fff",
    width: 120,
  },
});
