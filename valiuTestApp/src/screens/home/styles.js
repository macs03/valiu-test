import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  scrollView: {
    width: '100%',
    height: '100%',
  },
  header: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    width: '100%',
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
  },
  darkText: {color: 'white', alignSelf: 'center'},
  addButton: {
    position: 'absolute',
    top: '12.5%',
    right: 10,
    width: 50,
    height: 50,
    backgroundColor: '#696969',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
});

export default styles;
