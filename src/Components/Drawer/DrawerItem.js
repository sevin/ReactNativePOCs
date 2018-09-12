import React from 'react';
import {
  TouchableOpacity, View, Text, StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  drawerItemContainer: {
    padding: 10,
  }
});

export default function DrawerItem(props) {
  const { routeName, label, navigateToScreen } = props;

  return (
    <TouchableOpacity
      style={styles.drawerItemContainer}
      onPress={() => navigateToScreen(routeName)}
    >
      <View>
        <Text>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}
