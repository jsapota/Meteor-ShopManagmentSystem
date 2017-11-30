Template.cart.onCreated(function () {
  let total = 0;
  let items = Cart.findOne({user: Meteor.user}).items;
  items.forEach(function(value) {
    let price = Clothes.findOne({_id: value.id}).price;
    total += value.amount * price;
  });
  this.totalPrice = new ReactiveVar(total);
  this.stage = new ReactiveVar(1);
});

Template.cart.onRendered(function() {});

Template.cart.helpers({
  'stageOne': () => {
    return Template.instance().stage.get() === 1;
  },
  'stageTwo': () => {
    return Template.instance().stage.get() === 2;
  },
  'totalPrice': () => {
    let total = 0;
    let items = Cart.findOne({user: Meteor.user}).items;
    items.forEach(function(value) {
      let price = Clothes.findOne({_id: value.id}).price;
      total += value.amount * price;
    });
    Template.instance().totalPrice.set(total);
    return Template.instance().totalPrice.get();
  },
  'userCart': () => {
    return Cart.findOne({user: Meteor.user}) || false;
  },
  'cartItem': () => {
    return Cart.findOne({user: Meteor.user}).items || false;
  },
  'productPrice': (id) => {
    return Clothes.findOne({_id: id}).price;
  },
  'productName': (id) => {
    return Clothes.findOne({_id: id}).name;
  }
});

Template.cart.events({
  'click .btn-add': (event) => {
    Meteor.call('updateCart', event.target.value, 1, event.target.getAttribute('data-size'));
  },
  'click .btn-sub': (event) => {
    Meteor.call('updateCart', event.target.value, -1, event.target.getAttribute('data-size'));
  },
  'click .btn-order': () => {
    Template.instance().stage.set(Template.instance().stage.get() + 1);
  },
  'click .btn-back': () => {
    Template.instance().stage.set(Template.instance().stage.get() - 1);
  },
});