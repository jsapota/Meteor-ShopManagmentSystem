Template.productDetails.onCreated(function() {
  this.id = new ReactiveVar(FlowRouter.getParam('id'));
  this.photo = new ReactiveVar(true);
  this.size = new ReactiveVar('undef');
  this.amount = new ReactiveVar(0);
});

Template.productDetails.onRendered(function() {
  Session.set('category', FlowRouter.getParam('category'));
});

Template.productDetails.helpers({
  'clothFields': () => {
    return Clothes.find({_id: Template.instance().id.get()});
  },
  'whichPhoto': (photo, photoSec) => {
    if(Template.instance().photo.get())
      return photo;
    else
      return photoSec;
  },
  'inStock': (value) => {
    console.log(value);
    if(value === 0)
      return "disabled";
  },
  'chosenSize': () => {
    if(Template.instance().size.get() === 'undef')
      return "";
    else
      return Template.instance().size.get();
  },
  'chosenAmount': () => {
    let value = Template.instance().amount.get();
    if( value > 0)
      return "" + value + " *"
  },
  'reqFilled': () => {
    if(Template.instance().size.get() === 'undef' || Template.instance().amount.get() === 0)
      return "disabled"
  },
  'amount': () => {
    return Template.instance().amount.get();
  }
});

Template.productDetails.events({
  'click .arrow': function() {
    Template.instance().photo.set(!Template.instance().photo.get());
  },
  'click .sizes': function(event) {
    event.preventDefault();
    Template.instance().size.set(event.target.value);
  },
  'click #addAmount': function(event) {
    event.preventDefault();
    Template.instance().amount.set(Template.instance().amount.get() + 1);
  },
  'click #subAmount': function(event) {
    event.preventDefault();
    if(Template.instance().amount.get() > 0)
      Template.instance().amount.set(Template.instance().amount.get() - 1);
  },
  'click #addToCart': () => {
    let item = FlowRouter.getParam("id");
    let amount = Template.instance().amount.get();
    let size = Template.instance().size.get();
    Template.instance().amount.set(0);
    Template.instance().size.set('undef');
    Meteor.call('addToCart', item, amount, size);
  }
});