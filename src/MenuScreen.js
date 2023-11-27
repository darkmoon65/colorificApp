import { StyleSheet, Text, View, Image, TouchableHighlight, ImageBackground} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav';
import { Dimensions } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';

const MenuScreen = ({navigation}) => {
    const [selectPrimero, setSelectPrimero] = React.useState(false);
    const [Opcion, setOpcion] = React.useState(0);


    let checkResult = ()=> {
      if(Opcion == 3){
        navigation.navigate('FirstExplore')
      }
    }

    let mark = (item)=> {
      if(item == 3) setSelectPrimero(true), setOpcion(3);
    }
    return (
        <View>
            <NavBar style={styles}>
              <NavButton onPress={() =>  navigation.navigate('Home') }>
                  <NavButtonText style={styles.text} >
                    {"Home"}
                  </NavButtonText>
              </NavButton>
            </NavBar>
            <View style={styles.container}>
                <ImageBackground source={require('../assets/menuBien.png')} style={{width: 320, height: Dimensions.get('window').height / 1.5}}>
                    {
                      selectPrimero && (
                        <TouchableHighlight style={{position: 'absolute', top: 200, right: 240}} > 
                          <Image source={require('../assets/pincel.png')} style={{width: 50, height: 50}} />
                        </TouchableHighlight>
                      )
                    }
                    <TouchableHighlight style={{position: 'absolute', top: 290, right: 200}} onPress={() => mark(3)} > 
                        <Text style={{color: 'white', fontSize:25}}> Vermillion </Text>
                    </TouchableHighlight>
                </ImageBackground>
                <StatusBar style="auto" />
            </View>
            <View style={styles.center}>
              <TouchableHighlight style={styles.submit} onPress={() => checkResult()} > 
                <LinearGradient  
                start={{x:0.5, y:0}} end={{x:0.5, y:1}} 
                locations={[0, 1]} colors={[ '#2fb005','black']} 
                        style={styles.gradient}>
                  <Text style={styles.submitText }>Aprender</Text>
                </LinearGradient>  
              </TouchableHighlight>
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
      padding: 50,
      color: '#fff',
      //fontFamily: 'Arial'
    },
    submit: {
      marginRight: 40,
      marginLeft: 40,
      marginTop: 10,
      paddingTop: 30,
      paddingBottom: 10,
      borderRadius: 10,
      borderWidth: 0,
      backgroundColor: '#2fb005',
      borderColor: '#1f7802',
      borderWidth: 5,
      width: 220,
      overflow: 'hidden', 
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',  
          
    },
    gradient:{
      marginTop: 10,
      flex: 10,
      height: 50,
      ...StyleSheet.absoluteFill,
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
      fontWeight: 'bold',
      backgroundColor: 'transparent',

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
  
export default MenuScreen