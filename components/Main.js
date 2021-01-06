import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import App from './App';
import UserView from './UserView';

const Main = createStackNavigator({

    INICIO: {screen:App},
    USUARIO: {screen:UserView},

});



export default createAppContainer(Main);    