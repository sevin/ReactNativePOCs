import React from 'react';
import {
  StyleSheet, View, TouchableOpacity, Text,
} from 'react-native';

import DonutGraph from '../Components/DonutGraph';

const styles = StyleSheet.create({
  touchable: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});

export default class GraphScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { degree: 10, degreeTwo: 10, degreeThree: 10 };
  }

  render() {
    const { degree, degreeTwo, degreeThree } = this.state;

    return (
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 20 }}>
          <DonutGraph
            radius={80}
            degree={degree}
            degreeTwo={degreeTwo}
            degreeThree={degreeThree}
            arcStrokeWidth={10}
            selectedArcStrokeWidth={10}
            selectedArc={0}
          />
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity
            style={[styles.touchable, { backgroundColor: 'pink' }]}
            onPress={() => this.setState({ degree: degree - 10 })}
          >
            <Text>minus</Text>
          </TouchableOpacity>
          <Text>degree:{' '}{degree}</Text>
          <TouchableOpacity
            style={[styles.touchable, { backgroundColor: 'pink' }]}
            onPress={() => this.setState({ degree: degree + 10 })}
          >
            <Text>plus</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity
            style={[styles.touchable, { backgroundColor: 'pink' }]}
            onPress={() => this.setState({ degreeTwo: degreeTwo - 10 })}
          >
            <Text>minus</Text>
          </TouchableOpacity>
          <Text>degree:{' '}{degreeTwo}</Text>
          <TouchableOpacity
            style={[styles.touchable, { backgroundColor: 'pink' }]}
            onPress={() => this.setState({ degreeTwo: degreeTwo + 10 })}
          >
            <Text>plus</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity
            style={[styles.touchable, { backgroundColor: 'pink' }]}
            onPress={() => this.setState({ degreeThree: degreeThree - 10 })}
          >
            <Text>minus</Text>
          </TouchableOpacity>
          <Text>degree:{' '}{degreeThree}</Text>
          <TouchableOpacity
            style={[styles.touchable, { backgroundColor: 'pink' }]}
            onPress={() => this.setState({ degreeThree: degreeThree + 10 })}
          >
            <Text>plus</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
