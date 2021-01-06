import React from 'react';
import { StyleSheet, Text, View, Image,ImageBackground } from 'react-native';


export default AppTitle = () => {

return(

    <View style={styles.viewMain}>
    <ImageBackground source={require('../images/calle.png')} style={styles.titleBackground}>
    <Text style={styles.title}>
      <Text style={styles.blueLetters}>R</Text>
      <Text style={styles.blueLetters}>U</Text>
      <Text style={styles.whiteLetters}>T</Text>
      <Text style={styles.redLetters}>A</Text>
      <Text style={styles.whiteLetters}>B</Text>
      <Text style={styles.blueLetters}>U</Text>
      <Text style={styles.blueLetters}>S</Text>
      
      </Text>

    </ImageBackground>
      
  </View>
)
}

const styles = StyleSheet.create({



  //...................................................
  viewMain:{

    width:'100%',
    height: '10%', 

  },
  titleBackground:{
    
    resizeMode: 'stretch',
    width:'100%',
    height:'100%',
   
  },
 
  title:{
    fontSize: 45,
      
    fontWeight:'bold',
 
    marginTop:'auto',
    marginBottom:'auto',
    marginRight:'auto',
    marginLeft:'auto'

    
  
  },
  blueLetters : {
    color:'#0b4199',
  },
  redLetters : {
    color:'#fe0000',
  },
  whiteLetters : {
    color:'#ffffff',
  },
  //-----------------------------------------------------
})





