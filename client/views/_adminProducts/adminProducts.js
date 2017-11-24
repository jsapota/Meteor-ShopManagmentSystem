Template.adminProducts.onCreated(function () {
  this.sortBy = new ReactiveVar("");
  this.sortDesc = new ReactiveVar(1);
  let products = Clothes.find();
  this.products = new ReactiveVar(products)
});

Template.adminProducts.helpers({
  'productInBase': () => {
    return Template.instance().products.get()
  },
  activeRow: (value) => {
    let string = "" + value;
    if(Template.instance().sortBy.get() === string)
      if(Template.instance().sortDesc.get() === 1)
        return "activeRow";
      else
        return "activeRowDesc";
  },
});

Template.adminProducts.events({
  'click #name': (event) => {
    let products;
    Template.instance().sortDesc.set(-1 * Template.instance().sortDesc.get());
    if (Template.instance().sortDesc.get() === 1) {
      products = Clothes.find({}, {sort: {"name": 1}});
    } else {
      products = Clothes.find({}, {sort: {"name": -1}});
    }
    Template.instance().products.set(products);
    Template.instance().sortBy.set(event.target.id);
  },
  'click #creator': (event) => {
    let products;
    Template.instance().sortDesc.set(-1 * Template.instance().sortDesc.get());
    if (Template.instance().sortDesc.get() === 1) {
      products = Clothes.find({}, {sort: {"creator": 1}});
    } else {
      products = Clothes.find({}, {sort: {"creator": -1}});
    }
    Template.instance().products.set(products);
    Template.instance().sortBy.set(event.target.id);
  },
  'click #type': (event) => {
    let products;
    Template.instance().sortDesc.set(-1 * Template.instance().sortDesc.get());
    if (Template.instance().sortDesc.get() === 1) {
      products = Clothes.find({}, {sort: {"type": 1}});
    } else {
      products = Clothes.find({}, {sort: {"type": -1}});
    }
    Template.instance().products.set(products);
    Template.instance().sortBy.set(event.target.id);
  },
  'click #price': (event) => {
    let products;
    Template.instance().sortDesc.set(-1 * Template.instance().sortDesc.get());
    if (Template.instance().sortDesc.get() === 1) {
      products = Clothes.find({}, {sort: {"price": 1}});
    } else {
      products = Clothes.find({}, {sort: {"price": -1}});
    }
    Template.instance().products.set(products);
    Template.instance().sortBy.set(event.target.id);
  },
  'click #status': (event) => {
    let products;
    Template.instance().sortDesc.set(-1 * Template.instance().sortDesc.get());
    if (Template.instance().sortDesc.get() === 1) {
      products = Clothes.find({}, {sort: {"status": 1}});
    } else {
      products = Clothes.find({}, {sort: {"status": -1}});
    }
    Template.instance().products.set(products);
    Template.instance().sortBy.set(event.target.id);
  },
  'click #sex': (event) => {
    let products;
    Template.instance().sortDesc.set(-1 * Template.instance().sortDesc.get());
    if (Template.instance().sortDesc.get() === 1) {
      products = Clothes.find({}, {sort: {"sex": 1}});
    } else {
      products = Clothes.find({}, {sort: {"sex": -1}});
    }
    Template.instance().products.set(products);
    Template.instance().sortBy.set(event.target.id);
  },
  'click #XS': (event) => {
    let products;
    Template.instance().sortDesc.set(-1 * Template.instance().sortDesc.get());
    if (Template.instance().sortDesc.get() === 1) {
      products = Clothes.find({}, {sort: {"XS": 1}});
    } else {
      products = Clothes.find({}, {sort: {"XS": -1}});
    }
    Template.instance().products.set(products);
    Template.instance().sortBy.set(event.target.id);
  },
  'click #SM': (event) => {
    let products;
    Template.instance().sortDesc.set(-1 * Template.instance().sortDesc.get());
    if (Template.instance().sortDesc.get() === 1) {
      products = Clothes.find({}, {sort: {"SM": 1}});
    } else {
      products = Clothes.find({}, {sort: {"SM": -1}});
    }
    Template.instance().products.set(products);
    Template.instance().sortBy.set(event.target.id);
  },
  'click #MD': (event) => {
    let products;
    Template.instance().sortDesc.set(-1 * Template.instance().sortDesc.get());
    if (Template.instance().sortDesc.get() === 1) {
      products = Clothes.find({}, {sort: {"MD": 1}});
    } else {
      products = Clothes.find({}, {sort: {"MD": -1}});
    }
    Template.instance().products.set(products);
    Template.instance().sortBy.set(event.target.id);
  },
  'click #LG': (event) => {
    let products;
    Template.instance().sortDesc.set(-1 * Template.instance().sortDesc.get());
    if (Template.instance().sortDesc.get() === 1) {
      products = Clothes.find({}, {sort: {"LG": 1}});
    } else {
      products = Clothes.find({}, {sort: {"LG": -1}});
    }
    Template.instance().products.set(products);
    Template.instance().sortBy.set(event.target.id);
  },
  'click #XL': (event) => {
    let products;
    Template.instance().sortDesc.set(-1 * Template.instance().sortDesc.get());
    if (Template.instance().sortDesc.get() === 1) {
      products = Clothes.find({}, {sort: {"XL": 1}});
    } else {
      products = Clothes.find({}, {sort: {"XL": -1}});
    }
    Template.instance().products.set(products);
    Template.instance().sortBy.set(event.target.id);
  }
});