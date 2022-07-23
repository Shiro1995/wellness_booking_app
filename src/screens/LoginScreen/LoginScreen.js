import React, { memo, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { SafeAreaView, Text, TextInput, TouchableHighlight, View } from 'react-native';

import DismissKeyboard from '../../component/DissmissKeyboard/DissmissKeyboard';
import LoadingItem from '../../component/Loading/Loading';
import styles from './styles';

const LoginScreen = ({ isLoading, onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });

  const isDisable = useMemo(() => {
    return !isValid && !isDirty;
  }, [isValid, isDirty]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <DismissKeyboard>
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.userName}
                placeholder='userName'
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name='firstName'
          />
          {errors.firstName && <Text style={styles.errorMessageText}>UserName is required. </Text>}
          <Controller
            control={control}
            rules={{
              maxLength: 100,
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={styles.passwordRow}>
                <TextInput
                  onBlur={onBlur}
                  placeholder='password'
                  onChangeText={onChange}
                  value={value}
                  style={styles.password}
                  secureTextEntry={true}
                />
              </View>
            )}
            name='lastName'
          />
          {errors.lastName && <Text style={styles.errorMessageText}>Password is required.</Text>}
          <TouchableHighlight
            style={[styles.submitBtn, { opacity: isDisable ? 0.5 : 1 }]}
            onPress={handleSubmit(onSubmit)}
            disabled={isDisable}
          >
            <Text style={styles.textBtn}>Submit</Text>
          </TouchableHighlight>
          {isLoading && <LoadingItem />}
        </View>
      </DismissKeyboard>
    </SafeAreaView>
  );
};

export default memo(LoginScreen);
