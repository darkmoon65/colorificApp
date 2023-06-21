import { StyleSheet, Text, View, Image, TouchableHighlight, ImageBackground} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import { Dimensions } from 'react-native'

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
                        <Image source={require('../assets/pincel.jpg')} style={{width: 30, height: 30}} />
                    </TouchableHighlight>
                    <TouchableHighlight style={{position: 'absolute', top: 290, right: 230}} onPress={() => navigation.navigate('Practice')} > 
                        <Image source={require('../assets/pincel.jpg')} style={{width: 30, height: 30}} />
                    </TouchableHighlight>
                    <TouchableHighlight style={{position: 'absolute', top: 490, right: 230}} onPress={() => navigation.navigate('Home')} > 
                        <Image source={require('../assets/pincel.jpg')} style={{width: 30, height: 30}} />
                    </TouchableHighlight>
                    <TouchableHighlight style={{position: 'absolute', top: 90, right: 100}} onPress={() => navigation.navigate('Home')} > 
                        <Image source={require('../assets/pincel.jpg')} style={{width: 30, height: 30}} />
                    </TouchableHighlight>
                    <TouchableHighlight style={{position: 'absolute', top: 290, right: 100}} onPress={() => navigation.navigate('Home')} > 
                        <Image source={require('../assets/pincel.jpg')} style={{width: 30, height: 30}} />
                    </TouchableHighlight>
                    <TouchableHighlight style={{position: 'absolute', top: 490, right: 100}} onPress={() => navigation.navigate('Home')} > 
                        <Image source={require('../assets/pincel.jpg')} style={{width: 30, height: 30}} />
                    </TouchableHighlight>
                </ImageBackground>
                <StatusBar style="auto" />
            </View>
            <View style={styles.center}>
              <TouchableHighlight style={styles.submit} onPress={() => navigation.navigate('FirstExplore')} > 
                <Text style={styles.submitText}>Aprender</Text>
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
      padding: 20,
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
      backgroundColor: 'green',
      borderColor: "#fff",
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
    }
  });
  
export default MenuScreen