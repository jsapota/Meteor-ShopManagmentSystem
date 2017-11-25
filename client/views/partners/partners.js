Template.partners.onCreated(function () {
  template = Template.instance();
});

Template.partners.helpers({
  'partnersLogoList': () => {
    return [
      {"value": "/images/partnersLogos/elle.png"},
      {"value": "/images/partnersLogos/zara.png"},
      {"value": "/images/partnersLogos/vogue.png"}
    ]
  },
});