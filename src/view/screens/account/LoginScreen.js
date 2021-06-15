import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { em, hm } from 'view/common/const';
import CommonButton from 'view/components/button/CommonButton';
import { Actions } from 'react-native-router-flux';
import AccountCommonHeader from 'view/components/header/AccountCommonHeader';
import TitleText from 'view/components/text/TitleText';
import CommonTextInput from 'view/components/textInput/CommonTextInput';
import CommonText from 'view/components/text/CommonText';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [passwd, setPasswd] = useState('');
  return (
    <View style={styles.container}>
      <AccountCommonHeader style={styles.header} />
      <View style={styles.popupView}>
        <View style={styles.popupTopView}>
          <Image source={require('assets/images/ic_profile.png')} style={styles.icon} />
          <TitleText text={'Je me connecte'} style={styles.titleText} />
          <CommonTextInput
            value={''}
            text={'Saisis ton email'}
            isPasswordInput={false}
            style={styles.commonInput}
            onChangeText={(t) => setEmail(t)}
          />
          <CommonTextInput
            value={''}
            onChangeText={(t) => setPasswd(t)}
            text={'Saisis ton mot de passe'}
            isPasswordInput={true}
            style={styles.commonInput}
          />
          <View style={styles.viewForgetPsswd}>
            <TouchableOpacity onPress={() => Actions.forgotPassword()}>
              <Text style={styles.textForgetPsswd}>Mot de passe oublié ?</Text>
            </TouchableOpacity>
          </View>
          <CommonButton
            disabled={email === '' || passwd === '' ? true : false}
            text={'Suivant'}
            onPress={() => Actions.main()}
            style={[
              styles.btnNext,
              { backgroundColor: email === '' || passwd === '' ? 'rgba(64, 205, 222, 0.5)' : 'rgba(64, 205, 222, 1)' },
            ]}
          />
        </View>
        <View style={styles.registerWrapper}>
          <CommonText text="Je n'ai pas de compte ? " />
          <CommonText
            text="Je m'inscris"
            color="#40CDDE"
            onPress={() => {
              Actions.signupMenu();
            }}
            style={{ fontFamily: 'Lato-Bold' }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = {
  container: { flex: 1, backgroundColor: '#40CDDE', alignItems: 'center' },
  // header: { height: 67.5 * hm },
  icon: { width: 20 * em, height: 25 * em, marginTop: 41 * em, marginBottom: 14 * em },
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
  popupTopView: { alignItems: 'center', width: '80%' },
  titleText: { marginBottom: 35 * hm },
  viewForgetPsswd: {
    width: '100%',
    flexDirection: 'row-reverse',
    marginTop: 10 * hm,
    marginBottom: 15 * hm,
  },
  textForgetPsswd: { fontFamily: 'Lato-Regular', fontSize: 12 * em, color: '#1E2D60' },
  btnNext: { marginBottom: 30 * hm },
  commonInput: { marginTop: 26 * hm, width: '100%', height: 52 * em },
  registerWrapper: { flexDirection: 'row', alignItems: 'center', paddingVertical: 36 * hm },
  btnTextRight: { fontFamily: 'Lato-Bold' },
};
export default LoginScreen;
