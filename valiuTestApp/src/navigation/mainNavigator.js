import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';

enableScreens();

function SplashScreen({navigation}) {
  return (
    <View style={[styles.container, {backgroundColor: bgs[1]}]}>
      <Text style={styles.lightText}>Splash Screen</Text>
      <Button title="Go to Demo" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

function Home({navigation}) {
  return (
    <View style={[styles.container, {backgroundColor: bgs[4]}]}>
      <Text style={styles.darkText}>Demo Screen</Text>
      <Button title="Go to Auth" onPress={() => navigation.navigate('Auth')} />
    </View>
  );
}

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;

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
