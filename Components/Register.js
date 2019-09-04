import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Button,Text, Form,Item,Input, Container} from 'native-base';

export default class Register extends Component{
  static navigationOptions = { header: null};
    render(){
        return(
            <Container style={{justifyContent:'center'}}>

                <Text style={styles.title}>Book</Text>
                <Form>
                    <Item>
                        <Input placeholder="Name" />
                    </Item>
                    <Item>
                        <Input placeholder="Email" />
                    </Item>
                    <Item last>
                        <Input placeholder="Password" />
                    </Item>
                </Form>

                <Button rounded
                onPress={() => this.props.navigation.navigate('Navigator')}
                style={{marginTop:30, justifyContent: "center",alignItems:"center",textAlign:'center'}}
                color="#694fad"
                >
                    <Text>Register</Text>
                </Button>

            </Container>

        )
    }
}

const styles = StyleSheet.create({

    title: {
        fontWeight: 'bold',
        fontSize : 40,
        color:'#694fad',
        alignItems:"center",
        textAlign:'center',
    },



})
