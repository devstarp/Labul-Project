import Demand from './Demand';
import DemandType from './DemandType';

export default class GiveDemand extends Demand {
  constructor(user, title, organName, date, coverImage, location, subType) {
    super(user, DemandType.GIVE, date, location, coverImage);
    this.title = title;
    this.subType = subType;
    this.organName = organName;
  }
}
