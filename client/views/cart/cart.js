Template.cart.onCreated(function () {
  template = Template.instance();
});

Template.cart.helpers({
  'cartItem': () => {
    return [{},{}];
  }
});

