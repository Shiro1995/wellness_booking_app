import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import { hideHeaderOptions, titleOptions } from './navigationOptions';
import * as SCREEN_NAME from './screenName';

const Stack = createNativeStackNavigator();

const screenMapping = [
  {
    name: SCREEN_NAME.LOGIN_SCREEN,
    component: LoginScreen,
    options: hideHeaderOptions,
  },
  {
    name: SCREEN_NAME.HOME_SCREEN,
    component: HomeScreen,
    options: titleOptions({title: 'Wellness Booking'}),
  },
];

const rootStack = (
  <Stack.Navigator initialRouteName={SCREEN_NAME.HOME_SCREEN}>
    <Stack.Group>
      {screenMapping.map(screen => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={screen.options}
        />
      ))}
    </Stack.Group>
  </Stack.Navigator>
);

export default rootStack;
