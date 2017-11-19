Template.horizontalGallery.onCreated(function () {
    template = Template.instance();
   });





Template.horizontalGallery.helpers({
    'clothesHorizontalList': function () {
      return Clothes.find( {}, {limit: 4, skip: range});
    }
});

Template.horizontalGallery.onRendered(function () {
    console.log('Initial Swiper');
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
