import React, { memo, useCallback, useMemo } from 'react';
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
              secureTextEntry={secureTextEntry}
            />
          )}
          name={name}
        />
      );
    },
    [control],
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <DismissKeyboard>
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>
          <InputText placeholder='userName' name='firstName' style={styles.userName} />
          {errors.firstName && <Text style={styles.errorMessageText}>UserName is required. </Text>}
          <InputText
            placeholder='password'
            name='lastName'
            style={styles.password}
            secureTextEntry
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
