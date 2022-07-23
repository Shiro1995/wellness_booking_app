import React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

import COLORS from '../../common/theme/colors';

const CustomButton = ({
  label,
  style,
  color = COLORS.SECONDARY_100,
  onPress,
  disabled,
}) => {
  return <FAB label={label} onPress={onPress} color={color} style={[styles.btnStyle, style]} small disabled={disabled}/>;
};

export default CustomButton;

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: COLORS.SECONDARY,
    borderRadius: 10,
  },
});
