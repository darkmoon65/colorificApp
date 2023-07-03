import { StyleSheet, Text, View, Image, TouchableHighlight, ImageBackground} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav';
import { Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import {LinearGradient} from 'expo-linear-gradient';

const LogroScreen = ({navigation}) => {
    useEffect( () => {
        setTimeout(() => {
            navigation.navigate('SecondExplore')
        }, 4000);
        }
    )
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
                <ImageBackground source={require('../assets/WAY2.png')} style={{width: '100%', height: Dimensions.get('window').height / 1}}>
                    <TouchableHighlight style={{position: 'absolute', top: 600, right: 280}} onPress={() => navigation.navigate('Home')} > 
                        <Image source={require('../assets/1.png')} style={{width: 90, height: 90}} />
                    </TouchableHighlight>
                    <TouchableHighlight style={{position: 'absolute', top: 490, right: 80}} onPress={() => navigation.navigate('Practice')} > 
                        <Image source={require('../assets/2.png')} style={{width: 90, height: 90}} />
                    </TouchableHighlight>
                    <TouchableHighlight style={{position: 'absolute', top: 350, right: 260}} onPress={() => navigation.navigate('Home')} > 
                        <Image source={require('../assets/3.png')} style={{width: 90, height: 90}} />
                    </TouchableHighlight>
                    <TouchableHighlight style={{position: 'absolute', top: 250, right: 60}} onPress={() => navigation.navigate('Home')} > 
                        <Image source={require('../assets/4.png')} style={{width: 90, height: 90}} />
                    </TouchableHighlight>
                    <TouchableHighlight style={{position: 'absolute', top: 120, right: 250}} onPress={() => navigation.navigate('Home')} > 
                        <Image source={require('../assets/5.png')} style={{width: 90, height: 90}} />
                    </TouchableHighlight>
                    <TouchableHighlight style={{position: 'absolute', top: 50, right: 70}} onPress={() => navigation.navigate('Home')} > 
                        <Image source={require('../assets/6.png')} style={{width: 90, height: 90}} />
                    </TouchableHighlight>
                </ImageBackground>
                <StatusBar style="auto" />
            </View>
          </View>
    );
  };
  const styles = StyleSheet.create({
    text: {
        color: 'red'
    },
    center:{
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
    },
    container: {
      width: '100%',
      color: '#fff',
      //fontFamily: 'Arial'
    },
    submit: {
      marginRight: 40,
      marginLeft: 40,
      marginTop: 10,
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 10,
      borderWidth: 0,
      backgroundColor: '#0C9600',
      borderColor: 'green',
      borderWidth: 5,
      width: 220,
    },
    navBar: {
        backgroundColor: '#fcf9a8',
    },
    miniConteiner: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 20
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
  
export default LogroScreen