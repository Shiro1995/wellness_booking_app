import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { RootSiblingParent } from 'react-native-root-siblings';
import { Provider } from 'react-redux';

import rootStack from './src/navigation';
import store from './src/store';

const App = () => {
  return (
    <RootSiblingParent>
      <Provider store={store}>
        <NavigationContainer>{rootStack}</NavigationContainer>
      </Provider>
    </RootSiblingParent>
  );
};

export default App;
