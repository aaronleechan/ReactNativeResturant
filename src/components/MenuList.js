import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import axios from 'axios';
import firebase from '../../firebase_setup';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import MenuListDetail from './MenuListDetail';
import { ScrollView } from 'react-native';
import { Button } from './common/Button';

class MenuList extends Component{

    constructor(){
        super();
        this.state = {
            menu: []
        }
    }

        componentWillMount(){
        firebase.database().ref('resturants/resturantuniquekey/menu').once('value',(data) => {
            this.setState({menu: data.toJSON()})
        })
    }

    renderMenuList(value){
        return Object.keys(value).map(index =>
            <MenuListDetail key={index} food={value[index]} />
        )
    }

    render(){
        return(
            <ScrollView>
                {this.renderMenuList(this.state.menu)}
                <Button label="ADD Menu"/>
            </ScrollView>
        )
    }
}

const styles = {

    foodnameStyle: {
        fontSize: 25,
        textAlign: 'left',
        paddingLeft: 1000
    },
    foodpriceStyle:{
        fontSize: 25,
    },
}

export default MenuList;