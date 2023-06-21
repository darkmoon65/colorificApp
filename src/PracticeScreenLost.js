import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const PracticeScreen = ({navigation}) => {
    return (
  
      <View style={styles.container}>
        <Text style={{fontSize:38}}>Combine your colors</Text>
        <Text style={{fontSize:20}}>(Combina tus colores)</Text>
          <View style={styles.miniConteiner}>
            <View style={{paddingLeft: 30, width: 180, alignItems: 'center'}}>
                <Text style={{fontSize:28}}>Primary Colors</Text>
                <Text style={{fontSize:18}}>(Colores primarios)</Text>
            </View>
            <View style={{paddingLeft: 30, width: 180, alignItems: 'center'}}>
                <Text style={{fontSize:28}}>Secondary Colors</Text>
                <Text style={{fontSize:18}}>(Colores secundarios)</Text>
            </View>
          </View>
          <View style={styles.miniConteiner}>
            <TouchableHighlight style={[styles.color_red, {backgroundColor: 'red'}]} onPress={() => {}} > 
              <Text style={styles.color_white}>Red</Text>
            </TouchableHighlight>
            <TouchableHighlight style={[styles.color_green, {backgroundColor: 'green'}]} onPress={() => {}} > 
              <Text style={styles.color_white}>Green</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.miniConteiner}>
          <TouchableHighlight style={[styles.color_red, {backgroundColor: 'yellow'}]} onPress={() => {}} > 
              <Text style={styles.color_black}>Yellow</Text>
            </TouchableHighlight>
            <TouchableHighlight style={[styles.color_green, {backgroundColor: 'orange'}]} onPress={() => {}} > 
              <Text style={styles.color_white}>Orange</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.miniConteiner}>
          <TouchableHighlight style={[styles.color_red, {backgroundColor: 'blue'}]} onPress={() => {}} > 
              <Text style={styles.color_white}>Blue</Text>
            </TouchableHighlight>
            <TouchableHighlight style={[styles.color_green, {backgroundColor: 'purple'}]} onPress={() => {}} > 
              <Text style={styles.color_white}>Purple</Text>
            </TouchableHighlight>
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
    color_red: {
      borderRadius: 100,
      borderWidth: 1,
      borderColor: "black",
      width: 100,
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
      marginRight: 20
    },
    color_green: {
      borderRadius: 100,
      borderWidth: 1,
      borderColor: "black",
      width: 100,
      justifyContent: 'center',
      alignItems: 'center',
      height: 100
    },
    color_white: {
      color: 'white',
      fontSize: 25
    },
    color_black: {
      color: 'black',
      fontSize: 25
    }
  });
  
export default PracticeScreen