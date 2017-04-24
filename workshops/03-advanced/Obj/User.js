export default class User {

  constructor(id, name) {
    this.id = id;
    this.name = name
    this.favors=[];
  }

  hello(target) {
    console.log('test');
    return `Hello ${target}, I am ${this.name}`
  }

  report() {
    return this;
  }

  addFavor(favor) {
    this.favors.push(favor);
  }

}