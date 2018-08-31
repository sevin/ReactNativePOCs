import React from 'react';

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

export default class DonutGraph extends React.Component {
  getRadian = (degrees) => {
    return degrees * Math.PI / 180;
  }

  getEndXCoor = (cX, radius, degrees) => {
    const radian = this.getRadian(degrees);
    return cX + radius * Math.sin(radian);
  }

  getEndYCoor = (cY, radius, degrees) => {
    const radian = this.getRadian(degrees);
    return cY - radius * Math.cos(radian);
  }

  getLargeArcSweepFlat = (degrees) => {
    if (degrees > 180) {
      return '1';
    } else {
      return '0';
    }
  }

  getArcPath = (startX, startY, endX, endY, radius, degrees) => {
    const largeArcSweepFlat = this.getLargeArcSweepFlat(degrees);
    const path = 'M '.concat(startX).concat(' ').concat(startY).concat(' A ').concat(radius).concat(' ').concat(radius).concat(' 0 ').concat(largeArcSweepFlat).concat(' 1 ').concat(endX).concat(' ').concat(endY);
    return path;
  }

  render() {
    const radius = this.props.radius;

    //calculate center of circle and size of SVG component using radius and selectedArcStrokeWidth
    const cX = radius + this.props.selectedArcStrokeWidth/2;
    const cY = radius + this.props.selectedArcStrokeWidth/2;
    const svgHeight = 2 * radius + this.props.selectedArcStrokeWidth;
    const svgWidth = 2 * radius + this.props.selectedArcStrokeWidth;

    const fullCirclePath = 'M ' + cX + ' ' + cY + ' m 0 -' + radius + ' a ' + radius + ' ' + radius + ' 0 1 0 0 ' + 2*radius + ' a ' + radius + ' ' + radius + ' 0 1 0 0 -' + 2*radius;

    //===========formulating path of the first arc
    const totalDegree = this.props.degree;

    const startX = cX;
    const startY = cY - radius;
    const endX = this.getEndXCoor(cX, radius, totalDegree);
    const endY = this.getEndYCoor(cY, radius, totalDegree);
    const path = this.getArcPath(startX, startY, endX, endY, radius, this.props.degree);


    //===========formulating path of the second arc
    const totalDegree2 = this.props.degree + this.props.degreeTwo;

    const endX2 = this.getEndXCoor(cX, radius, totalDegree2);
    const endY2 = this.getEndYCoor(cY, radius, totalDegree2);
    const path2 = this.getArcPath(endX, endY, endX2, endY2, radius, this.props.degreeTwo);


    //===========formulating path of the third arc
    const totalDegree3 = this.props.degree + this.props.degreeTwo + this.props.degreeThree;

    const endX3 = this.getEndXCoor(cX, radius, totalDegree3);
    const endY3 = this.getEndYCoor(cY, radius, totalDegree3);
    const path3 = this.getArcPath(endX2, endY2, endX3, endY3, radius, this.props.degreeThree);


    //===========determing arcs' stroke width
    let strokeWidth1, strokeWidth2, strokeWidth3;
    strokeWidth1 = strokeWidth2 = strokeWidth3 = this.props.arcStrokeWidth;
    switch (this.props.selectedArc) {
      case 1:
        strokeWidth1 = this.props.selectedArcStrokeWidth;
        break;
      case 2:
        strokeWidth2 = this.props.selectedArcStrokeWidth;
        break;
      case 3:
        strokeWidth3 = this.props.selectedArcStrokeWidth;
        break;
      default:
        break;
    }

    return (
      <Svg
        height={svgHeight}
        width={svgWidth}
      >
        <Path
          d={fullCirclePath}
          fill='transparent'
          stroke='orange'
        />
        <Path
          d={path}
          fill='transparent'
          stroke='green'
          strokeWidth={strokeWidth1}
        />
        <Path
          d={path2}
          fill='transparent'
          stroke='blue'
          strokeWidth={strokeWidth2}
        />
        <Path
          d={path3}
          fill='transparent'
          stroke='red'
          strokeWidth={strokeWidth3}
        />
      </Svg>
    );
  }
}
