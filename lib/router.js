import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { FlowRouter } from 'meteor/kadira:flow-router';

FlowRouter.triggers.enter([function(context, redirect) {}]);

FlowRouter.route('/', {
  action() {
    BlazeLayout.render('layout', { content: 'landing'});
  }
});

FlowRouter.route('/addClothes', {
  action() {
    BlazeLayout.render('layout', { content: 'addClothes'});
  }
});


