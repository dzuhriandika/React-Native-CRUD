import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput,Button,Image} from 'react-native';

export default class Login extends Component{
  static navigationOptions = { header: null};
    render(){
        return(
            <View style={styles.container}>

                <Text style={styles.title}>Book</Text>
                <TextInput
                    style={{height: 40,marginTop:50}}
                    placeholder="Email"
                    onChangeText={(text) => this.setState({text})}
                />

                <TextInput
                    style={{height: 40}}
                    secureTextEntry
                    placeholder="Password"
                    onChangeText={(text) => this.setState({text})}
                />

                <Button
                onPress={() => this.props.navigation.navigate('Navigator')} title="Navigator"
                title="Login"
                color="red"
                />

                <Button
                onPress={() => this.props.navigation.navigate('Register')} 
                style={{height: 40,marginTop:20}}
                title="Register"
                title="Register"
                color="green"
                />
            </View>

        )
    }
}

const styles = StyleSheet.create({

    title: {
        fontWeight: 'bold',
        fontSize : 40,
        color:'blue',
        alignItems:"center",
        marginTop:170,
        textAlign:'center',
    },



})