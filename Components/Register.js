import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Button} from 'native-base';

export default class Register extends Component{
  static navigationOptions = { header: null};
    render(){
        return(
            <View style={styles.container}>

                <Text style={styles.title}>Book</Text>
                <TextInput
                    style={{height: 40,marginTop:50}}
                    placeholder="Name"
                    onChangeText={(text) => this.setState({text})}
                />

                <TextInput
                    style={{height: 40}}
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