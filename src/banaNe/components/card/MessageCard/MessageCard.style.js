import {StyleSheet} from 'react-native';
import { color, ColorSpace } from 'react-native-reanimated';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.darkgreen,
    margin: 10,
    borderRadius: 10,
  },
  inner_container: {
    flexDirection: 'row',
    minHeight: 25,
    justifyContent: 'space-between',
    backgroundColor: colors.darkgreen,
    borderRadius:10,
    padding: 3,
  },
  user: {
    color: 'white',
    fontSize: 13,
    padding: 10,
  },
  date: {
    color: 'white',
    padding: 10,
  },
  title: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft:10,
  },
  footer: {
    alignItems: 'flex-end',
  },
  dislike_container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 3,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignItems: 'center',
    margin: 5,
  },
  dislike_count_container: {
    backgroundColor: colors.darkgreen,
    padding: 3,
    borderRadius: 20,
    marginRight: 3,
  },
  dislike_count_text: {
    color: 'white',
    fontWeight: 'bold',
  },
  dislike_text: {
    color: colors.darkgreen,
    fontWeight: 'bold',
  },
});
