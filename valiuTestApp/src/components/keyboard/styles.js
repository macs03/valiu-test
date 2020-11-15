import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '45%',
    backgroundColor: 'rgba(25,105,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 70,
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
  pad: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 20,
  },
  itemContainer: {
    width: '33%',
    height: '33%',
    backgroundColor: '#696969',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
});

export default styles;
