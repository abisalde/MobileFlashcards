import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {red, muted} from '../utils/colors';

const TextButton = ({children, onPress, style = {}, disabled = false}) => {
  const disabledBtn = disabled ? styles.disabledBtn : {};
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Text style={[styles.btn, style, disabledBtn]}>{children}</Text>
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
  disabledBtn: {
    color: muted,
  },
});

TextButton.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object,
  disabled: PropTypes.bool,
};

export default TextButton;
