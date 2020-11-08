import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  tag: {
    width: '50%',
    borderRadius: 15,
    marginRight: 20,
    paddingVertical: 10,
  },
  tagText: {
    fontSize: 20,
    color: 'gray',
    width: '100%',
    textAlign: 'center',
  },
  moreButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#bbb',
    borderWidth: 2,
    height: 40,
    width: 20,
    borderRadius: 25,
    marginRight: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '35%',
  },
  editButton: {
    backgroundColor: 'green',
    borderRadius: 5,
    height: 40,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 2,
  },
  deleteButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    height: 40,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 2,
  },
});

export default styles;
