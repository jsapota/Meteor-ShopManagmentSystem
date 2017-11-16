Template.promotions.onCreated( function() {
    this.id = new ReactiveVar(FlowRouter.getParam("id"));
});

Template.promotions.helpers({
    'whichPhoto': () => {
        promos = ["public/images/promotions/starwarsPromo.jpg", "public/images/promotions/promo2.png"];
        return promos[1];
    },

});

Template.promotions.events({
    'click .menButton': function () {


    },

    'click .womenButton': function () {
        //FlowRouter.go('')

    }

});
