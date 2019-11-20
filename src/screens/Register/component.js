import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Body,
  Title,
  Right,
  Button,
  Text,
} from 'native-base';
import Style from './styles';
import {SwitchActions} from 'react-navigation';
export default class FormExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
    this.register = this.register.bind(this);
  }
  register = async () => {
    this.props.navigation.dispatch(SwitchActions.jumpTo({routeName: 'Home'}));
  };
  render() {
    const {name, email, password} = this.state;
    return (
      <Container padder>
        <Header>
          <Body>
            <Title>Register</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <Item>
              <Input
                placeholder="Name"
                value={name}
                onChangeText={value => this.setState({name: value})}
              />
            </Item>
            <Item>
              <Input
                placeholder="Email"
                value={email}
                onChangeText={value => this.setState({email: value})}
              />
            </Item>
            <Item>
              <Input
                placeholder="Password"
                value={password}
                secureTextEntry={true}
                onChangeText={value => this.setState({password: value})}
              />
            </Item>
            <Button
              block
              style={[Style.mt_2, Style.my_1]}
              onPress={this.register}>
              <Text>Register</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
