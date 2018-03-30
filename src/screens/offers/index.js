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
            <Title>Offers</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Text>
            Visit our page for latest offers..!!
            Previous Offers
            - Car Wash Week Offer - 50% OFF (Expired)
            - Republic Day Offer - Upto 30% OFF (Expired)
            -International Women's day Offer - Upto 50% OFF (Expired)
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
