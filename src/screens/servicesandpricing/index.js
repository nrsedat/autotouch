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
            <Title>Services & Pricing</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Text>
            Just a Wash

            Exterior body water wash
            Tyre and Wheel Clean
            Interior Vacuuming
            Glass Clean and Shine
            Dashboard Cleaning
            Mud Flap and Wheel Arch Cleaning
            Underbody Power Wash*
            Exterior Liquid Wax Polish**

            Hatch Back - Rs. 300
            Sedan/ Compact SUV - Rs. 350
            SUV/MUV/Premium Car - Rs. 450​
            *Underbody Wash - Rs.50 Extra
            **Exterior Liquid Wax Polishing - Rs. 180/ Rs 200/ Rs 240 Extra
          </Text>
          <Text>
            Complete Clean

            Exterior body water wash
            Interior Vacumming and Steam Cleaning
            Dashboard Cleaning and Polish
            AC Vent Disinfection
            Car Sanitization and Deodorization
            Wheel Clean and Tyre Shine
            Door Panel treatement
            Wind Shield Treatment
            Underbody Power Wash
            Exterior Liquid Wax Polish**

            ​Hatch Back - Rs 500
            Sedan/ Compact SUV - Rs 550
            SUV/MUV/Premium Car - Rs 650
            **Exterior Liquid Wax Polishing - Rs. 180/ Rs 200/ Rs 240 Extra
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
