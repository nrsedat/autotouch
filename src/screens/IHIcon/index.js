import React, { Component } from 'react';
import { ViewPropTypes } from 'react-native';
import { StyleProvider, getTheme, Icon } from 'native-base';
import PropTypes from 'prop-types';

export default class IHIcon extends Component {
  render () {
    const { family, name, style } = this.props;
    const icon = <Icon name={name} style={style} />
    if (family) {
      const customTheme = getTheme({iconFamily: family})
      return <StyleProvider style={customTheme}>{icon}</StyleProvider>
    } else {
      return icon
    }
  }
}

IHIcon.propTypes = {
  family: PropTypes.string,
  name: PropTypes.string.isRequired,
  style: PropTypes.any
};
