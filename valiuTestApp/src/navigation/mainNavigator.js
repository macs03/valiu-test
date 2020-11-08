import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';

enableScreens();

function Modal({navigation}) {
  return (
    <View style={[styles.container, {backgroundColor: bgs[1]}]}>
      <Text style={styles.lightText}>Modal Screen</Text>
    </View>
  );
}

function Home({navigation}) {
  return (
    <View style={[styles.container, {backgroundColor: bgs[4]}]}>
      <Text style={styles.darkText}>Hole Screen</Text>
      <Button
        title="Go to Modal"
        onPress={() => navigation.navigate('Modal')}
      />
    </View>
  );
}

const Stack = createStackNavigator();
const RootStack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const RootStackScreen = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackNavigator}
          options={{headerShown: false}}
        />
        <RootStack.Screen name="Modal" component={Modal} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackScreen;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  lightText: {
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
  },
  darkText: {
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
  },
});

const bgs = [
  '#EC0B43',
  '#EC0B43',
  '#2C1530',
  '#7AE7C7',
  '#D6FFB7',
  '#FFF689',
  '#264653',
  '#2A9D8F',
  '#E9C46A',
  '#F4A261',
  '#E76F51',
];
