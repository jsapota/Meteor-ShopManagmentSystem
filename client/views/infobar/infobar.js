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
    'click .menButton': function () {


    },

    'click .womenButton': function () {
        //FlowRouter.go('')

    }

});
