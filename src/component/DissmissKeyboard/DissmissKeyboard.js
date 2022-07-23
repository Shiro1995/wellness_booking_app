import React from 'react';
import { Keyboard, StyleSheet,TouchableWithoutFeedback } from 'react-native';

const DismissKeyboard = ({ children }) => {
  const onPress = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback style={styles.container} onPress={onPress}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default DismissKeyboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
