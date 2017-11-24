Template.adminFinances.onCreated( function(){

});

Template.adminFinances.helpers({
  'recieptList': () => {
    return Reciepts.find();
  }
});