import { StyleSheet } from 'react-native';

import { statusBarHeight } from '../../common/constant';
import COLORS from '../../common/theme/colors';

const styles = StyleSheet.create({
  containerModal: {
    margin: 0,
    padding: 0,
  },
  container: {
    borderRadius: 8,
    marginTop: statusBarHeight,
    backgroundColor: COLORS.WHITE,
    alignSelf: 'center',
  },
  content: {
    padding: 20,
  },
  title: {
    color: COLORS.SECONDARY_70,
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 10,
    borderColor: COLORS.NEUTRAL_10,
    paddingLeft: 10,
  },
  dropdownStyle: {
    color: COLORS.PRIMARY,
    borderColor: COLORS.NEUTRAL_10,
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLORS.NEUTRAL_10,
    paddingHorizontal: 10,
    height: 56,
    marginTop: 10,
  },
  dateTime: {
    color: COLORS.INFORMATION_100,
    fontSize: 16,
  },
  btnDateTime: {
    backgroundColor: COLORS.SECONDARY_20,
    padding: 5,
    borderRadius: 8,
  },
  timeText: {
    fontWeight: 'bold',
  },
  confirmBtn: {
    marginTop: 20,
  },
  cancelBtn: {
    marginTop: 10,
    backgroundColor: COLORS.WHITE,
  },
  errorMessageText: {
    color: 'red',
  },
});

export default styles;
