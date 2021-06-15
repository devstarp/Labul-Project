import Demand from './Demand';
import DemandType from './DemandType';

export default class SellDemand extends Demand {
  constructor(title, slogan, comment, date, coverImage, location, subType, price, discountPrice, discountInfo) {
    super(null, DemandType.SELL, date, location, coverImage);
    this.title = title;
    this.slogan = slogan;
    this.comment = comment;
    this.subType = subType;
    this.price = price;
    this.discountPrice = discountPrice;
    this.discountInfo = discountInfo;
  }
}
