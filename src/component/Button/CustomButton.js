import React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

import COLORS from '../../common/theme/colors';

const CustomButton = ({
  label,
  style,
  color = COLORS.SECONDARY_100,
  onPress,
}) => {
  return <FAB label={label} onPress={onPress} color={color} style={[styles.btnStyle, style]} small />;
};

export default CustomButton;

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: COLORS.SECONDARY,
  },
});
