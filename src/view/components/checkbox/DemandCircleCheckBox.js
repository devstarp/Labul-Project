import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  ViewPropTypes as RNViewPropTypes,
  Animated,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { em, hm } from 'view/common/const';
import { Family, Friend, Neighbor, All, CheckedWhite } from 'assets/svg/icons';
import RelationshipType from 'model/user/RelationshipType';
import CommonText from 'view/components/text/CommonText';
const ViewPropTypes = RNViewPropTypes || View.propTypes;
const iconSize = { width: 48 * em, height: 48 * em };

const circleIcons = [
  { id: RelationshipType.FAMILIY, icon: Family(iconSize), color: '#EF88B9', title: 'ma famille' },
  { id: RelationshipType.FRIEND, icon: Friend(iconSize), color: '#6784DA', title: 'mes amis' },
  { id: RelationshipType.NEIGHBOR, icon: Neighbor(iconSize), color: '#40CDDE', title: 'mes voisins' },
  { id: 'all', icon: All(iconSize), color: '#40CDDE', title: 'tous' },
];
export default class DemandCircleCheckBox extends Component {
  static propTypes = {
    ...ViewPropTypes,
    onClick: PropTypes.func.isRequired,
    isChecked: PropTypes.bool.isRequired,
    disabled: PropTypes.bool,
  };
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(1), // Initial value for opacity: 0
      isChecked: false,
    };
    this.onClick = this.onClick.bind(this);
    this.fadeOut = this.fadeOut.bind(this);
    console.log(this.props.circleType);
    this.circleIcon = circleIcons.find((item) => item.id === this.props.circleType);
  }
  fadeOut() {
    this.setState({ fadeAnim: new Animated.Value(1) }, () => {
      Animated.timing(
        // Animate over time
        this.state.fadeAnim, // The animated value to drive
        {
          toValue: 0, // Animate to opacity: 1 (opaque)
          duration: 2000, // 2000ms
        }
      ).start();
    });
  }
  onClick() {
    this.props.onClick && this.props.onClick();
    this.fadeOut;
  }

  genShape() {
    const CheckFalse = this.circleIcon.icon;
    const CheckTrue = <View style={styles.checkedView}>{CheckedWhite({ width: 20 * em, height: 14.65 * em })}</View>;

    return this.props.isChecked ? CheckTrue : CheckFalse;
  }

  render() {
    let { fadeAnim } = this.state;
    return (
      <TouchableOpacity
        // activeOpacity={1}
        style={this.props.style}
        onPress={this.onClick}
        underlayColor="transparent"
        activeOpacity={1}

        disabled={this.props.disabled}>
        <Animated.View style={{ opacity: fadeAnim }}>{this.genShape()}</Animated.View>
        <CommonText text={this.circleIcon.title} color="#6A8596" style={{ marginTop: 15 * hm }} />
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  checkedView: {
    width: 48 * em,
    height: 48 * em,
    borderRadius: 24 * em,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#40CDDE',
  },
});
