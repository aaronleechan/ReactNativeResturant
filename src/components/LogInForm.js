import React, {Component} from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase'



class LogInForm extends Component{

    state = { email: '', password: '', error: '', loading: false};

    onButtonPress(){
        const { email, password } = this.state;
        this.setState({error: '', loading: true});
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(this.onLoginSuccess.bind(this))
            .catch( () => {
                firebase.auth().createUserWithEmailAndPassword(email,password)
                .then(this.onLoginSuccess.bind(this))
                .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginFail(){
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: 'Authentication Failed'
        });
    }

    onLoginSuccess(){
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    onButtoGooglePress(){
        console.log( " GOOGLE SIGN IN ");
    }

    renderButton(){
        if(this.state.loading){
            return <Spinner size="small" />
        }
        return(
            <Button onPress={this.onButtonPress.bind(this)} label="Log In"/>
        );
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                        value={this.state.email}
                        onChangeText={email => this.setState({email})}
                        style={{height: 20, width: 100}} 
                        label="Email"
                        placeholder = "email"
                    />
                </CardSection>
                
                <CardSection>
                    <Input
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}
                        style={{height: 20, width: 100}} 
                        label="Password"
                        placeholder = "password"
                        secureTextEntry
                    />
                </CardSection>

                <Text style={styles.errorTextStyles}>{this.state.error}</Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}




const styles = {
    errorTextStyles:{
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}
export default LogInForm