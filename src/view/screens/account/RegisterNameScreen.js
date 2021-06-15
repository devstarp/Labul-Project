import React, { useState } from 'react';
import { em, hm } from 'view/common/const';
import { View, Image } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import CommonTextInput from 'view/components/textInput/CommonTextInput';
import CommonButton from 'view/components/button/CommonButton';
import { Actions } from 'react-native-router-flux';
import AccountCommonHeader from 'view/components/header/AccountCommonHeader';
import { Person } from 'assets/svg/icons';

const RegisterNameScreen = () => {
  const [name, setName] = useState('');
  return (
    <View style={styles.container}>
      <AccountCommonHeader style={styles.header} />
      <View style={styles.popupView}>
        <View style={styles.popupTopView}>
          <View style={styles.icon}>
            <Person width={20 * em} height={25 * em} />
          </View>
          <TitleText text={'Mon prénom'} style={styles.titleText} />
          <CommonTextInput
            onChangeText={(t) => setName(t)}
            text={'Quel est ton prénom ?'}
            isPasswordInput={false}
            style={styles.commonInput}
          />
        </View>
        <View style={styles.popupBottomView}>
          <CommonButton
            text={'Continuer'}
            onPress={() => Actions.registerMobile()}
            disabled={name === '' ? true : false}
            style={[
              styles.btnNext,
              { backgroundColor: name === '' ? 'rgba(64, 205, 222, 0.5)' : 'rgba(64, 205, 222, 1)' },
            ]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = {
  container: { flex: 1, backgroundColor: '#40CDDE' },
  // header: { height: 67.5 * hm },
  icon: { width: 20 * em, height: 25 * hm, marginTop: 40 * hm, marginBottom: 13 * hm },
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
  titleText: { marginBottom: 35 * hm },
  btnNext: { backgroundColor: 'rgba(64, 205, 222, 0.5)', marginBottom: 30 * hm },
  commonInput: { width: '100%', height: 52 * em },
};

export default RegisterNameScreen;
