import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';

import rootStack from './src/navigation';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>{rootStack}</NavigationContainer>
    </Provider>
  );
};

export default App;
