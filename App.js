import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import GraphScreen from './src/Screens/GraphScreen';
import WebViewCookies from './src/Screens/WebViewCookies';
import WebViewCookies2 from './src/Screens/WebViewCookies2';
import CookiesManagerTest from './src/Screens/CookiesManagerTest';
import DrawerContentComponent from './src/Components/Drawer/DrawerContentComponent';

const DrawerNavigator = createDrawerNavigator(
  {
    CookiesManagerTest: {
      screen: CookiesManagerTest,
      navigationOptions: () => ({
        drawerLabel: 'CookiesManger Test'
      })
    },
    WebViewCookies: {
      screen: WebViewCookies,
      navigationOptions: () => ({
        drawerLabel: 'WebView Cookies'
      })
    },
    WebViewCookies2: {
      screen: WebViewCookies2,
      navigationOptions: () => ({
        drawerLabel: 'WebView Cookies 2'
      })
    },
    GraphScreen: {
      screen: GraphScreen,
      navigationOptions: () => ({
        drawerLabel: 'Graph Screen'
      })
    }
  },
  {
    contentComponent: DrawerContentComponent
  }
);

export default function App() {
  return <DrawerNavigator />;
}
