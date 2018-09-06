import React, {Component} from 'react';
import {Text, View, Image, Button, StyleSheet} from 'react-native';
import axios from 'axios';
import firebase from '../../firebase_setup';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

class CreateMenu extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Text> Create Menu </Text>
            </View>
        );
    }
}

export default CreateMenu;