import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import AppTitle from './AppTitle';


export default function App(props) {

  const OpenScreen  = () => {

    props.navigation.navigate('USUARIO');

  }


    return (
    <View style={styles.mainView}>
    <StatusBar style="auto" />
    <Image source={require('../images/LogoPrograma.png')} style={styles.LogoImage}></Image>
    <View style={styles.space}></View>
     <AppTitle></AppTitle>
    
    
    <View style={styles.ButtonView}>

    <TouchableOpacity style={styles.button} onPress={OpenScreen}>
      <Text style={styles.buttonText} >USUARIO</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.button,styles.button2]} >
      <Text style={styles.buttonText }>CHOFER</Text>
    </TouchableOpacity>
    </View>
  <View style={styles.Footer}>

  </View>
    </View>
    );
}





const styles = StyleSheet.create({
  
  space:{
width: '100%',
height: '5%',

  },

  mainView:{

    width: '100%',
    height:'100%',


  },

  LogoImage: {
    
    flex:1,
    resizeMode: 'stretch',
    width: '100%',
    maxHeight:'40%',
    position:'relative',
    top:'0%',
    left:'0%',


  },



 
  button : {
    
    width: 180,
    height: 55,
    backgroundColor: '#fe0000',
    position: 'relative',
 marginLeft: 'auto',
 marginRight: 'auto',
top: '25%', 
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

top: '30%',

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
