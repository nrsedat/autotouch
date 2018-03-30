import React, { Component } from "react";
import { Image } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from "native-base";
import styles from "./style";
import IHIcon from '../IHIcon';

const drawerCover = require("../../../assets/auto-touch-bg.png");
const drawerImage = require("../../../assets/logo-kitchen-sink.png");
const datas = [
  {
    name: "About Us",
    route: "AboutUs",
    icon: "info-circle",
    iconFamily: "FontAwesome",
    bg: "#C5F442"
  },
  {
    name: "Services & Pricing",
    route: "ServicesAndPricing",
    icon: "server",
    iconFamily: "FontAwesome",
    bg: "#C5F442"
  },
  {
    name: "Wash Packages",
    route: "Packages",
    icon: "local-car-wash",
    iconFamily: "MaterialIcons",
    bg: "#477EEA",
    types: "8"
  },
  {
    name: "Offers & Discounts",
    route: "Offers",
    icon: "gift",
    iconFamily: "FontAwesome",
    bg: "#DA4437",
    types: "4"
  },
  {
    name: "Contact Us",
    route: "ContactUs",
    icon: "contact-phone",
    iconFamily: "MaterialIcons",
    bg: "#4DCAE0"
  },
  {
    name: "Login",
    route: "Login",
    iconFamily: "MaterialCommunityIcons",
    icon: "login",
    bg: "#1EBC7C",
  },
  {
    name: "Dashboard",
    route: "Dashboard",
    iconFamily: "FontAwesome",
    icon: "dashboard",
    bg: "#1EBC7C",
  }
  // {
  //   name: "Check Box",
  //   route: "NHCheckbox",
  //   icon: "checkmark-circle",
  //   bg: "#EB6B23"
  // },
  // {
  //   name: "Deck Swiper",
  //   route: "NHDeckSwiper",
  //   icon: "swap",
  //   bg: "#3591FA",
  //   types: "2"
  // },
  // {
  //   name: "Fab",
  //   route: "NHFab",
  //   icon: "help-buoy",
  //   bg: "#EF6092",
  //   types: "2"
  // },
  // {
  //   name: "Form & Inputs",
  //   route: "NHForm",
  //   icon: "call",
  //   bg: "#EFB406",
  //   types: "12"
  // },
  // {
  //   name: "Icon",
  //   route: "NHIcon",
  //   icon: "information-circle",
  //   bg: "#EF6092"
  // },
  // {
  //   name: "Layout",
  //   route: "NHLayout",
  //   icon: "grid",
  //   bg: "#9F897C",
  //   types: "5"
  // },
  // {
  //   name: "List",
  //   route: "NHList",
  //   icon: "lock",
  //   bg: "#5DCEE2",
  //   types: "7"
  // },
  // {
  //   name: "ListSwipe",
  //   route: "ListSwipe",
  //   icon: "swap",
  //   bg: "#C5F442",
  //   types: "2"
  // },
  // {
  //   name: "Picker",
  //   route: "NHPicker",
  //   icon: "arrow-dropdown",
  //   bg: "#F50C75"
  // },
  // {
  //   name: "Radio",
  //   route: "NHRadio",
  //   icon: "radio-button-on",
  //   bg: "#6FEA90"
  // },
  // {
  //   name: "SearchBar",
  //   route: "NHSearchbar",
  //   icon: "search",
  //   bg: "#29783B"
  // },
  // {
  //   name: "Segment",
  //   route: "Segment",
  //   icon: "menu",
  //   bg: "#0A2C6B",
  //   types: "2"
  // },
  // {
  //   name: "Spinner",
  //   route: "NHSpinner",
  //   icon: "navigate",
  //   bg: "#BE6F50"
  // },
  // {
  //   name: "Tabs",
  //   route: "NHTab",
  //   icon: "home",
  //   bg: "#AB6AED",
  //   types: "3"
  // },
  // {
  //   name: "Thumbnail",
  //   route: "NHThumbnail",
  //   icon: "image",
  //   bg: "#cc0000",
  //   types: "2"
  // },
  // {
  //   name: "Toast",
  //   route: "Toast",
  //   icon: "albums",
  //   bg: "#C5F442"
  // },
  // {
  //   name: "Typography",
  //   route: "NHTypography",
  //   icon: "paper",
  //   bg: "#48525D"
  // }
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawerCover} />
          {/*}<Image square style={styles.drawerImage} source={drawerImage} />*/}

          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <IHIcon
                    active
                    family={data.iconFamily}
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
