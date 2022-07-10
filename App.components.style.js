import { StyleSheet } from 'react-native';

import { COLORS } from './contains';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    backgroundColor: COLORS.background,
    position: 'absolute',
    width: '100%',
    height: '50%'
  },
  mainWrapper: {
    flex: 1,
    paddingHorizontal: 21,
  },
  wrapper: {
    flex: 3,
  }
});
