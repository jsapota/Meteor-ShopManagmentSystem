Template.promotions.onCreated( function() {
    this.id = new ReactiveVar(FlowRouter.getParam("id"));
});

Template.promotions.helpers({
    'whichPromo': () => {
        promos = ["/images/promotions/starwarsPromo.jpg", "/images/promotions/promo2.png"];
        rand = _.random(0,1);
        return promos[rand];
    },
});

Template.promotions.events({
    'click .men ':() => {
        FlowRouter.go('/products/men/hoodie');
    },
    'click .women': () => {
        FlowRouter.go('/products/women/hoodie');
    }
});
