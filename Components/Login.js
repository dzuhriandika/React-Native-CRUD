import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Button,Text, Form, Item, Input, Container} from 'native-base';

export default class Login extends Component{
    static navigationOptions = { header: null};
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  _signUp = async () => {
    const { email, password } = this.state;
    const params = { email, password };
    try {
      const result = await ENDPOINT.login(params);
      const myJSON = JSON.stringify(params);
      alert(myJSON);
      console.log({ result });
      if (result.token.length > 0) {
        this.props.navigation.navigate('Navigator');
      } else {
        ToastAndroid.show('Failed to login', ToastAndroid.SHORT);
      }
    } catch (error) {
      ToastAndroid.show('error.networkError', ToastAndroid.SHORT);
    }
  };
    render(){
        return(

            <Container style={{justifyContent: "center"}}>

                <Text style={styles.title}>Book</Text>
                <Form style={{marginTop:50}}>
                    <Item>
                        <Input placeholder="Email" />
                    </Item>
                    <Item last>
                        <Input placeholder="Password" />
                    </Item>
                </Form>

                <Button rounded 
                onPress={() => this.props._signIn}
                style={{marginTop:30, justifyContent: "center",alignItems:"center",textAlign:'center'}}
                color='#694fad'
                >
                        <Text>Login</Text>
                </Button>

                <Button small transparent
                onPress={() => this.props._signUp} 
                style={{alignItems:'center',textAlign:'center',justifyContent:'center'}}
                >
                        <Text style={{color:'#694fad'}}>or Register</Text>
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
