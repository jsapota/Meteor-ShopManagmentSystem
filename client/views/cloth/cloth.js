Template.cloth.onCreated(function () {
  this.mousePos = new ReactiveVar(false);
});

Template.cloth.helpers({
  imageVisible: () => {
    return Template.instance().mousePos.get();
  }
});


Template.cloth.events({
  'mouseenter .imageHolder'(event, instance) {
    instance.mousePos.set(true);
  },
  'mouseleave .imageHolder'(event, instance) {
    instance.mousePos.set(false);
  },
  'click .imageHolder'(event, instance) {
    FlowRouter.go('/products/' + FlowRouter.getParam("sex") + "/" + FlowRouter.getParam("category") + "/" + this._id);

  }
});