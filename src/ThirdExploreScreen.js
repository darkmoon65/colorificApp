import { Audio } from 'expo-av';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, TouchableHighlight, ImageBackground, Text, TextInput, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import { Dimensions } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const ThirdExploreScreen = ({navigation}) => {
    const [sound, setSound] = React.useState();
    // Data input

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
        const { sound } = await Audio.Sound.createAsync( require('../assets/red.mp4'));
        setSound(sound);
        await sound.playAsync();
      }else if ( color == 'blue'){
        const { sound } = await Audio.Sound.createAsync( require('../assets/blue.mp4'));
        setSound(sound);
        await sound.playAsync();
      }else {
        const { sound } = await Audio.Sound.createAsync( require('../assets/yellow.mp4'));
        setSound(sound);
        await sound.playAsync();
      }
    };
    let checkResult = ()=> {
        navigation.navigate('Logro', {Intento: 3})
    }
    return (
      <View>
        <NavBar style={styles}>
            <NavButton onPress={() => alert('Ejemplo modal')}>
                <NavButtonText style={styles.text} >
                    {"App"}
                </NavButtonText>
            </NavButton>
        </NavBar>
        <View style={styles.container}>
            <View style={styles.center}>
                <View style={{paddingTop: 15}}>
                    <Text style={{fontSize: 25}}>Escucha y practica tu Pronunciación:</Text>
                </View>
            </View>  
            <View style={styles.center}>
              <View style={{paddingTop:60, paddingLeft:30}}>
                <TouchableHighlight
                  onPress={ () => onPress('yellow')} > 
                  <Image source={require('../assets/sound.png')} style={{width: 50, height: 50}} />
                </TouchableHighlight>
              </View>
            </View>
            <View style={styles.center}>
              <View style={{paddingTop:100}}>
                <TouchableHighlight
                  onPress={ () => onPress('yellow')} > 
                  <Image source={require('../assets/microBlack.png')} style={{width: 60, height: 100}} />
                </TouchableHighlight>
              </View>
            </View>
            <View style={styles.bot}>
              <TouchableHighlight style={styles.submit} onPress={() => checkResult()} > 
                  <Text style={styles.submitText}>Comprobar</Text>
              </TouchableHighlight>
           </View>
            <StatusBar style="auto" />
        </View>
      </View>
    );
  };
  const styles = StyleSheet.create({
    input: {
      backgroundColor: "white",
      borderWidth: 1,
      borderRadius: 5,
      padding: 3,
      margin: 1
    },
    inputStatic:{
      paddingTop: 5,
      fontSize: 20
    },
    imagenAudio: {
      flexDirection: 'row',
      padding: 25,
      height: 325
    },
    oneLine:{
      flexDirection: 'row',
    },
    container: {
      padding: 20,
      //fontFamily: 'Arial'
    },
    navBar: {
      backgroundColor: '#fcf9a8',
    },
    submit: {
      marginRight: 40,
      marginLeft: 40,
      marginTop: 10,
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 10,
      borderWidth: 0,
      backgroundColor: 'green',
      borderColor: "#fff",
      width: 220,
    },
    center:{
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
    },
    bot:{
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      paddingTop: 200
    },
    submitText: {
      color:'white',
      textAlign: 'center',
      fontSize: 30,
      letterSpacing: 2
    }
  });
  
  export default ThirdExploreScreen