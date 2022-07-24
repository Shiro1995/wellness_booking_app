import AsyncStorage from '@react-native-community/async-storage';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { onGetBooking } from '../../actions';
import { fetchLoadmore } from '../../common/utils';
import { LOGIN_SCREEN } from '../../navigation/screenName';
import { signOut } from '../../reducers/bookingReducer';
import { setBookingData } from '../../reducers/bookingReducer';
import { selectBookingState } from '../../selectors/bookingSelector';
import HomeScreen from './HomeScreen';

const Home = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const { isLoadingCreate, isLoading, listBooking } = useSelector(selectBookingState);
  const [loadingMore, setLoadingMore] = useState(false);
  const { userName } = route.params || {};
  const [allLoaded, setAllLoaded] = useState(false);
  const totalItems = useMemo(
    () => (Array.isArray(listBooking) ? listBooking.length : 0),
    [listBooking],
  );

  const onLoadmore = useCallback(
    async info => {
      if (loadingMore || allLoaded) {
        return;
      }
      setLoadingMore(true);
      const localList = await AsyncStorage.getItem('list');
      let json = JSON.parse(localList);

      const newItems = fetchLoadmore(totalItems, json);
      if (newItems.length === 0) {
        // if no new items were fetched, so we in the end of the list
        setAllLoaded(true);
      } else {
        const list = [...listBooking, ...newItems];
        dispatch(setBookingData({ list }));
      }
      setLoadingMore(false);
    },
    [allLoaded, dispatch, listBooking, loadingMore, totalItems],
  );
  const removeLocalData = useCallback(async () => {
    return await AsyncStorage.removeItem('list');
  }, []);

  const onSignOut = useCallback(() => {
    removeLocalData();
    dispatch(signOut());
    navigation.replace(LOGIN_SCREEN);
  }, [dispatch, navigation, removeLocalData]);

  useEffect(() => {
    removeLocalData();
    dispatch(onGetBooking({userName}));
  }, [dispatch, removeLocalData, userName]);


  const open = useCallback(() => {
    setVisible(true);
  }, []);

  const close = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <HomeScreen
      loadingMore={loadingMore}
      isLoading={isLoading}
      totalItems={totalItems}
      userName={userName}
      listBooking={listBooking}
      onLoadmore={onLoadmore}
      onSignOut={onSignOut}
      visible={visible}
      open={open}
      close={close}
      isLoadingCreate={isLoadingCreate}
    />
  );
};

export default Home;
