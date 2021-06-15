import Demand from './Demand';
import DemandType from './DemandType';

export default class NeedDemand extends Demand {
  constructor(user, organName, title, date, coverImage, location, subType, price) {
    super(user, DemandType.NEED, date, location, coverImage);
    this.title = title;
    this.subType = subType;
    this.organName = organName;
    this.price = price;
  }
}
