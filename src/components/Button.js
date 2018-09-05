import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = () => {

    const {buttonStyle, textStyle} = styles;

    return(
        <TouchableOpacity style={buttonStyle} onPress={addMenu}>
            <Text style={textStyle}> 
                Add Menu 
            </Text>
        </TouchableOpacity>
    );
};

const addMenu = () => {
    console.log(" Click the ADD MENU Button ");
    console.log("...........................");
}

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 5,
        paddingBottom: 10
    },
    buttonStyle:{
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
}

export default Button;