import React, { useState } from 'react';
import { em, hm } from 'view/common/const';
import { View } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import CommonTextInput from 'view/components/textInput/CommonTextInput';
import CommonButton from 'view/components/button/CommonButton';
import { Actions } from 'react-native-router-flux';
import AccountCommonHeader from 'view/components/header/AccountCommonHeader';
import { Email } from 'assets/svg/icons';

const RegisterEmailScreen = () => {
  const [email, setEmail] = useState('');
  return (
    <View style={styles.container}>
      <AccountCommonHeader style={styles.header} />
      <View style={styles.popupView}>
        <View style={styles.popupTopView}>
          <View style={styles.icon}>
            <Email width={30 * em} height={27 * em} />
          </View>
          <TitleText text={'Mon Email'} style={styles.titleText} />
          <CommonTextInput
            text={'Saisis ton email'}
            isPasswordInput={false}
            style={styles.commonInput}
            onChangeText={(t) => setEmail(t)}
          />
        </View>
        <View style={styles.popupBottomView}>
          <CommonButton            
            text={'Suivant'}
            onPress={() => Actions.registerFamilyName()}
            disabled={email === '' ? true : false}
            style={[
              styles.btnNext,
              { backgroundColor: email === '' ? 'rgba(64, 205, 222, 0.5)' : 'rgba(64, 205, 222, 1)' },
            ]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = {
  container: { flex: 1, backgroundColor: '#40CDDE', alignItems: 'center' },
  // header: { height: 67.5 * hm },
  icon: { marginTop: 40 * hm, marginBottom: 13 * hm },
  popupView: {
    flex: 1,
    height: '88%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 28 * em,
    borderTopRightRadius: 28 * em,
    justifyContent: 'space-between',
  },
  popupTopView: { alignItems: 'center', paddingHorizontal: 30 * em },
  titleText: { marginBottom: 35 * hm },
  btnNext: { backgroundColor: 'rgba(64, 205, 222, 0.5)', marginBottom: 30 * hm },
  commonInput: { width: '100%', height: 52 * em },
};

export default RegisterEmailScreen;
