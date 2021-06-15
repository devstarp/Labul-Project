import React, { useState } from 'react';
import { View } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import { em, hm } from 'view/common/const';
import CommonText from 'view/components/text/CommonText';
import MabulCommonHeader from 'view/components/header/MabulCommonHeader';
import MabulNextButton from 'view/components/button/MabulNextButton';
import { Actions } from 'react-native-router-flux';
import { Family, Friend, Neighbor, All } from 'assets/svg/icons';
import DemandCircleCheckBox from 'view/components/checkbox/DemandCircleCheckBox';
import RelationshipType from 'model/user/RelationshipType';

const AlertCircleSelectionScreen = () => {
  const conceptColor = '#F9547B';
  const [checked, setChecked] = useState();

  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={20} noBackButton={true} progressBarColor={conceptColor} />
      <View style={styles.body}>
        <TitleText text={'J’alerte'} style={styles.title} />
        <View style={{ flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
          <DemandCircleCheckBox
            style={[styles.circleCheckBox, checked === 0 ? styles.shadowStyle : {}]}
            circleType={RelationshipType.NEIGHBOR}
            isChecked={checked === 0}
            onClick={() => {
              setChecked(0);
            }}
          />
          <DemandCircleCheckBox
            circleType={RelationshipType.FRIEND}
            style={[styles.circleCheckBox, checked === 1 ? styles.shadowStyle : {}]}
            isChecked={checked === 1}
            onClick={() => {
              setChecked(1);
            }}
          />
          <DemandCircleCheckBox
            circleType={RelationshipType.FAMILIY}
            style={[styles.circleCheckBox, checked === 2 ? styles.shadowStyle : {}]}
            isChecked={checked === 2}
            onClick={() => {
              setChecked(2);
            }}
          />
          <DemandCircleCheckBox
            circleType="all"
            isChecked={checked === 3}
            style={[styles.circleCheckBox, checked === 3 ? styles.shadowStyle : {}]}
            onClick={() => {
              setChecked(3);
            }}
          />
        </View>
      </View>
      <MabulNextButton
        color={conceptColor}
        style={[styles.btn, { backgroundColor: conceptColor }]}
        text="Suivant"
        onPress={() => Actions.alertClass({ process: 40 })}
      />
    </View>
  );
};

const styles = {
  container: { flex: 1, backgroundColor: '#ffffff' },
  header: { height: 81 * hm },
  body: { flex: 1, paddingHorizontal: 15 * em },
  title: {
    width: 315 * em,
    textAlign: 'left',
    marginTop: 35 * hm,
    marginBottom: 20 * hm,
    lineHeight: 38 * em,
    marginLeft: 15 * em,
  },
  circleCheckBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150 * em,
    height: 176 * hm,
    borderRadius: 20 * em,
    margin: 7.5 * hm,
  },
  shadowStyle: {
    elevation: 5,
    shadowColor: '#A7A7A733',
    shadowOffset: { width: 0, height: 8 * hm },
    shadowOpacity: 1,
    shadowRadius: 20 * em,
  },
  btn: { postion: 'absolute', alignSelf: 'flex-end', right: 30 * em, bottom: 30 * hm, backgroundColor: '#38C2FF' },
};

export default AlertCircleSelectionScreen;
