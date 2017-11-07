Template.adminNav.onCreated( function(){
  this.feature = new ReactiveVar("main");
});

Template.adminNav.helpers({
  activeItem: (value) => {
    if( Template.instance().feature.get() === value )
      return "active"
  }

});