Template.cart.onCreated(function () {
  let total = 0;
  let items = Cart.findOne({user: Meteor.user}).items;
  items.forEach(function(value) {
    let price = Clothes.findOne({_id: value.id}).price;
    total += value.amount * price;
  });
  this.totalPrice = new ReactiveVar(total);
  this.stage = new ReactiveVar(1);
  this.orderDetails = new ReactiveVar();
  this.error = new ReactiveVar("");
});

Template.cart.onRendered(function() {});

Template.cart.helpers({
  'isThereError': () => {
    return "" !== Template.instance().error.get();
  },
  'error': () => {
    return Template.instance().error.get();
  },
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
  },
  'orderDetails': () => {
    let details = Template.instance().orderDetails.get();
    return {
      'name': details[0],
      'surname': details[1],
      'street': details[2],
      'city': details[3],
      'country': details[4]
    }
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
      Template.instance().error.set("");
  },
  'click .btn-back': () => {
    if(Template.instance().stage.get() === 3){
      let inputValues = document.querySelectorAll('.recData');
      let values = Template.instance().orderDetails.get();
      let i = 0;
      inputValues.forEach((field) => {
        field.value = values[i];
      })
    };
    Template.instance().error.set("");
    Template.instance().stage.set(Template.instance().stage.get() - 1);
  },
  'click .btn-form': () => {
    let inputs = document.querySelectorAll('.recData');
    let values = [];
    let error = "";
    inputs.forEach((value) => {
      values.push(value.value);
      if(value.value.length === 0)
        error = "Check if all fields are correct before you confirm."
    });
    if( error === ""){
      Template.instance().orderDetails.set(values);
      Template.instance().stage.set(Template.instance().stage.get() + 1);
    } else {
      Template.instance().error.set({'error': error});
    }
  }
});