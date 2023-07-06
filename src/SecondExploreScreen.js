import { Audio } from 'expo-av';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, TouchableHighlight, ImageBackground, Text, TextInput, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import { Dimensions } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const SecondExploreScreen = ({navigation}) => {
    const [sound, setSound] = React.useState();
    const [selectPrimero, setSelectPrimero] = React.useState(false);
    const [selectSegundo, setSelectSegundo] = React.useState(false);
    const [selectTercero, setSelectTercero] = React.useState(false);
    const [selectCuarto, setSelectCuarto] = React.useState(false);
    const [Opcion, setOpcion] = React.useState(0);
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
      if(Opcion == 3){
        navigation.navigate('Logro', {Intento: 2})
      }else{
        console.log("Intenta de nuevo")
      }
      
    }
    let limpiar = ()=> {
      setSelectPrimero(false)
      setSelectSegundo(false)
      setSelectTercero(false)
      setSelectCuarto(false)
    }
    let mark = (item)=> {
      if(item == 1) limpiar() ,  setSelectPrimero(true), setOpcion(1);
      else if(item == 2) limpiar(), setSelectSegundo(true), setOpcion(2);
      else if(item == 3) limpiar(), setSelectTercero(true), setOpcion(3);
      else if(item == 4) limpiar(), setSelectCuarto(true), setOpcion(4);
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
                    <Text style={{fontSize: 25}}>Escucha y selecciona</Text>
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
                <ImageBackground source={require('../assets/opc_n.png')} style={{width: '100%', height: Dimensions.get('window').height / 1.8}}>
                    
                    {
                      selectPrimero && (
                        <TouchableHighlight style={{position: 'absolute', top: 90, right: 260}} onPress={() => checkResult()} > 
                          <Image source={require('../assets/pincel.png')} style={{width: 50, height: 50}} />
                        </TouchableHighlight>
                      )
                    }
                    <TouchableHighlight style={{position: 'absolute', top: 150, right: 260}} onPress={() => mark(1)} > 
                        <Text style={{color: 'white', fontSize:25}}> Teal </Text>
                    </TouchableHighlight>

                    {
                      selectSegundo && (
                        <TouchableHighlight style={{position: 'absolute', top: 290, right: 260}} onPress={() => checkResult()} > 
                            <Image source={require('../assets/pincel.png')} style={{width: 50, height: 50}} />
                        </TouchableHighlight>
                      )
                    }
                    <TouchableHighlight style={{position: 'absolute', top: 350, right: 230}} onPress={() => mark(2)} > 
                        <Text style={{color: 'white', fontSize:25}}> Magenta </Text>
                    </TouchableHighlight>
                    
                    {
                        selectTercero && (
                          <TouchableHighlight style={{position: 'absolute', top: 90, right: 70}} onPress={() => checkResult()} > 
                              <Image source={require('../assets/pincel.png')} style={{width: 50, height: 50}} />
                          </TouchableHighlight>
                        )
                    }
                    <TouchableHighlight style={{position: 'absolute', top: 150, right: 30}} onPress={() => mark(3)} > 
                        <Text style={{color: 'white', fontSize:25}}> Vermillion </Text>
                    </TouchableHighlight>
                    
                    {
                        selectCuarto && (
                          <TouchableHighlight style={{position: 'absolute', top: 290, right: 70}} onPress={() => checkResult()}> 
                              <Image source={require('../assets/pincel.png')} style={{width: 50, height: 50}} />
                          </TouchableHighlight>
                        )
                    }
                    <TouchableHighlight style={{position: 'absolute', top: 340, right: 50}} onPress={() => mark(4)} > 
                        <Text style={{color: 'white', fontSize:25}}> Amber </Text>
                    </TouchableHighlight>

                </ImageBackground>
            </View>
            <View style={styles.center}>
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
    submitText: {
      color:'white',
      textAlign: 'center',
      fontSize: 30,
      letterSpacing: 2
    }
  });
  
  export default SecondExploreScreen