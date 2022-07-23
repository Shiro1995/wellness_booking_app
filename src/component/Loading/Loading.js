import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const LoadingItem = styleLoading => {
  return (
    <View style={[styles.container, styleLoading]}>
      <ActivityIndicator />
    </View>
  );
};

export default LoadingItem;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 20,
  },
});
