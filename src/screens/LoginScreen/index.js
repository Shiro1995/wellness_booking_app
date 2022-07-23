import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { onLogin } from '../../actions';
import { HOME_SCREEN } from '../../navigation/screenName';
import { selectAuthenState } from '../../selectors/loginSelector';
import LoginScreen from './LoginScreen';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const {isLogin, isLoading, userName } = useSelector(selectAuthenState);



  const onSubmit = data => {
    dispatch(onLogin());
  };

  useEffect(() => {
    if (isLogin) {
      navigation.replace(HOME_SCREEN, { userName });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isLogin]);

  return <LoginScreen isLoading={isLoading} onSubmit={onSubmit} />;
};

export default Login;
