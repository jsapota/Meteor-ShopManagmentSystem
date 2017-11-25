/**
 * Created by Jakub on 25.11.2017.
 */
Template.layout.onCreated(function() {
  Session.set('openCart', false);
});

Template.layout.helpers({
  'openCart': () => {
    return Session.get('openCart');
  }
});