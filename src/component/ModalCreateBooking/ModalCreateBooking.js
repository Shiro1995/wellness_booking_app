import dayjs from 'dayjs';
import React, { useCallback, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import Modal from 'react-native-modal';
import Toast from 'react-native-root-toast';
import { useDispatch, useSelector } from 'react-redux';

import { onCreateBooking } from '../../actions';
import { statusBarHeight } from '../../common/constant';
import COLORS from '../../common/theme/colors';
import { convertDateTime, convertDateTimeToRequest } from '../../common/utils';
import { selectAuthenState } from '../../selectors/loginSelector';
import CustomButton from '../Button/CustomButton';
import DismissKeyboard from '../DissmissKeyboard/DissmissKeyboard';
import styles from './style';

const ModalCreateBooking = ({ visible, close }) => {
  const dispatch = useDispatch();
  const { width, height } = useWindowDimensions();

  /**
   * Selector
   */
  const { userName } = useSelector(selectAuthenState);
  /**
   * State
   */
  const [valueDropdown, setValueDropdown] = useState('Health Talk');
  const [items, setItems] = useState([
    { label: 'Health Talk', value: 'Health Talk' },
    { label: 'Wellness Events', value: 'Wellness Events' },
    { label: 'Fitness Activities', value: 'Fitness Activities' },
  ]);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [openDatePicker, setOpenDatePicker] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      location: '',
    },
  });

  const onClose = useCallback(() => {
    if (open) {setOpen(false);}
    if (openDatePicker) {setOpenDatePicker(false);}
    reset();
    setValueDropdown('Health Talk');
    close();
  }, [close, open, openDatePicker, reset]);

  const InputText = useCallback(
    ({ placeholder, name, style, secureTextEntry }) => {
      return (
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={style}
              placeholder={placeholder}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name={name}
        />
      );
    },
    [control],
  );

  const onSubmit = useCallback((data) => {
    const input = {
      event_title : valueDropdown,
      event_location: data.location,
      confirmed_datetime: convertDateTimeToRequest(date),
      created_at: convertDateTimeToRequest(dayjs()),
      created_by: userName,
    };
    dispatch(onCreateBooking({
      input,
      callbackSuccess: onSuccess,
      callbackFailure: onFailure,
    }));
    close();
  }, [close, date, dispatch, onFailure, onSuccess, userName, valueDropdown]);

  const onSuccess = useCallback(() => {
    let toast = Toast.show('Create Success', {
      position: Toast.positions.BOTTOM,
      animation: true,
      hideOnPress: true,
      backgroundColor: COLORS.SUCCESS_80,
    });

    const toastTimmer = setTimeout(function () {
      Toast.hide(toast);
      clearTimeout(toastTimmer);
    }, 2000);
    reset();
  }, [reset]);

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

  return (
    <Modal
      isVisible={visible}
      animationIn={'zoomIn'}
      animationOut={'zoomOut'}
      transparent={true}
      backdropColor={COLORS.NEUTRAL}
      deviceHeight={height + statusBarHeight}
      style={styles.containerModal}
      backdropOpacity={0.7}
      animationInTiming={200}
      animationOutTiming={200}
      statusBarTranslucent
      hasBackdrop={true}
      onBackdropPress={onClose}
      useNativeDriver={true}
    >
      <View style={[styles.container, { width: width - 32 * 2 }]}>
        <DismissKeyboard>
          <KeyboardAvoidingView>
            <View style={styles.content}>
              <Text style={styles.title}>Add New Booking</Text>
              <DropDownPicker
                open={open}
                value={valueDropdown}
                items={items}
                setOpen={setOpen}
                setValue={setValueDropdown}
                setItems={setItems}
                style={styles.dropdownStyle}
              />
              <InputText name='location' placeholder='Location of Event' style={styles.input} />
              {errors.location && <Text style={styles.errorMessageText}>Location is required.</Text>}
              <View style={styles.timeRow}>
                <Text style={styles.timeText}>{convertDateTime(date)}</Text>
                <TouchableOpacity
                  style={styles.btnDateTime}
                  onPress={() => setOpenDatePicker(true)}
                >
                  <Text style={styles.changeTime}>Change Time</Text>
                </TouchableOpacity>
              </View>
              <CustomButton
                onPress={handleSubmit(onSubmit)}
                style={styles.confirmBtn}
                label='create'
              />
              <CustomButton onPress={onClose} label='cancel' style={styles.cancelBtn} />
            </View>
            <DatePicker
              modal
              open={openDatePicker}
              date={date}
              onConfirm={time => {
                setOpenDatePicker(false);
                setDate(time);
              }}
              onCancel={() => {
                setOpenDatePicker(false);
              }}
            />
          </KeyboardAvoidingView>
        </DismissKeyboard>
      </View>
    </Modal>
  );
};

export default ModalCreateBooking;
