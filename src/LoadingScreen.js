import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const LoadingScreen = ({navigation}) => {
    return (
  
      <View style={styles.container}>
          <Image source={require('../assets/logo.png')} style={{width: 300, height: 120}} />
          <TouchableHighlight style={styles.submit} onPress={() => navigation.navigate('Home')} > 
            <Text style={styles.submitText}>Empezar</Text>
          </TouchableHighlight>
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
    },
    submit: {
      marginRight: 40,
      marginLeft: 40,
      marginTop: 10,
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 100,
      borderWidth: 1,
      backgroundColor: 'green',
      borderColor: "#fff",
      width: 120,
    },
    submitText: {
      color:'white',
      textAlign: 'center'
    }
  });
  
export default LoadingScreen