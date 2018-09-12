import React from 'react';
import {
  ScrollView
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import DrawerItem from './DrawerItem';

export default class DrawerContentComponent extends React.Component {
  navigateToScreen(route) {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });

    const { navigation } = this.props;
    // navigation.closeDrawer();
    console.log('drawer navigation props: ', navigation);
    navigation.dispatch(navigateAction);
  }

  render() {
    // console.log('DrawerContentComponent props: ', this.props);
    const { descriptors, navigation } = this.props;
    // console.log('this.props.descriptors: ', descriptors);
    const drawerContent = [];

    Object.keys(descriptors).forEach((key) => {
      const descriptor = descriptors[key];
      drawerContent.push(
        <DrawerItem
          key={key}
          isFocused={navigation.isFocused(key)}
          routeName={descriptor.key}
          label={descriptor.options.drawerLabel}
          navigateToScreen={(route) => {
            this.navigateToScreen(route);
          }}
        />
      );
    });

    return (
      <ScrollView>
        {drawerContent}
      </ScrollView>
    );
  }
}
