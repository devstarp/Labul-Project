import React from 'react';
import { View, Image, TouchableOpacity, StatusBar } from 'react-native';
import { em, hm } from 'view/common/const';
import CircularButton from 'view/components/button/CircularButton';
import { Actions } from 'react-native-router-flux';
import { MabulCancel } from 'assets/svg/icons';

const MabulHomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#40cdde" barStyle="light-content" />
      <View style={styles.logoContainer}>
        <Image source={require('assets/images/img_mabul_logo.png')} style={styles.logoImage} />
        <Image source={require('assets/images/img_mabul_label.png')} style={styles.logoLabel} />
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonFirstRow}>
          <CircularButton
            onPress={() => {
              props.onClosePress();
              Actions.mabulOrganize({ process: 20 });
            }}
          />
        </View>
        <View style={styles.buttonSecondRow}>
          <CircularButton
            type="give"
            onPress={() => {
              props.onClosePress();
              Actions.mabulGive({ process: 25 });
            }}
          />
          <CircularButton
            type="sell"
            onPress={() => {
              props.onClosePress();
              Actions.mabulSell({ process: 26 });
            }}
          />
          <CircularButton
            type="need"
            onPress={() => {
              props.onClosePress();
              Actions.mabulNeed({ process: 7 });
            }}
          />
        </View>
        <TouchableOpacity
          onPress={props.onClosePress}
          style={{elevation:5,
            shadowColor: '#0C15233D',
            shadowOffset: { width: 0, height: 16 * hm },
            shadowOpacity: 1,
            shadowRadius: 24 * em,backgroundColor:'#fff',borderRadius:24*em,alignSelf:'center'
          }}>
            {MabulCancel(styles.closeButton)}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#40cdde',
    paddingBottom: 16 * em,
    opacity: 0.9,
  },
  logoContainer: { flex: 0.5, width: '100%', alignItems: 'center', justifyContent: 'center' },
  logoImage: { width: 84 * em, resizeMode: 'contain' },
  logoLabel: { width: 125 * em, resizeMode: 'contain', marginTop: 18 * em },
  buttonsContainer: {
    flex: 0.5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16 * em,
  },
  buttonFirstRow: { width: '100%', flexDirection: 'row', justifyContent: 'center' },
  buttonSecondRow: { width: '80%', flexDirection: 'row', justifyContent: 'space-between' },
  closeButton: { width: 46 * em, height:46*em },
};

export default MabulHomeScreen;
