import * as Expo from "expo";
import React, { Component } from "react";
import { StyleProvider } from "native-base";

import App from "../App";
import getTheme from "../theme/components";
import variables from "../theme/variables/commonColor";

export default class Setup extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  componentWillMount() {
    this.loadFonts();
  }
  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
      'avenuex-regular': require('../../assets/fonts/avenuex-regular.ttf'),
      'brand-regular': require('../../assets/fonts/PlayfairDisplay-Regular.ttf'),
      'brand-italic': require('../../assets/fonts/PlayfairDisplay-Italic.ttf'),
      'brand-bold': require('../../assets/fonts/PlayfairDisplay-Bold.ttf'),
      'brand-bold-italic': require('../../assets/fonts/PlayfairDisplay-BoldItalic.ttf'),
      'brand-black': require('../../assets/fonts/PlayfairDisplay-Black.ttf'),
      'brand-black-italic': require('../../assets/fonts/PlayfairDisplay-BlackItalic.ttf')
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <StyleProvider style={getTheme(variables)}>
        <App />
      </StyleProvider>
    );
  }
}
