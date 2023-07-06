import { StyleSheet, Text, View, Image, TouchableHighlight, ImageBackground, Modal, Pressable, Alert} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav';
import { Dimensions } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {LinearGradient} from 'expo-linear-gradient';

const LogroScreen = ({route, navigation}) => {

    useEffect(() => {  
          setTimeout(() => {
            navigation.navigate('Home')
          }, 4000);
        }, []
    )

    return (
        <View>
            <View style={styles.container}>
                <ImageBackground source={require('../assets/final.png')} style={{width: '100%', height: Dimensions.get('window').height / 0.9}}>
                    <View style={styles.center}>
                        <View style={styles.submit}>
                            <Text style={styles.submitText}>VERMILLION</Text>
                        </View>
                        
                        <View style={styles.submit}>
                            <Text style={styles.submitText}>COMPLETED</Text>
                        </View>
                    </View>
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
      flex: 1,
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
      marginTop: 40,
      marginBottom: 40,
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
        textAlign: 'center',
        fontSize: 30,
        letterSpacing: 2
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