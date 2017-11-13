import {BlazeLayout} from 'meteor/kadira:blaze-layout';
import {FlowRouter} from 'meteor/kadira:flow-router';

FlowRouter.triggers.enter([function (context, redirect) {}]);

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

FlowRouter.route('/products/:sex/:category/:id', {
  name: 'productDetails',
  action(params) {
    BlazeLayout.render('layout', {content: 'productDetails', footer: 'footer', sex: params.sex, category: params.category, _id: params._id});
  }
});

FlowRouter.route('/products/:sex/:category', {
  name: 'products',
  action(params) {
    BlazeLayout.render('layout', {content: 'products', footer: 'footer', sex: params.sex, category: params.category});
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



//Actions
// FlowRouter.route('/logout', {
//   name: 'logout',
//   action() {
//     Accounts.logout();
//     FlowRouter.go('/');
//   }
// });

// Admin
FlowRouter.route('/adminPanel', {
  name: 'adminPanel-main',
  action() {
    BlazeLayout.render('adminPanel', {content: 'adminPanel', sub: 'adminMain'});
    // if (!Meteor.userId()) {
    //   FlowRouter.go('main');
    //   BlazeLayout.render('_layout', {content: 'landing'});
    // } else {
    //   isadmin = !!Admins.findOne({
    //     userID: Meteor.userId()
    //   });
    //   let admin = Admins.findOne({
    //     userID: Meteor.userId()
    //   });
    //   console.log(Meteor.userId());
    //   console.log(admin);
    //   if (isadmin) {
    //     BlazeLayout.render('adminPanel', {content: 'adminPanel', sub: 'adminMain'});
    //   }
    //   else {
    //     FlowRouter.go('main');
    //     BlazeLayout.render('_layout', {content: 'landing'});
    //   }
    // }
  }
});


FlowRouter.route('/adminPanel/finances', {
  name: 'adminPanel-finances',
  action() {
    // if (!Meteor.userId()) {
    //   FlowRouter.go('main');
    //   BlazeLayout.render('_layout', {content: 'landing'});
    // } else {
    //   isadmin = !!Admins.findOne({
    //     userID: Meteor.userId()
    //   });
    //   if (isadmin) {
    BlazeLayout.render('adminPanel', { content: 'adminPanel', sub: 'adminFinances'});
    //   }
    //   else {
    //     FlowRouter.go('main');
    //     BlazeLayout.render('_layout', {content: 'landing'});
    //   }
    // }
  }
});


FlowRouter.route('/adminPanel/products', {
  name: 'adminPanel-products',
  action() {
    // if (!Meteor.userId()) {
    //   FlowRouter.go('main');
    //   BlazeLayout.render('_layout', {content: 'landing'});
    // } else {
    //   isadmin = !!Admins.findOne({
    //     userID: Meteor.userId()
    //   });
    //   if (isadmin) {
    BlazeLayout.render('adminPanel', {content: 'adminPanel', sub: 'adminProducts'});
    //   }
    //   else {
    //     FlowRouter.go('main');
    //     BlazeLayout.render('_layout', {content: 'landing'});
    //   }
    // }
  }
});

