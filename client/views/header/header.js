Template.header.onCreated(function() {
  this.openCart = ReactiveVar(false);
});

Template.header.helpers({
  'openCart': () => {
    Template.instance().openCart.get();
  }
});

Template.header.events({
  'click .fa-shopping-basket': () => {
    Template.instance().openCart.set(!Template.instance().openCart.get());
  }
});