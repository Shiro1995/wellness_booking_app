import {StyleSheet} from 'react-native';

import COLORS from '../../common/theme/colors';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 24,
  },
  title: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: 'bold',
    color: COLORS.SECONDARY,
  },
  errorMessageContainer: {
    borderRadius: 10,
    paddingHorizontal: 18,
    paddingVertical: 12,
    marginTop: 16,
  },
  errorMessageText: {
    color: 'red',
  },
  password: {
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
    paddingLeft: 10,
  },
  userName: {
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
  },
  submitBtn: {
    backgroundColor: COLORS.SECONDARY_80,
    borderRadius: 10,
    paddingHorizontal: 4,
    paddingVertical: 3,
    height: 56,
    justifyContent: 'center',
    marginTop: 20,
  },
  textBtn: {
    alignSelf: 'center',
  },
  loadingView: {
    height: 50,
  },
  passwordField: {
    justifyContent: 'center',
  },
  showBtn: {
    position: 'absolute',
    right: 0,
    marginRight: 10,
  },
  textShow: {
    fontWeight: 'bold',
  },
});

export default styles;
