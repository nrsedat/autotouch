import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import Home from "./screens/home/";
import AboutUs from "./screens/aboutus/";
import ServicesAndPricing from './screens/servicesandpricing';
import Packages from './screens/packages';
import Offers from './screens/offers';
import ContactUs from './screens/contactus';
import SideBar from "./screens/sidebar";
import Login from "./screens/login";
import Dashboard from "./screens/dashboard";

const Drawer = DrawerNavigator(
  {
    Home: { screen: Home },
    AboutUs: { screen: AboutUs },
    ServicesAndPricing: { screen: ServicesAndPricing },
    Packages: { screen: Packages },
    Offers: { screen: Offers },
    ContactUs: { screen: ContactUs },
    Login: { screen :  Login },
    Dashboard: { screen: Dashboard }
  },
  {
    initialRouteName: "Dashboard",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = StackNavigator(
  {
    Drawer: { screen: Drawer }
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;
