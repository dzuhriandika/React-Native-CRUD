/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {AsyncStorage, ScrollView} from 'react-native';
import {
  Container,
  Header,
  Content,
  Button,
  Body,
  Title,
  Right,
  Icon,
  Text,
  Left,
  List,
  ListItem,
  Fab,
  Spinner,
} from 'native-base';
import axios from 'axios';
import {StackActions} from 'react-navigation';
export default class Single extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoading: true,
    };
    this.getItems = this.getItems.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }
  componentDidMount() {
    this.getItems();
  }
  getItems = () => {
    axios
      .get('http://ec2-3-81-168-96.compute-1.amazonaws.com/api/materi')
      .then(res => {
        this.setState({
          items: res.data.data,
          isLoading: false,
        });
      })
      .catch(err => console.log(err));
  };
  singlePost = id => {
    const pushAction = StackActions.push({
      routeName: 'Single',
      params: {
        id: id,
      },
    });
    this.props.navigation.dispatch(pushAction);
  };
  addPost = () => {
    const pushAction = StackActions.push({
      routeName: 'Add',
      params: {
        handlePost: this.handlePost,
      },
    });
    this.props.navigation.dispatch(pushAction);
  };
  handlePost = async payload => {
    const token = await AsyncStorage.getItem('access_token');
    this.setState({isLoading: true});
    this.props.navigation.dispatch(StackActions.popToTop());
    axios
      .post(
        'http://ec2-3-81-168-96.compute-1.amazonaws.com/api/materi',
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then(res => {
        const newData = this.state.items.concat(res.data.data);
        this.setState({
          items: newData,
          isLoading: false,
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          isLoading: false,
        });
      });
  };
  renderItem = () => {
    if (this.state.isLoading) {
      return <Spinner />;
    } else {
      const listItem = this.state.items.map(data => (
        <ListItem key={data.uuid} icon style={{marginVertical: 10}}>
          <Left />
          <Body>
            <Text>{data.title}</Text>
          </Body>
          <Right>
            <Button
              style={{backgroundColor: '#007AFF'}}
              onPress={() => this.singlePost(data.uuid)}>
              <Icon active name="arrow-forward" />
            </Button>
          </Right>
        </ListItem>
      ));
      return listItem;
    }
  };
  render() {
    return (
      <Container padder>
        <Header>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <ScrollView>
            <List style={{marginTop: 20}}>{this.renderItem()}</List>
          </ScrollView>
        </Content>
        <Fab
          style={{backgroundColor: '#5067FF'}}
          position="bottomRight"
          onPress={() => {
            this.addPost();
          }}>
          <Icon name="add" />
        </Fab>
      </Container>
    );
  }
}
