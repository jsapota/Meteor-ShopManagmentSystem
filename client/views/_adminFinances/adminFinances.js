Template.adminFinances.onCreated( function(){

});

Template.adminFinances.helpers({
  'recieptList': () => {
    return Reciepts.find();
  },
  'giveMeName': (details) => {
    return details[0].name + ' ' + details[1].surname;
  },
  'productDetails': (id) => {
    let product =  Clothes.findOne({_id: id});
    return product.name || "empty";
  },
  'shortDate': (date) => {
    let temp = "" + date;
    return temp.substring(0, 16);
  }
});