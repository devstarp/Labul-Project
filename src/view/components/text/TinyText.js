import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { em } from 'view/common/const';

const renderText = (props) => {
  let color = '#6A8596';
  if (props.color) {
    color = props.color;
  }
  let textAlignProp = 'left';
  if (props.align) {
    textAlignProp = props.align;
  }
  const textStyle = { fontSize: 10 * em, color: color, fontFamily: 'Lato-Regular', textAlign: textAlignProp };
  return <Text style={[textStyle, props.style]}>{props.text}</Text>;
};

const TinyText = (props) => {
  if (props.onPress) {
    return <TouchableOpacity onPress={props.onPress}>{renderText(props)}</TouchableOpacity>;
  }
  return renderText(props);
};

export default TinyText;
