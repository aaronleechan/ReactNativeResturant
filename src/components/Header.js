// Import Libraries for making component
// Make Component
//Make the component available to other part of the app

import React from 'react';
import {Text, View, Image} from 'react-native';
import Button from './Button'

const Header  = (props) => {

    return(
        <View style = {styles.viewStyle}>
            <Image style={styles.imageStyle} source={require('../images/aaronlogo.jpg')} />
            <Text style={styles.textStyle}>{props.name} Home Page</Text>
            <Button/>
        </View>
    )
};

const styles = {
    viewStyle: {
        backgroundColor: 'powderblue',
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2
    },
    textStyle: {
        fontSize: 16
    },
    imageStyle: {
        justifyContent: 'center',
        height: 40,
        width: 40,
        paddingTop: 15,
    }
}

export default Header;