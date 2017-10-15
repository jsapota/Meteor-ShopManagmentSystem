FlowRouter.triggers.enter([function(context, redirect) {}]);

FlowRouter.route('/', {
  name: 'landing',
  action() {
    BlazeLayout.render('mainLayout', { content: 'landing'});
  }
});