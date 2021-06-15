import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import { em, mabulColors, hm } from 'view/common/const';
import CommonText from 'view/components/text/CommonText';
import MabulCommonHeader from 'view/components/header/MabulCommonHeader';
import CommonButton from 'view/components/button/CommonButton';
import { Family, Friend, Neighbor, All } from 'assets/svg/icons';
import { Actions } from 'react-native-router-flux';
import DemandCircleCheckBox from 'view/components/checkbox/DemandCircleCheckBox';
import RelationshipType from 'model/user/RelationshipType';
import DemandType from 'model/demand/DemandType';

const MabulCommonShareScreen = ({ mabulSettings, process }) => {
  const conceptColor = mabulSettings.color;
  const [checked, setChecked] = useState();

  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={process} isNoBackBtn={true} progressBarColor={conceptColor} />
      <View style={styles.body}>
        <TitleText text={'Je partage avec'} style={styles.title} />
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
      <CommonButton
        style={[styles.btn, { backgroundColor: conceptColor }]}
        text="Publier"
        onPress={() => {
          mabulSettings.type === DemandType.ORGANIZE
            ? Actions.myOrganize()
            : mabulSettings.type === DemandType.GIVE
            ? Actions.main()
            : Actions.myNeed();
        }}
      />
    </View>
  );
};

const styles = {
  container: { flex: 1, backgroundColor: '#ffffff', marginTop: 16 * em },
  header: { height: '10.3%' },
  circleCheckBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150 * em,
    height: 176 * hm,
    borderRadius: 20 * em,
    margin: 7.5 * hm,
  },
  body: { flex: 1, paddingHorizontal: 15 * em },
  title: { textAlign: 'left', marginTop: 35 * em, lineHeight: 38 * em, marginLeft: 15 * em },
  shadowStyle: {
    elevation: 5,
    shadowColor: '#A7A7A733',
    shadowOffset: { width: 0, height: 8 * hm },
    shadowOpacity: 1,
    shadowRadius: 20 * em,
  },
  btn: { alignSelf: 'center', marginBottom: 30 * em, backgroundColor: '#38C2FF' },
};

export default MabulCommonShareScreen;
