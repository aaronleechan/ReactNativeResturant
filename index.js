//Import a library to help create a component
import React from 'react';
import { View, Text, AppRegistry } from 'react-native';
import { Header } from './src/components/common/Header';
import MenuList from './src/components/MenuList';
import AddMenu from './src/components/AddMenu';
import { createStackNavigator} from 'react-navigation';
import CreateMenu from './src/components/CreateMenu';
import App from './src/components/App';

// const App = () => {
//     return (
//         <View style={{ flex: 1 }}>
//             <Header name={'Aarlic Resturant Page'} />
//             <AddMenu/>
//             <MenuList/>
//         </View>
//     );
// };

//Render it to the device
AppRegistry.registerComponent('resturantOwner', () => App);