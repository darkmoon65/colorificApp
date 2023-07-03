import { Audio } from 'expo-av';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, TouchableHighlight, ImageBackground, Text, TextInput, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'

const FirstExploreScreen = ({navigation}) => {
    const [sound, setSound] = React.useState();
    // Data input
    const [item1, setItem1] = useState("");
    const [item2, setItem2] = useState("");
    const [item3, setItem3] = useState("");
    const [item4, setItem4] = useState("M");
    const [item5, setItem5] = useState("");
    const [item6, setItem6] = useState("");
    const [item7, setItem7] = useState("");
    const [item8, setItem8] = useState("I");
    const [item9, setItem9] = useState("");
    const [item10, setItem10] = useState("");
    const [ocultarTexto, setOcultarTexto] = useState(true);

    let checkWrite = async (last) => {
      setItem10(last)
      var escrito = item1 + item2 + item3 + item4 +item5 + item6 +item7 + item8 + item9 + last

      console.log(escrito)
      if(escrito == "VERMILLION" ) {
        setItem1("");
        setItem2("");
        setItem3("");
        setItem5("");
        setItem6("");
        setItem7("");
        setItem9("");
        setItem10("");
        setOcultarTexto(true);

        navigation.navigate('Logro')
      }
    }
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
    let pressInputOpen = () => {
      console.log("start")
      setOcultarTexto(false)
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
            {
              ocultarTexto && (
                <View style={styles.center}>
                  <TouchableHighlight style={styles.submit} onPress={() => navigation.navigate('FirstExplore')} > 
                    <Text style={styles.submitText}>VERMILLION</Text>
                  </TouchableHighlight>
                  <View style={{paddingTop: 15}}>
                    <Text style={{fontSize: 25}}>Pronunciación: /vɚˈmɪl.jən/</Text>
                  </View>
                  <View style={{paddingTop: 15}}>
                    <Text style={{fontSize: 25}}>Traducción: Bermellón</Text>
                  </View>
                </View>
              )
            }        
            <View style={styles.imagenAudio}>
              <Image source={require('../assets/vermi.png')} style={{width: '60%', height: '100%'}}>
              </Image>
              <View style={{paddingTop:60, paddingLeft:30}}>
                <TouchableHighlight
                  onPress={ () => onPress('yellow')} > 
                  <Image source={require('../assets/sound.png')} style={{width: 50, height: 50}} />
                </TouchableHighlight>
              </View>
            </View>
            <View style={styles.center}>
              <View style={styles.oneLine}>
                <View> 
                  <TextInput style={styles.input}  maxLength={1} value={item1} onChangeText={(value) => setItem1(value)} onTouchStart={()=> pressInputOpen() } /> 
                </View>
                <View> 
                  <TextInput style={styles.input}  maxLength={1} value={item2} onChangeText={(value) => setItem2(value)} onTouchStart={()=> pressInputOpen() }/> 
                </View>
                <View> 
                  <TextInput style={styles.input}  maxLength={1} value={item3} onChangeText={(value) => setItem3(value)} onTouchStart={()=> pressInputOpen() }/> 
                </View>
                <View> 
                  <Text style={styles.inputStatic}> M </Text> 
                </View>
                <View> 
                  <TextInput style={styles.input}  maxLength={1} value={item5} onChangeText={(value) => setItem5(value)} onTouchStart={()=> pressInputOpen() }/> 
                </View>
                <View> 
                  <TextInput style={styles.input}  maxLength={1} value={item6} onChangeText={(value) => setItem6(value)} onTouchStart={()=> pressInputOpen() }/> 
                </View>
                <View> 
                  <TextInput style={styles.input}  maxLength={1} value={item7} onChangeText={(value) => setItem7(value)} onTouchStart={()=> pressInputOpen() }/> 
                </View>
                <View> 
                  <Text style={styles.inputStatic}> I </Text> 
                </View>
                <View> 
                  <TextInput style={styles.input}  maxLength={1} value={item9} onChangeText={(value) => setItem9(value)} onTouchStart={()=> pressInputOpen() }/> 
                </View>
                <View> 
                  <TextInput style={styles.input}  maxLength={1} value={item10} onChangeText={(value) => checkWrite(value)} onTouchStart={()=> pressInputOpen() }/> 
                </View>
              </View>
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
  
  export default FirstExploreScreen