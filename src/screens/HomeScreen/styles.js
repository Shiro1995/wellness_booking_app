import { StyleSheet } from 'react-native';

import COLORS from '../../common/theme/colors';


const styles = StyleSheet.create({
  areaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 24,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
		borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderColor: COLORS.NEUTRAL_20,
  },
  titleEvent: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageItem: {
    width: 48,
    height: 48,
  },
  leftInfo: {
    justifyContent: 'space-between',
  },
  rightInfo: {
    justifyContent: 'space-between',
  },
  separate: {
    height: 12,
  },
  rowInfo: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 16,
    justifyContent: 'space-between',
  },
  dateTime: {
    fontSize: 12,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingVertical: 20,
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  welcome: {
    fontWeight: 'bold',
    paddingLeft: 10,
    fontSize: 16,
    color: COLORS.PRIMARY_60,
    alignSelf: 'center',
  },
  avatar: {
    backgroundColor: COLORS.SECONDARY,
  },
  leftHeader: {
    flexDirection: 'row',
  },
  logoutBtn: {
    alignSelf: 'center',
    backgroundColor: COLORS.SECONDARY_30,
    padding: 10,
    borderRadius: 8,
  },
  signOutText: {
    fontWeight: 'bold',
    color: COLORS.INFORMATION_80,
  },
  floatBtn: {
    position: 'absolute',
    bottom: 24,
    right: 24,
  },
});

export default styles;

