import React, {Component} from 'react';
import {Text, View, Image, Button, StyleSheet} from 'react-native';
import axios from 'axios';
import firebase from '../../firebase_setup';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

class AddMenu extends Component{

    constructor(props){
        super(props);
    }

    componentWillMount(){
        console.log("Component will mount ");
        console.log(firebase)

        // const doc = firebase.doc('react-native-resturants');
        // const data = {
        //     foodingredient: 'This is a special',
        //     foodimage: '',
        //     foodname: 'Scret Menu',
        //     foodprice: 12
        // };
        // doc.set(data);;

        // firebase.database().ref('resturants/resturantuniquekey/menu/003').set({
        //     foodingredient: 'This is a special',
        //     foodimage: 'nothing',
        //     foodname: 'Orange Chicken',
        //     foodprice: 7
        // }).then(() => {
        //     console.log("Inserted");
        // }).catch((error) => {
        //     console.log(error);
        // });
        // firebase.database().ref('resturants/resturantuniquekey/menu').push(data)

    }

    

    render(){
        return(
            <View>
                {/* <Button  title="Add Menu" color="#841584" /> */}
            </View>
        );
    }
}
export default AddMenu;