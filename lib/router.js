import {BlazeLayout} from 'meteor/kadira:blaze-layout';
import {FlowRouter} from 'meteor/kadira:flow-router';

FlowRouter.triggers.enter([function (context, redirect) {
}]);

FlowRouter.route('/', {
  action() {
    BlazeLayout.render('layout', {content: 'landing', footer: 'footer'});
  }
});

FlowRouter.route('/addClothes', {
  action() {
    BlazeLayout.render('layout', {content: 'addClothes', footer: 'footer'});
  }
});

FlowRouter.route('/products/:sex', {
  name: 'products',
  action(params, queryParams) {
    BlazeLayout.render('layout', {content: 'products', footer: 'footer', sex: params.sex, category: queryParams.category});
  }
});

FlowRouter.route('/sales', {
  action() {
    BlazeLayout.render('layout', {content: 'landing', footer: 'footer'});
  }
});

FlowRouter.route('/info', {
  action() {
    BlazeLayout.render('layout', {content: 'landing', footer: 'footer'});
  }
});

FlowRouter.route('/cart', {
  action() {
    BlazeLayout.render('layout', {content: 'landing', footer: 'footer'});
  }
});

FlowRouter.route('/signin', {
  action() {
    BlazeLayout.render('layout', {content: 'landing', footer: 'footer'});
  }
});