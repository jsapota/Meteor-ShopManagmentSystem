Template.productDetails.onCreated(function() {
  this.id = new ReactiveVar(FlowRouter.getParam("id"));
  this.photo = new ReactiveVar(true);
  this.size = new ReactiveVar('undef');
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
  'chosenSize': () => {
    if(Template.instance().size.get() === 'undef')
      return "";
    else
      return Template.instance().size.get();
  }
});

Template.productDetails.events({
  'click .arrow': function() {
    Template.instance().photo.set(!Template.instance().photo.get());
  },
  'click .btn-default': function(event) {
    Template.instance().size.set(event.target.value);
  }
});