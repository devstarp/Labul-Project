export default class Message {
  constructor(user, demand, lastText, checked, date) {
    this.id = (Date.now() + parseInt(Math.random() * 100000000)).toString();
    this.user = user;
    this.badge = demand.coverImage;
    this.title = demand.title;
    this.lastText = lastText;
    this.checked = checked;
    this.date = date;
  }
}
