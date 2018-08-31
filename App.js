import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import GraphScreen from './src/Screens/GraphScreen';

const DrawerNavigator = createDrawerNavigator({
  GraphScreen: {
    screen: GraphScreen,
    navigationOptions: ({ navigation }) => ({
      drawerLabel: 'Graph Screen'
    })
  },
});

export default class App extends React.Component {
  render() {
    return (
      <DrawerNavigator />
    );
  }
}
