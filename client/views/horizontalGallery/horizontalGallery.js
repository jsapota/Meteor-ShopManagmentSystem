
Template.horizontalGallery.onCreated(function () {
    template = Template.instance();
    this.clothSex = new ReactiveVar("men");
    this.clothType = new ReactiveVar("hoodie");
});





Template.horizontalGallery.helpers({

    'clothesList': function () {
        let range = _.random(5,34 ); //Clothes.find().count()
        console.log(range);
        let clothesChosen = Clothes.find( { type: "hoodie"}, {limit: 4, skip: range-4});
        console.log("Choosen clothes:" + clothesChosen);
        return clothesChosen;
    }
});

Template.horizontalGallery.onRendered(function () {
    console.log('Initial Swiper');
    return swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

});

Template.products.events( {
    'click #test':() => { console.log("Lalal") }
});
