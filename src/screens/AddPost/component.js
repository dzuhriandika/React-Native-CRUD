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
export default class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnail: '',
      title: '',
      content: '',
    };
    this.handlePost = this.handlePost.bind(this);
  }
  handlePost = async () => {
    const {thumbnail, title, content} = this.state;
    const payload = {
      thumbnail,
      title,
      content,
    };
    this.props.navigation.state.params.handlePost(payload);
    this.setState({
      thumbnail: '',
      title: '',
      content: '',
    });
  };
  render() {
    const {thumbnail, title, content} = this.state;
    return (
      <Container padder>
        <Header>
          <Body>
            <Title>Add Post</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <Item>
              <Input
                placeholder="Thumbnail"
                value={thumbnail}
                onChangeText={value => this.setState({thumbnail: value})}
              />
            </Item>
            <Item>
              <Input
                placeholder="Title"
                value={title}
                onChangeText={value => this.setState({title: value})}
              />
            </Item>
            <Item>
              <Input
                placeholder="Content"
                value={content}
                onChangeText={value => this.setState({content: value})}
              />
            </Item>
            <Button
              block
              style={[Style.mt_2, Style.my_1]}
              onPress={this.handlePost}>
              <Text>Submit</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
