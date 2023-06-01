import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Button, ImageBackground } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { Audio } from 'expo-av';

const Stack = createNativeStackNavigator();
export default function App() {
  const onPress = () => {};
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Carga"  component={LoadingScreen} />
        <Stack.Screen name="Home"  component={MenuScreen} />
        <Stack.Screen name="Explore"  component={ExploreScreen} />
        <Stack.Screen name="Practice"  component={PracticeScreen} />
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
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  return (

    <View style={styles.container}>
      <Text style={styles.menuTitle}>Menú</Text>
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
          <TouchableHighlight style={styles.submit2} onPress={() => navigation.navigate('Practice')} > 
            <Image source={require('./assets/combine.png')} style={{width: 100, height: 100}} />  
          </TouchableHighlight>
          <View style={styles.menuItems}>
            <Text style={styles.menuItem1}>Combine</Text>
            <Text style={styles.menuItem2}>(Combinar)</Text>
          </View>
        </View>
        <View style={styles.miniConteiner}>
          <TouchableHighlight style={styles.submit2} onPress={() => navigation.navigate('Explore')} > 
            <Image source={require('./assets/evaluate.png')} style={{width: 100, height: 100}} /> 
          </TouchableHighlight>
         
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
  const [sound, setSound] = React.useState();

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  let onPress = async (color) =>{
    console.log('Loading Sound');
    if( color == 'red'){
      const { sound } = await Audio.Sound.createAsync( require('./assets/red.mp4'));
      setSound(sound);
      await sound.playAsync();
    }else if ( color == 'blue'){
      const { sound } = await Audio.Sound.createAsync( require('./assets/blue.mp4'));
      setSound(sound);
      await sound.playAsync();
    }else {
      const { sound } = await Audio.Sound.createAsync( require('./assets/yellow.mp4'));
      setSound(sound);
      await sound.playAsync();
    }
  };
 

  return (
    <View style={styles.container}>
        <ImageBackground source={require('./assets/triangle.png')} style={{width: 350, height: 300}}>
          <TouchableHighlight style={{position: 'absolute', top: 200, right: 100}} 
            onPress={ () => onPress('red')} > 
            <Image source={require('./assets/sound.png')} style={{width: 30, height: 30}} />
          </TouchableHighlight>
          <TouchableHighlight style={{position: 'absolute', top: 200, right: 220}}
            onPress={ () => onPress('blue')} > 
            <Image source={require('./assets/sound.png')} style={{width: 30, height: 30}} />
          </TouchableHighlight>
          <TouchableHighlight style={{position: 'absolute', top: 70, right: 165}}
            onPress={ () => onPress('yellow')} > 
            <Image source={require('./assets/sound.png')} style={{width: 30, height: 30}} />
          </TouchableHighlight>
        </ImageBackground>
        <StatusBar style="auto" />
    </View>
  );
};

const PracticeScreen = ({navigation}) => {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  return (

    <View style={styles.container}>
      <Text style={{fontSize:38}}>Combine your colors</Text>
      <Text style={{fontSize:20}}>(Combina tus colores)</Text>
        <View style={styles.miniConteiner}>
          <View style={{paddingLeft: 30, width: 180, alignItems: 'center'}}>
              <Text style={{fontSize:28}}>Primary Colors</Text>
              <Text style={{fontSize:18}}>(Colores primarios)</Text>
          </View>
          <View style={{paddingLeft: 30, width: 180, alignItems: 'center'}}>
              <Text style={{fontSize:28}}>Secondary Colors</Text>
              <Text style={{fontSize:18}}>(Colores secundarios)</Text>
          </View>
        </View>
        <View style={styles.miniConteiner}>
          <TouchableHighlight style={styles.color_red} onPress={() => {}} > 
            <Text style={styles.color_white}>Red</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.color_green} onPress={() => {}} > 
            <Text style={styles.color_white}>Green</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.miniConteiner}>
        <TouchableHighlight style={styles.color_yellow} onPress={() => {}} > 
            <Text style={styles.color_black}>Yellow</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.color_orange} onPress={() => {}} > 
            <Text style={styles.color_white}>Orange</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.miniConteiner}>
        <TouchableHighlight style={styles.color_blue} onPress={() => {}} > 
            <Text style={styles.color_white}>Blue</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.color_purple} onPress={() => {}} > 
            <Text style={styles.color_white}>Purple</Text>
          </TouchableHighlight>
        </View>
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
    color: '#fff',
    //fontFamily: 'Arial'
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
  color_red: {
    borderRadius: 100,
    borderWidth: 1,
    backgroundColor: 'red',
    borderColor: "black",
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    marginRight: 20
  },
  color_yellow: {
    borderRadius: 100,
    borderWidth: 1,
    backgroundColor: 'yellow',
    borderColor: "black",
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    marginRight: 20
  },
  color_blue: {
    borderRadius: 100,
    borderWidth: 1,
    backgroundColor: 'blue',
    borderColor: "black",
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    marginRight: 20
  },
  color_green: {
    borderRadius: 100,
    borderWidth: 1,
    backgroundColor: 'green',
    borderColor: "black",
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100
  },
  color_orange: {
    borderRadius: 100,
    borderWidth: 1,
    backgroundColor: 'orange',
    borderColor: "black",
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100
  },
  color_purple: {
    borderRadius: 100,
    borderWidth: 1,
    backgroundColor: 'purple',
    borderColor: "black",
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100
  },
  color_white: {
    color: 'white',
    fontSize: 25
  },
  color_black: {
    color: 'black',
    fontSize: 25
  }
});
