import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {red} from '../utils/colors';

const TextButton = ({children, onPress, style = {}}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.btn, style]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    textAlign: 'center',
    color: red,
    paddingTop: 10,
    paddingBottom: 10,
  },
});

TextButton.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object,
};

export default TextButton;
