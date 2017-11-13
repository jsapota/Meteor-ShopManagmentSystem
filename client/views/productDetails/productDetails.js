Template.productDetails.onCreated(function() {

});

Template.productDetails.helpers({
  'cloth': () => {
    return Clothes.find({_id: id});
  }
});

Template.productDetails.events({

});