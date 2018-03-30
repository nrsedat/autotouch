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
            <Title>About Us</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Text>
            AutoTouch provides highest quality mobile car wash featuring the most advanced cleaning equipments and solutions.
            You need not worry for water* and electricity. We have completely self contained service van which carries water* and power source required for service.
            Give a call and we will be there at your doorstep to provide car/ bike wash service.
            ​We also provides eco-friendly water-less car wash at regular pricing.
            Book your service through a Call/WhatsApp/AutoTouch Website
            AutoTouch wash provides following services :
            Complete Car Exterior Cleaning
            Exterior Liquid Wax Polishing
            Interior Vacuuming
            Dashboard Cleaning and Shine
            Interior Steam Cleaning/Sanitization
            Glass clean and Windshield treatment
            Door panel UV protectant treatement
            AC Vent Disinfection
            Tyre Clean and Shine
            Under Body Wash
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
