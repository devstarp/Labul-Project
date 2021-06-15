import Demand from './Demand';
import DemandType from './DemandType';

export default class OrganizeDemand extends Demand {
  constructor(user, organName, title, date, coverImage, location, subType) {
    super(user, DemandType.ORGANIZE, date, location, coverImage);
    this.title = title;
    this.subType = subType;
    this.organName = organName;
  }
}
