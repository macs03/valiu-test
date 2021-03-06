import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainer: {
    paddingTop: 24,
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 300,
    position: 'relative',
  },
  lightText: {
    fontSize: 20,
    color: 'white',
  },
  darkText: {
    fontSize: 20,
    color: 'black',
  },
  sendButton: {
    width: 230,
    height: 50,
    backgroundColor: 'rgba(25,105,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    padding: 2,
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
  closeButton: {
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
  inputTouchable: {
    position: 'absolute',
    backgroundColor: 'transparent',
    width: '100%',
    height: 80,
    top: 50,
    left: 0,
    elevation: 2,
    zIndex: 2,
  },
  textInput: {
    elevation: 1,
    zIndex: 1,
  },
});

export default styles;
