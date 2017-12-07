Template.sales.onCreated( function() {
    this.id = new ReactiveVar(FlowRouter.getParam("id"));
});

Template.sales.helpers({
    'whichPromo': () => {
        promos = ["/images/promotions/starwarsPromo.jpg", "/images/promotions/promo2.png"];
        rand = _.random(0,1);
        return promos[rand];
    },
});

Template.promotions.events({
    'click .more ':() => {
        FlowRouter.go('/products/men/hoodie');
    },

});
