import User from 'model/user/User';
import RelationshipType from 'model/user/RelationshipType';
import { feedbackIcons } from 'view/common/icons';

const users = [
  new User(
    'Amandine Bernard',
    require('assets/images/avatars/amandine-bernard-116x116.png'),
    [RelationshipType.FRIEND, RelationshipType.NEIGHBOR],
    'user@labul.com'
  ),
  new User(
    'Amélie Petit',
    require('assets/images/avatars/amelie-petit-116x116.png'),
    [RelationshipType.NEIGHBOR],
    'user@labul.com'
  ),
  new User(
    'Antoine Durand',
    require('assets/images/avatars/antoine-durand-116x116.png'),
    [RelationshipType.NEIGHBOR],
    'user@labul.com'
  ),
  new User('Robert Dupont', require('assets/images/avatars/rober-dupont-116x116.png'), '', 'user@labul.com'),
  new User('Julien Girar', require('assets/images/avatars/julien-girard-116x116.png'), '', 'user@labul.com'),
  new User(
    'Joseph Martin',
    require('assets/images/avatars/joseph-martin-116x116.png'),
    [RelationshipType.FRIEND, RelationshipType.NEIGHBOR],
    'user@labul.com'
  ),
  new User(
    'Pierre Legrand',
    require('assets/images/avatars/pierre-legrand-116x116.png'),
    [RelationshipType.FRIEND, RelationshipType.NEIGHBOR],
    'user@labul.com'
  ),
  new User(
    'Philippe Durand',
    require('assets/images/avatars/philippe-durand-116x116.png'),
    [RelationshipType.FRIEND, RelationshipType.NEIGHBOR],
    'user@labul.com'
  ),
  new User(
    'Sarah Dupont',
    require('assets/images/avatars/sarah-dupont-116x116.png'),
    [RelationshipType.FRIEND, RelationshipType.NEIGHBOR],
    'user@labul.com'
  ),
];

const originalMyProfile = new User(
  'Mathieu Torin',
  null,
  null,
  null,
  'mathieu@labul.com',
  null,
  null,
  null,
  0,
  0,
  0,
  0,
  0,
  0,
  null,
  '+590 6 90 874 258',
  'ABYMES 97139 Guadeloupe'
);
const updatedMyProfile = new User(
  'Mathieu Torin',
  require('assets/images/tab_profile_off.png'),
  null,
  null,
  'mathieu@labul.com',
  'Je suis disponible le soir et le week-end',
  'En plus d’être quelqu’un de sympa je suis un grand bricoleur, je suis passionné par le bricolage et dans tout le type de petits travaux.',
  ['Bricoleur', 'Jardinier'],
  4,
  7,
  17,
  24,
  6,
  2,
  feedbackIcons,
  '+590 6 90 874 258',
  'ABYMES 97139 Guadeloupe'
);
export { users, originalMyProfile, updatedMyProfile };
