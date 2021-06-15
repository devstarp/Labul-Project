import React from 'react';
import { View } from 'react-native';
import NeedDemandType from 'model/demand/NeedDemandType';
import DemandType from 'model/demand/DemandType';
import SellDemandType from 'model/demand/SellDemandType';
import { ComputerIcon, BricologeIcon, WorkshpIcon, AlertRed } from 'assets/svg/icons/';
import { em, WIDTH } from 'view/common/const';
import {
  Ambianceur,
  Aperitif,
  Benevolent,
  Bricologe,
  Confidence,
  Discret,
  Dishes,
  Helpful,
  GoodNeighbor,
  GoodHost,
  HandHeart,
  Hypersociable,
  Resourceful,
  WellLiving,
  SwissKnife,
  Transport,
  MealPreparationPink,
} from 'assets/svg/icons';
import { AddPhotoBlue, AddPhotoGreen, AddPhotoYellow } from 'assets/svg/icons';
import {
  AddressSell,
  AddressNeed,
  AddPhotoPurple,
  AddressGive,
  AddressOrganize,
  CalendarSell,
  CalendarGive,
  CalendarOrganize,
  CalendarNeed,
} from 'assets/svg/icons';
import { Edit, Edit1, Edit2, Edit3, Document, Document1, Document2, Document3 } from 'assets/svg/icons';

const iconSize = { width: 33 * em, height: 33 * em };
const feedbackIcons = [
  { id: 0, name: 'Le discret/\npas intrusif', icon: Discret(iconSize) },
  { id: 1, name: 'Le pro du\nbricolage', icon: Bricologe(iconSize) },
  { id: 2, name: 'Le pro des\np’tits plats', icon: Dishes(iconSize) },
  { id: 3, name: 'Digne de\nconfiance', icon: Confidence(iconSize) },
  { id: 4, name: 'Hypersociable', icon: Hypersociable(iconSize) },
  { id: 5, name: 'Bon hôte', icon: GoodHost(iconSize) },
  { id: 6, name: 'Apèros', icon: Aperitif(iconSize) },
  { id: 7, name: 'La main sur\nle coeur', icon: HandHeart(iconSize) },
  { id: 8, name: 'Le débrouillard', icon: Resourceful(iconSize) },
  { id: 9, name: 'Le bon vivant', icon: WellLiving(iconSize) },
  { id: 10, name: 'Le bon voisin', icon: GoodNeighbor(iconSize) },
  { id: 11, name: 'Le serviable', icon: Helpful(iconSize) },
  { id: 12, name: 'L’ambianceur', icon: Ambianceur(iconSize) },
  { id: 13, name: 'Le couteau suisse', icon: SwissKnife(iconSize) },
  { id: 14, name: 'Le bienveillant­­­', icon: Benevolent(iconSize) },
];
const getUserBadge = (type, subType, size = 21 * em) => {
  const badgeSize = { width: size, height: size };

  let userBadge = WorkshpIcon(badgeSize);
  if (type === DemandType.NEED) {
    if (subType === NeedDemandType.REPAIR) {
      userBadge = BricologeIcon(badgeSize);
    } else if (subType === NeedDemandType.CARPOOL) {
      userBadge = Transport(badgeSize);
    } else if (subType === NeedDemandType.REPAIR_DEVICE) {
      userBadge = ComputerIcon(badgeSize);
    } else if (subType === NeedDemandType.VEGAN_FOOD) {
      userBadge = MealPreparationPink(badgeSize);
    }
  } else if (type === DemandType.GIVE) {
    userBadge = (
      <View
        style={{
          backgroundColor: '#FBEAEE',
          width: 21 * em,
          height: 21 * em,
          borderRadius: 10.5 * em,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {AlertRed({ width: 11 * em, height: 9 * em })}
      </View>
    );
  } else if (type === DemandType.SELL) {
    if (subType === SellDemandType.PLANT) {
      userBadge = require('assets/images/logos/arbre-de-vie-76x76.png');
    } else {
      userBadge = require('assets/images/logos/la-belle-coiffure-76x76.png');
    }
  }
  return userBadge;
};
const addIconSize = { width: 40 * em, height: 28 * em };
const addressIconSize = { width: 21 * em, height: 30 * em, marginRight: 14 * em };
const editIconSize = { width: 19 * em, height: 22 * em, marginRight: 20 * em };
const documentIconSize = { width: 20 * em, height: 22 * em, marginRight: 20 * em };
const calendarIconSize = { width: 21 * em, height: 22.3 * em, marginRight: 15 * em };

const mabulIcons = [
  {
    type: DemandType.ORGANIZE,
    addPhotoIcon: AddPhotoYellow(addIconSize),
    color: '#FDC641',
    addressIcon: AddressOrganize(addressIconSize),
    calendarIcon: CalendarOrganize(calendarIconSize),
    editIcon: Edit2(editIconSize),
    documentIcon: Document2(documentIconSize),
    noteTitle: 'Donne un titre à ton apéro',
  },
  {
    type: DemandType.NEED,
    addPhotoIcon: AddPhotoBlue(addIconSize),
    color: '#38C2FF',
    addressIcon: AddressNeed(addressIconSize),
    calendarIcon: CalendarNeed(calendarIconSize),
    editIcon: Edit(editIconSize),
    documentIcon: Document(documentIconSize),
    noteTitle: 'Donne un titre à ta demande',
  },
  {
    type: DemandType.GIVE,
    addPhotoIcon: AddPhotoGreen(addIconSize),
    color: '#34D9B8',
    addressIcon: AddressGive(addressIconSize),
    calendarIcon: CalendarGive(calendarIconSize),
    editIcon: Edit3(editIconSize),
    documentIcon: Document3(documentIconSize),
    noteTitle: 'Donne un titre à ta demande',
  },
  {
    type: DemandType.SELL,
    addPhotoIcon: AddPhotoPurple(addIconSize),
    color: '#AA87E5',
    addressIcon: AddressSell(addressIconSize),
    calendarIcon: CalendarSell(calendarIconSize),
    editIcon: Edit1(editIconSize),
    documentIcon: Document1(documentIconSize),
    noteTitle: 'Donne un titre à ta vente',
  },
];
export { feedbackIcons, getUserBadge, mabulIcons };
