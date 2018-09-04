import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import GraphScreen from './src/Screens/GraphScreen';
import WebViewCookies from './src/Screens/WebViewCookies';

const DrawerNavigator = createDrawerNavigator({
  WebViewCookies: {
    screen: WebViewCookies,
    navigationOptions: () => ({
      drawerLabel: 'WebView Cookies'
    })
  },
  GraphScreen: {
    screen: GraphScreen,
    navigationOptions: () => ({
      drawerLabel: 'Graph Screen'
    })
  }
});

export default function App() {
  return <DrawerNavigator />;
}
