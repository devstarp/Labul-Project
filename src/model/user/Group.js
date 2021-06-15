import User from './User';
import UserType from './UserType';

export default class Group extends User {
  constructor(type, name, relationship, id, number) {
    super(name, '', relationship);
    this.id = id;
    this.type = type ? UserType.GROUP : null;
    this.number = number;
  }
}
