import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  sectionHeader: {
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    width: 120,
    height: 120,
    margin: 5,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderColor: colors.primaryText,
    backgroundColor: colors.primaryOffset,
  },
});

export default styles;
