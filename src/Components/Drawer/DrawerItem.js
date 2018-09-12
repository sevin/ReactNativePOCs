import React from 'react';
import {
  TouchableOpacity, View, Text, StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  drawerItemContainer: {
    padding: 10,
    marginVertical: 3
  },
  selectedDrawerItemContainer: {
    backgroundColor: 'lightgray'
  },
  text: {
    fontWeight: 'bold',
    color: 'black'
  },
  selectedText: {
    color: 'blue'
  }
});

export default function DrawerItem(props) {
  const {
    routeName, label, onDrawerItemPressed, isFocused
  } = props;

  const drawerContainerStyle = [styles.drawerItemContainer];
  const textStyle = [styles.text];
  if (isFocused) {
    drawerContainerStyle.push(styles.selectedDrawerItemContainer);
    textStyle.push(styles.selectedText);
  }

  return (
    <TouchableOpacity
      style={drawerContainerStyle}
      onPress={() => onDrawerItemPressed(routeName)}
    >
      <View>
        <Text style={textStyle}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}
