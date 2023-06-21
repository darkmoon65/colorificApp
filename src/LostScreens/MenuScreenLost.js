import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const MenuScreen = ({navigation}) => {
    return (
  
      <View style={styles.container}>
        <Text style={styles.menuTitle}>Menú</Text>
          <View style={styles.miniConteiner}>
  
          <TouchableHighlight style={styles.submit2} onPress={() => navigation.navigate('Explore')} > 
          <Image source={require('../../assets/explore.png')} style={{width: 100, height: 100}} />
          </TouchableHighlight>
           <View style={styles.menuItems}>
              <Text style={styles.menuItem1}>Explore</Text>
              <Text style={styles.menuItem2}>(Explorar)</Text>
           </View>
          </View>
          <View style={styles.miniConteiner}>
            <TouchableHighlight style={styles.submit2} onPress={() => navigation.navigate('Practice')} > 
              <Image source={require('../../assets/combine.png')} style={{width: 100, height: 100}} />  
            </TouchableHighlight>
            <View style={styles.menuItems}>
              <Text style={styles.menuItem1}>Combine</Text>
              <Text style={styles.menuItem2}>(Combinar)</Text>
            </View>
          </View>
          <View style={styles.miniConteiner}>
            <TouchableHighlight style={styles.submit2} onPress={() => navigation.navigate('Explore')} > 
              <Image source={require('../../assets/evaluate.png')} style={{width: 100, height: 100}} /> 
            </TouchableHighlight>
           
            <View style={styles.menuItems}>
              <Text style={styles.menuItem1}>Evaluate</Text>
              <Text style={styles.menuItem2}>(Evaluar)</Text>
            </View>
          </View>
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