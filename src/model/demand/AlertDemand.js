import Demand from './Demand';
import DemandType from './DemandType';

export default class AlertDemand extends Demand {
  constructor(user, organName, title, date, location, subType, price) {
    super(user, DemandType.ALERT, date, location);
    this.title = title;
    this.subType = subType;
    this.organName = organName;
    this.price = price;
  }
}
