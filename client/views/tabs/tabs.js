ReactiveTabs.createInterface({
  template: 'basicTabs',
  onChange: function (slug, template) {
    // This callback runs every time a tab changes.
    // The `template` instance is unique per {{#basicTabs}} block.
    // console.log('[tabs] Tab has changed! Current tab:', slug);
    // console.log('[tabs] Template instance calling onChange:', template);
  }
});

Template.Tabs.onCreated(function () {
  this.whichType = new ReactiveVar(true);
});

Template.Tabs.helpers({
  tabs: function () {
    // Every tab object MUST have a name and a slug!
    if (Session.get('category') === 'backpack')
      return [
        {
          name: 'Details',
          slug: 'details'
        },
        {
          name: 'Shipping',
          slug: 'shipping'
        }
      ];
    else
      return [
        {
          name: 'Details',
          slug: 'details'
        },
        {
          name: 'Shipping',
          slug: 'shipping'
        },
        {
          name: 'Sizes',
          slug: 'sizes',
          onRender: function (slug, template) {
            // This callback runs every time this specific tab's content renders.
            // As with `onChange`, the `template` instance is unique per block helper.
            // alert("[tabs] Things has been rendered!");
          }
        }
      ];
  },
  'whichType': () => {
    return Template.instance().whichType.get();
  },
  'inchOrCm': (value) => {
    if (Template.instance().whichType.get())
      return value;
    else
      return value * 2.5;
  },
  'activeTab': function () {
    // Use this optional helper to reactively set the active tab.
    // All you have to do is return the slug of the tab.

    // You can set this using an Iron Router param if you want--
    // or a Session variable, or any reactive value from anywhere.

    // If you don't provide an active tab, the first one is selected by default.
    // See the `advanced use` section below to learn about dynamic tabs.
    return Session.get('activeTab'); // Returns "people", "places", or "things".
  }
});

Template.Tabs.events({
  'click .btn-toCm': () => {
    Template.instance().whichType.set(!Template.instance().whichType.get());
  },
  'click .btn-toInch': () => {
    Template.instance().whichType.set(!Template.instance().whichType.get());
  }
});