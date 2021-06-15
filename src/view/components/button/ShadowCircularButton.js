import React from 'react';
import { em } from 'view/common/const';
import { TouchableOpacity, ImageBackground } from 'react-native';

const ShadowCircularButton = (props) => {
  return (
    <ImageBackground
      source={require('assets/images/white_button_with_shadow.png')}
      style={[styles.buttonStyle, props.style]}>
      <TouchableOpacity onPress={props.onPress} style={styles.btnContainer}>
        {props.icon}
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = {
  buttonStyle: {
    width: 118 * em,
    height: 118 * em,
    marginLeft: -36 * em,
    marginBottom: -52 * em,
    alignItems: 'center',
    paddingTop: 20 * em,
  },
  btnContainer: {
    width: 46 * em,
    height: 46 * em,
    borderRadius: 23 * em,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
    borderWidth: 2 * em,
  },
};

export default ShadowCircularButton;
