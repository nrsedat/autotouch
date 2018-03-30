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
            <Title>Packages</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Text>
            12 Wash Package At Discounted Rates
            You can save MORE with the purchase of 12 wash package.
            Package includes - 8 Just a Wash + 4 Complete Clean with validity of 9 months
            Attractive rates for Package Purchase.
            - Hatchback                              - Rs. 3700/-
            - Sedan/ Compact SUV              - Rs. 4300/-
            - SUV/MUV/Premium Car          - Rs. 5400/-
            You can purchase the wash package from our service person or contact us through phone/ email/ fill up the below purchase form.
            6 Wash Package At Discounted Rates
            Save with the purchase of 6 wash package.
            Package includes - 4 Just a Wash + 2 Complete Clean with validity of 5 months
            Attractive rates for Package Purchase.
            - Hatchback                               - Rs. 1900/-
            - Sedan/ Compact SUV               - Rs. 2200/-
            - SUV/MUV/Premium Car           - Rs. 2800/-
            You can purchase the wash package from our service person or contact us through phone/ email/ fill up the below purchase form.
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
