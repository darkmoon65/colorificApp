import { StyleSheet, Text, View, Image, TouchableHighlight, ImageBackground} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav';
import { Dimensions } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';

const MenuScreen = ({navigation}) => {
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
                <ImageBackground source={require('../assets/back_menu.jpg')} style={{width: '100%', height: Dimensions.get('window').height / 1.5}}>
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
                    <TouchableHighlight style={{position: 'absolute', top: 290, right: 100}} onPress={() => navigation.navigate('Home')} > 
                        <Image source={require('../assets/pincel.png')} style={{width: 30, height: 30}} />
                    </TouchableHighlight>
                    <TouchableHighlight style={{position: 'absolute', top: 490, right: 100}} onPress={() => navigation.navigate('Home')} > 
                        <Image source={require('../assets/pincel.png')} style={{width: 30, height: 30}} />
                    </TouchableHighlight>
                </ImageBackground>
                <StatusBar style="auto" />
               
                <LottieView //IMÁGENES DE LOTTIE 
                source={require('../assets/lottie/guinoEmoji.json')} 
                autoPlay
                loop
                />
            </View>
            <View style={styles.center}>
              <TouchableHighlight style={styles.submit} onPress={() => navigation.navigate('FirstExplore')} > 
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