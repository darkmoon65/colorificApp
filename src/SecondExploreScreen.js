import { Audio } from 'expo-av';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, TouchableHighlight, ImageBackground, Text, TextInput, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import { Dimensions } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const SecondExploreScreen = ({navigation}) => {
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
                    <Text style={{fontFamily: 'BreeSerif', fontSize: 25}}>Escucha y selecciona</Text>
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
                <ImageBackground source={require('../assets/opc_n.png')} style={{width: '100%', height: Dimensions.get('window').height / 1.5}}>
                    <TouchableHighlight style={{position: 'absolute', top: 90, right: 230}} onPress={() => navigation.navigate('Home')} > 
                        <Image source={require('../assets/pincel.png')} style={{width: 30, height: 30}} />
                    </TouchableHighlight>
                    <TouchableHighlight style={{position: 'absolute', top: 290, right: 230}} onPress={() => navigation.navigate('Practice')} > 
                        <Image source={require('../assets/pincel.png')} style={{width: 30, height: 30}} />
                    </TouchableHighlight>
                    <TouchableHighlight style={{position: 'absolute', top: 490, right: 230}} onPress={() => navigation.navigate('Home')} > 
                        <Image source={require('../assets/pincel.png')} style={{width: 30, height: 30}} />
                    </TouchableHighlight>
                    <TouchableHighlight style={{position: 'absolute', top: 90, right: 100}} onPress={() => navigation.navigate('Home')} > 
                        <Image source={require('../assets/pincel.png')} style={{width: 30, height: 30}} />
                    </TouchableHighlight>
                </ImageBackground>
            </View>
            <View style={styles.center}>
              <TouchableHighlight style={styles.submit} onPress={() => navigation.navigate('FirstExplore')} > 
              <LinearGradient  
                start={{x:0.5, y:0}} end={{x:0.5, y:1}} locations={[0, 1]} colors={[ '#2fb005','black']} 
                        style={styles.gradient}>
                  <Text style={styles.submitText}>Aprender</Text>
                </LinearGradient>  
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
    gradient:{
      marginTop: 10,
      flex: 10,
      height: 50,
      ...StyleSheet.absoluteFill,
    },
    center:{
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
    },
    submitText: {
      color:'white',
      textAlign: 'center',
      fontSize: 30,
      letterSpacing: 2
    }
  });
  
  export default SecondExploreScreen