
Template.horizontalGallery.onCreated(function () {
    template = Template.instance();

   });





Template.horizontalGallery.helpers({

    'clothesHorizontalList': function () {
        let range = _.random(1,36 ); //Clothes.find().count()
        clothesChosen = Clothes.find({}, {limit: 4, skip: range});
        return clothesChosen;
    }
});

Template.horizontalGallery.onRendered(function () {
    return swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 4,
        loop: true,
        loopedSlides: 4
    });

});

Template.products.events( {
    'click #test':() => { console.log("Lalal") }
});
