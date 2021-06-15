import React, { useState } from 'react';
import { em } from 'view/common/const';
import { View } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import CommonTextInput from 'view/components/textInput/CommonTextInput';
import CommonButton from 'view/components/button/CommonButton';
import { Actions } from 'react-native-router-flux';
import AccountCommonHeader from 'view/components/header/AccountCommonHeader';
import { InstitutionInner, AssociationInner, EnterpriseInner } from 'assets/svg/icons';
import AccountType from 'model/user/AccountType';
const proAccountIcons = [
  {
    id: 0,
    accountType: AccountType.ASSOCIATION,
    icon: <AssociationInner width={39 * em} height={30 * em} />,
    title: 'association',
  },
  {
    id: 1,
    accountType: AccountType.INSTITUTION,
    icon: <InstitutionInner width={35 * em} height={30 * em} />,
    title: 'collectivité/ institution',
  },
  {
    id: 2,
    accountType: AccountType.ENTERPRISE,

    icon: <EnterpriseInner width={33 * em} height={30 * em} />,
    title: 'activité',
  },
];
const ProRegisterIDSCreen = (props) => {
  const accountIcon = proAccountIcons.find((item) => item.accountType === props.accountType);
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <AccountCommonHeader style={styles.header} rightTxt="Annuler" />
      <View style={styles.popupView}>
        <View style={styles.popupTopView}>
          {accountIcon.icon}
          <TitleText text={'Identité'} style={styles.titleText} />
          <CommonTextInput
            onChangeText={(t) => setName(t)}
            text={'Quel est le nom de ton ' + accountIcon.title + ' ?'}
            style={styles.commonInput}
          />
        </View>
        <View style={styles.popupBottomView}>
          <CommonButton
            text={'Suivant'}
            onPress={() => Actions.proRegisterMobile({ accountType: props.accountType })}
            disabled={name === '' ? true : false}
            style={[
              styles.btnNext,
              { backgroundColor: name === '' ? 'rgba(115, 152, 253, 0.5)' : 'rgba(115, 152, 253, 1)' },
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
    backgroundColor: '#7398FC',
    alignItems: 'center',
  },
  header: {
    height: '12%',
  },
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
  popupTopView: { paddingTop: 39 * em, alignItems: 'center', width: '80%' },
  titleText: { marginTop: 11 * em, marginBottom: 35 * em },
  btnNext: {
    marginBottom: 30 * em,
    backgroundColor: '#7398FC',
  },
  commonInput: {
    width: '100%',
    height: 52 * em,
  },
};

export default ProRegisterIDSCreen;
