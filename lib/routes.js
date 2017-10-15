FlowRouter.triggers.enter([function(context, redirect) {}]);

FlowRouter.route('/', {
  name: 'main',
  action() {
    BlazeLayout.render('mainLayout', { content: 'test'});
  }
});