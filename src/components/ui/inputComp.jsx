import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import themeColors from '../../theme/themeColors';

const InputComp = props => {
  const {title, error} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.inputTitle}>{title}</Text>
      <TextInput {...props} style={styles.input} />
      {error && <Text style={styles.errormsg}>{error}</Text>}
    </View>
  );
};

export default InputComp;

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  inputTitle: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: 'bold',
    color: themeColors.BLACK,
    textAlign: 'left',
  },
  input: {
    borderWidth: 1,
    borderColor: themeColors.DARK,
    padding: 10,
    marginBottom: 2,
    borderRadius: 7,
    backgroundColor: themeColors.LIGHTER,
    color: themeColors.BLACK,
    fontSize: 16,
  },
  errormsg: {
    color: themeColors.RED,
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
    marginTop: 3,
  },
});
