Template.header.onCreated(function() {
  this.openCart = ReactiveVar(false);
});

Template.header.helpers({
  'openCart': () => {
    Template.instance().openCart.get();
  },
  'test': () => {
    document.getElementById("cart").style = "background: red";
  }
});

Template.header.events({
  'click #cart': () => {
    Template.instance().openCart.set(!Template.instance().openCart.get());
    Session.set('openCart', Template.instance().openCart.get());
  }
});