import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createSwitchNavigator, createAppContainer} from "react-navigation"
import WriteScreen from "./Screens/writescreen"
import ReadScreen from "./Screens/readscreen"


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Container/>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

var TabNavigator = createSwitchNavigator({
  WriteScreen : WriteScreen ,ReadScreen: ReadScreen
  
})

const Container = createAppContainer(TabNavigator)
