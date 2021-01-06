import React, { useState } from 'react';
import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { SearchBar, Button,Icon  } from "react-native-elements";
import MapView, { Marker } from 'react-native-maps';
import AppTitle from './AppTitle'


export default UserView = () => {

    InitialLocation = {

        latitude: 10.075886,
        longitude: -84.311031,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,

    }
    
    const [ texto,setTexto ] = useState('');
    const [ Location, setLocation ] = useState(InitialLocation);
    const [ MarkerTitle, setMarkerTitle ] = useState('Grecia-San Jose');
    const [ MarkerDescription, setMarkerDescription ] = useState('Terminal Grecia-San Jose');
    const changeTexto = text => {
        
        setTexto(text)
      
    }

    const Buscar = (busqueda) => {

        busqueda = texto;

        switch (busqueda) {

            case 'Alajuela':

            setLocation(

                {
                    latitude: 10.015338,
                    longitude: -84.216948,
                    latitudeDelta: 0.0004,
                    longitudeDelta:  0.0004,
                }
              
            );
            setMarkerTitle('TUASA');
            setMarkerDescription('Terminal TUASA San Jose');

            break;

            case 'Heredia':

                setLocation(

                    {
                        latitude: 9.9377878128526,
                        longitude: -84.07810832866322,
                        latitudeDelta: 0.0004,
                        longitudeDelta:  0.0004,
                    }
    
                );
                setMarkerTitle('Las Heredianas');
                setMarkerDescription('Terminal San Jose - Heredia');

            break;
            case 'Cartago':

                setLocation(

                    {
                        latitude: 9.86710875972481,
                        longitude: -83.92247691922537,
                        latitudeDelta: 0.0004,
                        longitudeDelta:  0.0004,
                    }
                    
                );
                setMarkerTitle('Terminal de Cartago');
                setMarkerDescription('Terminal de Cartago');

            break;
            case 'San Jose':

                setLocation(

                    {
                        latitude: 9.941324913914563,
                        longitude: -84.07911079544094,
                        latitudeDelta: 0.0004,
                        longitudeDelta:  0.0004,
                    }
                    , 
                );
                setMarkerTitle('Terminal los Caribeños, San Jose');
                setMarkerDescription('Terminal los Caribeños, San Jose');

            break;

        }


    }


return(

   
    <>
    <StatusBar></StatusBar>
   <View style={styles.main}>
<View style={flex= 1}></View>
<SearchBar containerStyle={styles.searchBar} 
searchIcon = {<Button 
    onPress={Buscar}
    icon={<Icon
        name='search-sharp'
        type='ionicon'
        color='#0b4199' 
        size={22} 
    />}
/>} 

placeholder="Digite la ruta a consultar."
onChangeText={changeTexto}
value={texto}>


</SearchBar>

<View style={styles.mapView}>
<MapView style={styles.map} 
initialRegion={InitialLocation}
region={Location}>

<MapView.Marker
coordinate={Location}
    title={MarkerTitle}
    description={MarkerDescription}
/>

</MapView>
</View>

</View>

<AppTitle  style={styles.test2}></AppTitle>

 </>



)

}

const styles = StyleSheet.create({



test2:{
    position:'absolute',
    top:'50%',

},

    main: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
    },
    searchBar:{
        position: 'relative',
        top: '5%',
      
    },

//..................MAP...................
    map: {
        width: '100%' ,
        height: '100%',
      },
      mapView : {
width: '100%',
height: '60%',
position:'relative',
top:'7%',
borderTopWidth: 7,
borderTopColor: "black",
borderBottomWidth: 7,
borderBottomColor: "black",
      },
//........................................

//............Bottom.....................

BottomView:{


position: 'absolute',
top: 100,


},


})