//Import a library to help create a component
import React from 'react';
import { View, Text, AppRegistry } from 'react-native';
import { Header } from './Header'; 
import MenuList from './MenuList';
import AddMenu from './AddMenu';
import { createStackNavigator} from 'react-navigation';
import CreateMenu from './CreateMenu';

const LoggedInPage = () => {
    return (
        <View style={{ flex: 1 }}>
            <Header name={'Aarlic Resturant Page'} />
            <AddMenu/>
            <MenuList/>
        </View>
    );
};

export default LoggedInPage;