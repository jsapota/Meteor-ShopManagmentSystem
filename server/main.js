import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  if (Clothes.find().count() < 20) {
    Meteor.call('refillBase');
  }
});
