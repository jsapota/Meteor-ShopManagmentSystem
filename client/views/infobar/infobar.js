Template.infobar.onCreated( function() {
    this.id = new ReactiveVar(FlowRouter.getParam("id"));
});

Template.infobar.helpers({
    'whichPhoto': () => {
        promos = ["public/images/promotions/starwarsPromo.jpg", "public/images/promotions/promo2.png"];
        return promos[1];
    },

});

Template.infobar.events({
    'click .Bsller':() => {
        FlowRouter.go('/products/men/hoodie');
    },
    'click .MenBsller':() => {
        FlowRouter.go('/products/men/hoodie');
    },
    'click .WmBsller':() => {
        FlowRouter.go('/products/women/hoodie');
    },

});
