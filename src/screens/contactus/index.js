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
  Body
} from "native-base";

import styles from "./styles";

class Anatomy extends Component {
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
            <Title>Contact Us</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Text>
            website: www.glistenclean.in
            email: glisten.carwash@gmail.com
            Call/ Whatsapp: 95918 99049/ 90359 99049
            Glisten Car Wash
            Manipal, Udupi, Karnataka - 576104
            Hours
            Open today
            9:30 am – 9:00 pm
          </Text>
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
}

export default Anatomy;
