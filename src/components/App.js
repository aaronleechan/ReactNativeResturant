import React, {Component} from 'react';
import { View, Text } from 'react-native';
import {Header,Button, CardSection, Card, Spinner} from './common';
import firebase_setup from '../../firebase_setup';
import LogInForm from './LogInForm';
import firebase from 'firebase';
import AddMenu from './AddMenu';
import MenuList from './MenuList';



class App extends Component{

    state = { loggedIn: null};

    componentWillMount(){
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({ loggedIn: true});
            }else{
                this.setState({ loggedIn: false});
            }
        });
    }

    renderContent(){

        switch(this.state.loggedIn){
            case true:
                return(
                    <View>
                        <Button onPress={() => firebase.auth().signOut()} label="Log Out" />
                        <AddMenu/>
                        <MenuList/>
                    </View>
                );
            case false:
                return<LogInForm/>
            default:
                return<Spinner size="large"/>
        }
    }

    render(){
        return(
        <View style={{ flex: 1 }}>
            <Header name={'Aarlic Resturant Page'} userState={this.state.loggedIn} />
            {this.renderContent()}
        </View>
        );
    }
}

export default App;