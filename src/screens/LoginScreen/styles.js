import {StyleSheet} from 'react-native';

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
    fontSize: 20,
  },
  errorMessageContainer: {
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 12,
    marginTop: 16,
  },
  errorMessageText: {
    color: 'red',
  },
  password: {
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    paddingLeft: 10,
  },
  userName: {
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
  },
  submitBtn: {
    backgroundColor: 'red',
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingVertical: 3,
    height: 56,
    justifyContent: 'center',
    marginTop: 20,
  },
  textBtn: {
    alignSelf: 'center',
  },
});

export default styles;
