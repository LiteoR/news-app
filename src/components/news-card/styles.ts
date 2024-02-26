import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flexDirection: 'column',
    borderRadius: 5,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: 100,
  },
  content: {
    flexDirection: 'column',
    padding: 6,
  },
  description: {
    marginBottom: 6,
    fontSize: 12,
    lineHeight: 16,
  },
  date: {
    alignSelf: 'flex-end',
    fontSize: 10,
    lineHeight: 12,
  },
});
