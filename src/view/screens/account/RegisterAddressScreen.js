import React, { useState } from 'react';
import { em, hm } from 'view/common/const';
import { View } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import CommonTextInput from 'view/components/textInput/CommonTextInput';
import CommonButton from 'view/components/button/CommonButton';
import { Actions } from 'react-native-router-flux';
import CommentText from 'view/components/text/CommentText';
import AccountCommonHeader from 'view/components/header/AccountCommonHeader';
import { Address } from 'assets/svg/icons';

const RegisterAddressScreen = () => {
  const [address, setAddress] = useState('');

  return (
    <View style={styles.container}>
      <AccountCommonHeader style={styles.header} />
      <View style={styles.popupView}>
        <View style={styles.popupTopView}>
          <View source={require('assets/images/ic_location_green.png')} style={styles.icon}>
            <Address width={21 * em} height={30 * em} />
          </View>
          <TitleText text={'Mon adresse'} style={styles.titleText} />
          <CommonTextInput
            onChangeText={(t) => setAddress(t)}
            text={'Saisis ton adresse complète'}
            isPasswordInput={false}
            style={styles.commonInput}
          />
          <View style={styles.viewText}>
            <CommentText color={'#40CDDE'} text={'Me géolocaliser'} />
          </View>
        </View>
        <View style={styles.popupBottomView}>
          <CommonButton
            text={'Contiuer'}
            onPress={() => Actions.activateLocation()}
            disabled={address === '' ? true : false}
            style={[
              styles.btnNext,
              { backgroundColor: address === '' ? 'rgba(64, 205, 222, 0.5)' : 'rgba(64, 205, 222, 1)' },
            ]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#40CDDE',
  },
  icon: {
    width: 21 * em,
    height: 30 * hm,
    marginTop: 39 * hm,
    marginBottom: 11 * hm,
  },
  popupView: {
    flex: 1,
    height: '88%',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 28 * em,
    borderTopRightRadius: 28 * em,
    justifyContent: 'space-between',
  },
  popupTopView: {
    alignItems: 'center',
    width: '80%',
  },
  titleText: {
    marginBottom: 35 * hm,
  },
  btnNext: { backgroundColor: 'rgba(64, 205, 222, 0.5)', marginBottom: 30 * hm },
  viewText: {
    marginTop: 15 * hm,
  },
  commonInput: { width: '100%', height: 52 * em },
};

export default RegisterAddressScreen;
