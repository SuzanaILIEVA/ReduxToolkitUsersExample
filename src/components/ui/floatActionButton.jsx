import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import themeColors from '../../theme/themeColors';
import {Add} from 'iconsax-react-native';

const FloatActionButton = props => {
  return (
    <TouchableOpacity {...props} style={styles.floatbutton}>
      <Add size={60} color={themeColors.BLACK} />
    </TouchableOpacity>
  );
};

export default FloatActionButton;

const styles = StyleSheet.create({
  floatbutton: {
    width: 80,
    height: 80,
    backgroundColor: themeColors.GREEN,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 30,
    elevation: 5,
  },
});
