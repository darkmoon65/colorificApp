import { Audio } from 'expo-av';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, TouchableHighlight, ImageBackground, Text} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'

const FirstExploreScreen = ({navigation}) => {
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
              <TouchableHighlight style={styles.submit} onPress={() => navigation.navigate('FirstExplore')} > 
                <Text style={styles.submitText}>VERMILLION</Text>
              </TouchableHighlight>
            </View>
            <Image source={require('../assets/triangle.png')} style={{width: 350, height: 300}}>
            </Image>
            <TouchableHighlight style={{position: 'absolute', top: 70, right: 165}}
                onPress={ () => onPress('yellow')} > 
                <Image source={require('../assets/sound.png')} style={{width: 30, height: 30}} />
              </TouchableHighlight>
            <StatusBar style="auto" />
        </View>
      </View>
    );
  };
  const styles = StyleSheet.create({
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
  
  export default FirstExploreScreen