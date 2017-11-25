Template.horizontalGallery.onCreated(function () {
    template = Template.instance();
   });

Template.horizontalGallery.helpers({
    'clothesHorizontalList': function () {
      let range = _.random(1,35 );
      return Clothes.find( {}, {limit: 6, skip: range});
    }
});

Template.horizontalGallery.onRendered(function () {
    console.log('Initial Swiper');
    return swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        loop: true,
        loopedSlides: 6,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }

    });

});

Template.products.events( {
    'click #test':() => { console.log("Lalal") }
});
