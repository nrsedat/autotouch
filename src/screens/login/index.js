import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Body,
  Item,
  Input,
  Form,
  Label
} from "native-base";
import IHIcon from '../IHIcon';
import styles from "./styles";

class Login extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      authInProgress: false
    };
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Login</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Form>
            <Item floatingLabel>
              <Label>
                <IHIcon
                active
                family={'FontAwesome'}
                name={'user'}
                style={{ color: "#777", fontSize: 26, width: 30 }}
              />Email</Label>
              <Input keyboardType="email-address"
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}
              />
            </Item>
            <Item floatingLabel last>
              <Label><IHIcon
              active
              family={'FontAwesome'}
              name={'unlock-alt'}
              style={{ color: "#777", fontSize: 26, width: 30 }}
            />Password</Label>
              <Input secureTextEntry
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
              />
            </Item>
            <Button primary block onPress={() => this.login()}>
              <Text>{this.state.authInProgress ? 'Logging in' : 'Login'}</Text>
            </Button>
          </Form>
        </Content>

        <Footer>
          <FooterTab>
            <Button active full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }

  async login() {
    this.setState({authInProgress: true });
    try {
      let response = await fetch(
        'https://facebook.github.io/react-native/movies.json'
      );
      let responseJson = await response.json();
      this.props.navigation.navigate('Dashboard')
    } catch (error) {
      alert('Failed to Sign In')
    }
  }
}

export default Login;
