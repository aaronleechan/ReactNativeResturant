//Import a library to help create a component
import React from 'react';
import { View, Text, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import MenuList from './src/components/MenuList';
import AddMenu from './src/components/AddMenu';


// create a component
const App = () => {
    return (
        <View>
            <Header name={'Aarlic'} />
            <AddMenu/>
            <MenuList/>
        </View>
    );
};

//Render it to the device
AppRegistry.registerComponent('resturantOwner', () => App);