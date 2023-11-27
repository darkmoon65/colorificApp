import { StyleSheet, Text, View, Image, TouchableHighlight, ImageBackground, Modal, Pressable, Alert} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav';
import { Dimensions } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {LinearGradient} from 'expo-linear-gradient';

const LogroScreen = ({route, navigation}) => {
    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);
    const [modalVisible4, setModalVisible4] = useState(false);
    const [modalVisible5, setModalVisible5] = useState(false);
    const [modalVisible6, setModalVisible6] = useState(false);

    useFocusEffect( React.useCallback(() => {  
        console.log(route.params.Intento)
        if ( route.params.Intento == 1 ){
          setModalVisible1(true)
          setTimeout(() => {
            setModalVisible1(false)
            setModalVisible2(false)
            setModalVisible3(false)
            setModalVisible4(false)
            setModalVisible5(false)
            setModalVisible6(false)
            navigation.navigate('SecondExplore')
          }, 4000);
        }
        if ( route.params.Intento == 2 ){
          setModalVisible2(true)
          setTimeout(() => {
            setModalVisible1(false)
            setModalVisible2(false)
            setModalVisible3(false)
            setModalVisible4(false)
            setModalVisible5(false)
            setModalVisible6(false)
            navigation.navigate('ThirdExplore')
          }, 4000);
        }
        if ( route.params.Intento == 3 ){
          setModalVisible3(true)
          setTimeout(() => {
            setModalVisible1(false)
            setModalVisible2(false)
            setModalVisible3(false)
            setModalVisible4(false)
            setModalVisible5(false)
            setModalVisible6(false)
            navigation.navigate('QuarterExplore')
          }, 4000);
        }
        if ( route.params.Intento == 4 ){
          setModalVisible4(true)
          setTimeout(() => {
            setModalVisible1(false)
            setModalVisible2(false)
            setModalVisible3(false)
            setModalVisible4(false)
            setModalVisible5(false)
            setModalVisible6(false)
            navigation.navigate('QuintaExplore')
          }, 4000);
        }
        if ( route.params.Intento == 5 ){
          setModalVisible5(true)
          setTimeout(() => {
            setModalVisible1(false)
            setModalVisible2(false)
            setModalVisible3(false)
            setModalVisible4(false)
            setModalVisible5(false)
            setModalVisible6(false)
            navigation.navigate('LastExplore')
          }, 4000);
        }
        if ( route.params.Intento == 6 ){
          setModalVisible6(true)
          setTimeout(() => {
            setModalVisible1(false)
            setModalVisible2(false)
            setModalVisible3(false)
            setModalVisible4(false)
            setModalVisible5(false)
            setModalVisible6(false)
            navigation.navigate('Ganador')
          }, 4000);
        }

        }
    , [route.params.Intento])
    )
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
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible1}
            >
              <View style={{position: 'absolute', top: 630, right: 100}}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Activity 1/6 </Text>
                  <Text style={styles.modalText}>Listening and Speaking </Text>
                </View>
              </View>
            </Modal>

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible2}
            >
              <View style={{position: 'absolute', top: 490, right: 150}}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Activity 2/6 </Text>
                  <Text style={styles.modalText}>Listening and Speaking </Text>
                </View>
              </View>
            </Modal>

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible3}
            >
              <View style={{position: 'absolute', top: 350, right: 100}}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Activity 3/6 </Text>
                  <Text style={styles.modalText}>Listening and Speaking </Text>
                </View>
              </View>
            </Modal>

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible4}
            >
              <View style={{position: 'absolute', top: 250, right: 100}}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Activity 4/6 </Text>
                  <Text style={styles.modalText}>Listening and Speaking </Text>
                </View>
              </View>
            </Modal>

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible5}
            >
              <View style={{position: 'absolute', top: 120, right: 100}}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Activity 5/6 </Text>
                  <Text style={styles.modalText}>Listening and Speaking </Text>
                </View>
              </View>
            </Modal>

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible6}
            >
              <View style={{position: 'absolute', top: 50, right: 100}}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Activity 6/6 </Text>
                  <Text style={styles.modalText}>Listening and Speaking </Text>
                </View>
              </View>
            </Modal>


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
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 10,
      backgroundColor: '#fcf9a8',
      borderRadius: 20,
      padding: 20,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    }
  });
  
export default LogroScreen