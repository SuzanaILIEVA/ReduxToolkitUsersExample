import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import themeColors from '../../theme/themeColors';

const Button = props => {
  const {title, status} = props;

  const setColors = status => {
    switch (status) {
      case 'success':
        return themeColors.GREEN;
      case 'error':
        return themeColors.RED;
      case 'warning':
        return themeColors.ORANGE;

      default:
        return themeColors.BLUE;
    }
  };
  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, {backgroundColor: setColors(status)}]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  title: {
    color: themeColors.BLACK,
    fontSize: 22,
    fontWeight: 'bold',
  },
});
