import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: '#f6f5f8',
  },
  inner_container: {
    flexDirection: 'row',
    minHeight: 25,
    justifyContent: 'space-between',
    backgroundColor: colors.darkgreen,
  },
  user: {
    color: 'black',
    padding: 10,
    fontSize: 12,
  },
  date: {
    color: 'black',
    padding: 10,
  },
  title: {
    color: 'black',
    paddingHorizontal: 10,
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
