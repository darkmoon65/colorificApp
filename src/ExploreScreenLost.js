import { Audio } from 'expo-av';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, TouchableHighlight, ImageBackground} from 'react-native';
import { StatusBar } from 'expo-status-bar';

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
      <View style={styles.container}>
          <ImageBackground source={require('../assets/triangle.png')} style={{width: 350, height: 300}}>
            <TouchableHighlight style={{position: 'absolute', top: 200, right: 100}} 
              onPress={ () => onPress('red')} > 
              <Image source={require('../assets/sound.png')} style={{width: 30, height: 30}} />
            </TouchableHighlight>
            <TouchableHighlight style={{position: 'absolute', top: 200, right: 220}}
              onPress={ () => onPress('blue')} > 
              <Image source={require('../assets/sound.png')} style={{width: 30, height: 30}} />
            </TouchableHighlight>
            <TouchableHighlight style={{position: 'absolute', top: 70, right: 165}}
              onPress={ () => onPress('yellow')} > 
              <Image source={require('../assets/sound.png')} style={{width: 30, height: 30}} />
            </TouchableHighlight>
          </ImageBackground>
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
    }
  });
  
  export default ExploreScreen