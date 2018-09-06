import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = (props) => {
    return(
        <View style={styles.containerStyles}>
            <Text style={styles.labelStyles}>{props.label}</Text>
            <TextInput style={styles.inputStyles}
                secureTextEntry={props.secureTextEntry}
                value={props.value}
                autoCorrect={false}
                onChangeText={props.onChangeText}
                placeholder = {props.placeholder}
            />
        </View>
    );
};

const styles = {
    inputStyles: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyles: {
        fontSize: 18,
        paddingLeft: 10,
        flex: 1,
    },
    containerStyles:{
        flex: 1,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center'
    },
}

export { Input }