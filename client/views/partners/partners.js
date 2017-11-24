Template.partners.onCreated(function () {
  template = Template.instance();
});

Template.partners.helpers({
  'partnersLogoList': () => {
    return [
      {"value": "/images/partnersLogos/glamour.png"},
      {"value": "/images/partnersLogos/zara-logo.jpg"},
      {"value": "/images/partnersLogos/vogue.png"}
    ]
  },
});