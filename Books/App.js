/**
 * @author Brian Omondi
 * @description this is an app that displays books about a particular author that 
 * is registered in the dataBase 
 */

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//custom components
import HomeScreen from './src/screens/HomeScreen';
import BookDetails from './src/screens/BookDetails';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Book: BookDetails,
  },
  {
    initialRouteName: 'Home',
    da
  }
);
const AppContainer = createAppContainer(AppNavigator);
const App = () => {
  return <AppContainer />;  
};
export default App;
