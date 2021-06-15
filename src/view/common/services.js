import { users, myOriginalProfile } from 'view/common/users';
import React from 'react';
import { View } from 'react-native';
import OrganizeDemandType from 'model/demand/OrganizeDemandType';
import NeedDemand from 'model/demand/NeedDemand';
import NeedDemandType from 'model/demand/NeedDemandType';
import GiveDemand from 'model/demand/GiveDemand';
import SellDemand from 'model/demand/SellDemand';
import SellDemandType from 'model/demand/SellDemandType';
import NeedStatusType from 'model/demand/NeedStatusType';
import { AlertRed, Computer } from 'assets/svg/icons';
import OrganizeDemand from 'model/demand/OrganizeDemand';
import { em, hm } from 'view/common/const';

const invitationsList = [
  new NeedDemand(
    users[0],
    'J’ai besoin Service Bricolage',
    'Réparer une chaise',
    '04 Fév · 08h00',
    require('assets/images/Demandes/details/repair.png'),
    { lat: 321 * hm, lon: 149 * em },
    NeedDemandType.REPAIR
  ),
  new NeedDemand(
    users.find((item) => item.name === 'Joseph Martin'),
    'J’ai besoin Service Co-Voiturage',
    'Aller à La Douche',
    '12 Jui · 12h00',
    require('assets/images/Demandes/Liste/car-551x221.png'),
    { lat: 273 * hm, lon: 211 * em },
    NeedDemandType.CARPOOL
  ),
];
const mapDemands = [
  Object.assign(
    new NeedDemand(
      users[0],
      'J’ai besoin Service Bricolage',
      'Réparer une chaise',
      '04 Fév · 08h00',
      require('assets/images/Demandes/Liste/reparer-chaise-551x221.png'),
      { lat: 205 * hm, lon: 36 * em },
      NeedDemandType.ANIMAL
    ),
    { status: null }
  ),
  Object.assign(
    new GiveDemand(
      users.find((item) => item.name === 'Joseph Martin'),
      'J’ai besoin Service Co-Voiturage',
      'Aller à La Douche',
      '12 Jui · 12h00',
      require('assets/images/Demandes/Liste/car-551x221.png'),
      { lat: 273 * hm, lon: 211 * em },
      NeedDemandType.CARPOOL
    ),
    { status: NeedStatusType.CANCELED }
  ),
  Object.assign(
    new SellDemand(
      'Arbre de vie',
      'Je vends Bon plan',
      'Spray cuisine 100% Bio',
      '04 Fév · 08h00',
      require('assets/images/Demandes/Liste/spary-cuisine-551x221.png'),
      { lat: 273 * hm, lon: 211 * em },
      SellDemandType.PLANT,
      '5,00 €'
    )
  ),
  Object.assign(
    new NeedDemand(
      users.find((item) => item.name === 'Pierre Legrand'),
      'J’ai besoin Service Bricolage',
      'iPhoneX 256Go comme neuf',
      null,
      (
        <View
          style={{
            backgroundColor: '#EEE7FA',
            marginTop: 15 * hm,
            width: '100%',
            height: 85 * hm,
            borderRadius: 15 * hm,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Computer width={39 * em} height={35 * em} />
        </View>
      ),
      1,
      NeedDemandType.REPAIR_DEVICE,
      '560,00 €'
    ),
    { status: NeedStatusType.INPROGRESS }
  ),
  Object.assign(
    new OrganizeDemand(
      users.find((item) => item.name === 'Philippe Durand'),

      'J’organise Atelier',
      'Photographie vintage',
      '01 Mar · 13h00',
      require('assets/images/Demandes/Liste/photographie-vintage-551x221.png'),
      1,
      OrganizeDemandType.WORKSHOP
    ),
    { status: null }
  ),
  Object.assign(
    new SellDemand(
      'La belle coiffure',
      'Je vends Promotion',
      'Coiffure et soin keratine',
      '04 Fév · 08h00',
      require('assets/images/Demandes/Liste/coiffure-soin-keratine-551x221.png'),
      1,
      SellDemandType.BEAUTY,
      '5,00 €',
      '15,00 €',
      '(Jusqu’au 25 Fév)'
    ),
    { status: null }
  ),
  Object.assign(
    new GiveDemand(
      users.find((item) => item.name === 'Antoine Durand'),
      '',
      'Route barré',
      null,
      (
        <View
          style={{
            marginTop: 15 * hm,
            backgroundColor: '#FBEAEE',
            width: '100%',
            height: 85 * hm,
            borderRadius: 15 * hm,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AlertRed width={43 * em} height={37 * em} />
        </View>
      ),
      '77 Boulevard Amedee Clara Le Gosier'
    ),
    { status: null }
  ),
  Object.assign(
    new NeedDemand(
      users.find((item) => item.name === 'Sarah Dupont'),
      'J’ai besoin Service Bricolage',
      'Nourriture vegan',
      null,
      require('assets/images/Demandes/Liste/nourriture-vegan-551x221.png'),
      1,
      NeedDemandType.VEGAN_FOOD
    ),
    { status: NeedStatusType.WAITING }
  ),
];
const Demands = [
  Object.assign(
    new NeedDemand(
      users[0],
      'J’ai besoin Service Bricolage',
      'Réparer une chaise',
      '04 Fév · 08h00',
      require('assets/images/Demandes/Liste/reparer-chaise-551x221.png'),
      { lat: 321 * hm, lon: 149 * em },
      NeedDemandType.REPAIR
    ),
    { status: null }
  ),
  Object.assign(
    new NeedDemand(
      users.find((item) => item.name === 'Joseph Martin'),
      'J’ai besoin Service Co-Voiturage',
      'Aller à La Douche',
      '12 Jui · 12h00',
      require('assets/images/Demandes/Liste/car-551x221.png'),
      { lat: 273 * hm, lon: 211 * em },
      NeedDemandType.CARPOOL
    ),
    { status: NeedStatusType.CANCELED }
  ),
  Object.assign(
    new SellDemand(
      'Arbre de vie',
      'Je vends Bon plan',
      'Spray cuisine 100% Bio',
      '04 Fév · 08h00',
      require('assets/images/Demandes/Liste/spary-cuisine-551x221.png'),
      { lat: 273 * hm, lon: 211 * em },
      SellDemandType.PLANT,
      '5,00 €'
    )
  ),
  Object.assign(
    new NeedDemand(
      users.find((item) => item.name === 'Pierre Legrand'),
      'J’ai besoin Service Bricolage',
      'iPhoneX 256Go comme neuf',
      null,
      (
        <View
          style={{
            backgroundColor: '#EEE7FA',
            marginTop: 15 * hm,
            width: '100%',
            height: 85 * hm,
            borderRadius: 15 * hm,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Computer width={39 * em} height={35 * em} />
        </View>
      ),
      1,
      NeedDemandType.REPAIR_DEVICE,
      '560,00 €'
    ),
    { status: NeedStatusType.INPROGRESS }
  ),
  Object.assign(
    new OrganizeDemand(
      users.find((item) => item.name === 'Philippe Durand'),

      'J’organise Atelier',
      'Photographie vintage',
      '01 Mar · 13h00',
      require('assets/images/Demandes/Liste/photographie-vintage-551x221.png'),
      1,
      OrganizeDemandType.WORKSHOP
    ),
    { status: null }
  ),
  Object.assign(
    new SellDemand(
      'La belle coiffure',
      'Je vends Promotion',
      'Coiffure et soin keratine',
      '04 Fév · 08h00',
      require('assets/images/Demandes/Liste/coiffure-soin-keratine-551x221.png'),
      1,
      SellDemandType.BEAUTY,
      '5,00 €',
      '15,00 €',
      '(Jusqu’au 25 Fév)'
    ),
    { status: null }
  ),
  Object.assign(
    new GiveDemand(
      users.find((item) => item.name === 'Antoine Durand'),
      '',
      'Route barré',
      null,
      (
        <View
          style={{
            marginTop: 15 * hm,
            backgroundColor: '#FBEAEE',
            width: '100%',
            height: 85 * hm,
            borderRadius: 15 * hm,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AlertRed width={43 * em} height={37 * em} />
        </View>
      ),
      '77 Boulevard Amedee Clara Le Gosier'
    ),
    { status: null }
  ),
  Object.assign(
    new NeedDemand(
      users.find((item) => item.name === 'Sarah Dupont'),
      'J’ai besoin Service Bricolage',
      'Nourriture vegan',
      null,
      require('assets/images/Demandes/Liste/nourriture-vegan-551x221.png'),
      1,
      NeedDemandType.VEGAN_FOOD
    ),
    { status: NeedStatusType.WAITING }
  ),
];
const needsLists = [
  Object.assign(
    new NeedDemand(
      myOriginalProfile,
      'J’ai besoin coup de main bricolage',
      'Récolter des figues',
      new Date(),
      require('assets/images/Demandes/details/recolter3.png'),
      3,
      NeedDemandType.REPAIR
    ),
    { status: NeedStatusType.INPROGRESS }
  ),
  Object.assign(
    new OrganizeDemand(
      myOriginalProfile,
      'J’organise apéro',
      'Universitaire',
      new Date(),
      require('assets/images/Demandes/details/unniversitaire.png'),
      1,
      OrganizeDemandType.WORKSHOP
    ),
    { status: NeedStatusType.INPROGRESS }
  ),
  Object.assign(
    new NeedDemand(
      myOriginalProfile,
      'Coup de main Entretien de la maison/ travaux ménagers',
      'Récolter des figues',
      new Date(),
      require('assets/images/Demandes/details/recolter.png'),
      3,
      NeedDemandType.REPAIR
    ),
    { status: NeedStatusType.CANCELED }
  ),
];
export { Demands, needsLists, invitationsList };
