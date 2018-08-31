import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Text as SVGText,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

import DonutGraph from '../Components/DonutGraph';

export default class GraphScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { degree: 10, degreeTwo: 10, degreeThree: 10 };
  }

  render() {
    return (
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 20 }}>
          <DonutGraph
            radius={80}
            degree={this.state.degree}
            degreeTwo={this.state.degreeTwo}
            degreeThree={this.state.degreeThree}
            arcStrokeWidth={10}
            selectedArcStrokeWidth={10}
            selectedArc={0}
          />
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity
              style={[styles.touchable, { backgroundColor: 'pink' }]}
              onPress={() => this.setState({ degree: this.state.degree-10 })}>
              <Text>minus</Text>
            </TouchableOpacity>
            <Text>degree: {this.state.degree}</Text>
            <TouchableOpacity
              style={[styles.touchable, { backgroundColor: 'pink' }]}
              onPress={() => this.setState({ degree: this.state.degree+10 })}>
              <Text>plus</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity
              style={[styles.touchable, { backgroundColor: 'pink' }]}
              onPress={() => this.setState({ degreeTwo: this.state.degreeTwo-10 })}>
              <Text>minus</Text>
            </TouchableOpacity>
            <Text>degree: {this.state.degreeTwo}</Text>
            <TouchableOpacity
              style={[styles.touchable, { backgroundColor: 'pink' }]}
              onPress={() => this.setState({ degreeTwo: this.state.degreeTwo+10 })}>
              <Text>plus</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity
              style={[styles.touchable, { backgroundColor: 'pink' }]}
              onPress={() => this.setState({ degreeThree: this.state.degreeThree-10 })}>
              <Text>minus</Text>
            </TouchableOpacity>
            <Text>degree: {this.state.degreeThree}</Text>
            <TouchableOpacity
              style={[styles.touchable, { backgroundColor: 'pink' }]}
              onPress={() => this.setState({ degreeThree: this.state.degreeThree+10 })}>
              <Text>plus</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  touchable: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  }
});
