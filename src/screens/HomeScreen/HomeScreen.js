import React, { memo, useCallback } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Avatar } from 'react-native-paper';

import IMAGES from '../../common/theme/assets';
import { convertDateTime } from '../../common/utils';
import CustomButton from '../../component/Button/CustomButton';
import LoadingItem from '../../component/Loading/Loading';
import ModalCreateBooking from '../../component/ModalCreateBooking/ModalCreateBooking';
import styles from './styles';

const HomeScreen = ({
  loadingMore,
  isLoading,
  userName,
  onLoadmore,
  listBooking,
  onSignOut,
  visible,
  open,
  close,
  isLoadingCreate,
}) => {
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  const renderSeparator = useCallback(() => {
    return <View style={styles.separate} />;
  }, []);

  const renderHeaderList = useCallback(() => {
    if (!isLoadingCreate) {
      return null;
    }
    return <LoadingItem />;
  }, [isLoadingCreate]);

  const renderFotter = useCallback(() => {
    if (!loadingMore) {
      return null;
    }
    return <LoadingItem />;
  }, [loadingMore]);

  const renderItem = useCallback(({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <View>
          <Image source={IMAGES.booking} style={styles.imageItem} />
        </View>
        <View style={styles.rowInfo}>
          <View style={styles.leftInfo}>
            <Text style={styles.titleEvent}>{item?.event_title}</Text>
            <Text>{item?.created_by}</Text>
          </View>
          <View style={styles.rightInfo}>
            <Text>{item?.event_location}</Text>
            <Text style={styles.dateTime}>{convertDateTime(item?.confirmed_datetime)}</Text>
          </View>
        </View>
      </View>
    );
  }, []);

  const renderHeader = useCallback(() => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.leftHeader}>
          <Avatar.Image style={styles.avatar} size={50} />
          <Text style={styles.welcome}>Welcome, {`\n${userName || 'Guest'}`} </Text>
        </View>
        <TouchableOpacity onPress={onSignOut} style={styles.logoutBtn}>
          <Text style={styles.signOutText}>Sign out</Text>
        </TouchableOpacity>
      </View>
    );
  }, [onSignOut, userName]);

  return (
    <SafeAreaView style={styles.areaView}>
      <View style={styles.container}>
        {renderHeader()}
        <FlatList
          data={listBooking}
          renderItem={renderItem}
          keyExtractor={(item, index) =>`${item?._id}`}
          onEndReached={onLoadmore}
          ItemSeparatorComponent={renderSeparator}
          ListFooterComponent={renderFotter}
          ListHeaderComponent={renderHeaderList}
          initialNumToRender={5}
          maxToRenderPerBatch={5}
          onEndReachedThreshold={0.01}
          key={item => item?._id}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <CustomButton onPress={open} style={styles.floatBtn} label='add booking' />
      <ModalCreateBooking visible={visible} close={close} />
    </SafeAreaView>
  );
};

export default memo(HomeScreen);
