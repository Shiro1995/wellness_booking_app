import { createNavigationContainerRef } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const rootNavigationRef = createNavigationContainerRef();

export const hideHeaderOptions = {
  headerShown: false,
};

export const defaultOptions = {
  headerShadowVisible: false,
};

export const titleOptions = ({ title }) => ({
  headerShown: true,
  headerTitleAlign: 'center',
  headerBackVisible: false,
  headerStyle: styles.headerStyle,
  headerTitle: () => (
    <Text style={styles.title}>
      {title}
    </Text>
  ),
});

const styles = StyleSheet.create({
  titleBack: {
    marginLeft: 16,
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
