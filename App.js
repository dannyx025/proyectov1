import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

export default function App() {

  
  return (
    <>
    <StatusBar style="auto" />
    <Image source={require('./images/LogoPrograma.png')} style={styles.LogoImage}></Image>
    <View >
      <Image source={require('./images/calle.png')} style={styles.titleBackground}></Image>
        <Text style={styles.title}>
        <Text style={styles.blueLetters}>R</Text>
        <Text style={styles.blueLetters}>U</Text>
        <Text style={styles.whiteLetters}>T</Text>
        <Text style={styles.redLetters}>A</Text>
        <Text style={styles.whiteLetters}>B</Text>
        <Text style={styles.blueLetters}>U</Text>
        <Text style={styles.blueLetters}>S</Text>
        
        </Text>
    </View>
    <View style={styles.ButtonView}>

    <TouchableOpacity style={styles.button} onClick={alert('Bienvenido')}>
      <Text style={styles.buttonText} >USUARIO</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.button,styles.button2]} >
      <Text style={styles.buttonText }>CHOFER</Text>
    </TouchableOpacity>
    </View>
  <View style={styles.Footer}>
<Image source={require('./images/Estadio.png')} style={styles.BottomImage}></Image>
  </View>
    </>
  );
}





const styles = StyleSheet.create({
  LogoImage: {
    
    flex:1,
    resizeMode: 'stretch',
    width: '100%',
    maxHeight:'30%',
    position:'relative',
    top:'0%',
    left:'0%',


  },
  titleBackground:{
    marginTop:'12%',
    resizeMode: 'stretch',
    maxWidth:'100%',
    maxHeight:'40%',

  },
 
  title:{
    fontSize: 45,
    position: 'relative',
    textAlign: "center",
    top: '-35%',
    fontWeight:'bold',
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

 
  button : {
    
    width: 180,
    height: 55,
    backgroundColor: '#fe0000',
    position: 'relative',
 marginLeft: 'auto',
 marginRight: 'auto',
top: '8%', 
    borderRadius: 32,
    textAlign: 'center',
  
   
     //-------------Box Shadow----------------------------

     shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 7,
},
shadowOpacity: 0.41,
shadowRadius: 9.11,
elevation: 14,

     //---------------------------------------------------

   
  
    

  //-----------------------------------------------------
    },
  
    button2: {

top: '10%',

    },
    PressedButton:{
      backgroundColor:'#0b4199',

    },

    buttonText:{

        flex: 1,
        marginLeft: 'auto',
        marginRight:'auto',
      color: '#ffffff',
        fontSize: 30,
        fontWeight: '300',
       position:'relative',
       top: '10%',
    
    },
    ButtonView:{
      width: '100%',
      height: '50%',
      position: 'absolute',
      bottom: '0%',

      flex: 1,

    },

    Footer:{

      position:'absolute',
      bottom:'0%',
      left:'0%',
      width : '100%',
      height:'50%',
    },
    BottomImage:{

     
    resizeMode: 'stretch',
    width: '100%',
    maxHeight:'25%',
    position:'absolute',
    bottom:'0%',
    left:'0%',


    },

  });
