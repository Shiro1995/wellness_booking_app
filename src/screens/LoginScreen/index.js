import React, { useCallback, useState } from 'react';
import { Keyboard } from 'react-native';
import Toast from 'react-native-root-toast';
import { useDispatch, useSelector } from 'react-redux';

import { onLogin } from '../../actions';
import COLORS from '../../common/theme/colors';
import { HOME_SCREEN } from '../../navigation/screenName';
import { selectAuthenState } from '../../selectors/loginSelector';
import LoginScreen from './LoginScreen';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectAuthenState);
  const [isSecure, setIsSecure] = useState(true);
  const onSubmit = data => {
    Keyboard.dismiss();
    dispatch(
      onLogin({
        username: data.userName,
        password: data.password,
        callbackSuccess: () => onSuccess(data.userName),
        callbackFailure: onFailure,
      }),
    );
  };

  const showPassowrd = useCallback(() => {
    Keyboard.dismiss();
    setIsSecure(!isSecure);
  },[isSecure]);

  const onSuccess = useCallback(
    userName => {
      let toast = Toast.show('Login Success', {
        position: Toast.positions.BOTTOM,
        animation: true,
        hideOnPress: true,
        backgroundColor: COLORS.SUCCESS_80,
      });
      navigation.replace(HOME_SCREEN, { userName });

      const toastTimmer = setTimeout(function () {
        Toast.hide(toast);
        clearTimeout(toastTimmer);
      }, 2000);
    },
    [navigation],
  );

  const onFailure = useCallback(message => {
    let toast = Toast.show(message, {
      position: Toast.positions.BOTTOM,
      animation: true,
      hideOnPress: true,
      backgroundColor: 'red',
    });

    const toastTimmer = setTimeout(function () {
      Toast.hide(toast);
      clearTimeout(toastTimmer);
    }, 2000);
  }, []);

  // useEffect(() => {
  //   if (isLogin) {
  //     navigation.replace(HOME_SCREEN, { userName });
  //   }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[isLogin]);

  return (
    <LoginScreen
      isLoading={isLoading}
      onSubmit={onSubmit}
      isSecure={isSecure}
      showPassowrd={showPassowrd}
    />
  );
};

export default Login;
