import { Mongo } from  'meteor/mongo'
import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);
SimpleSchema.debug = true;

Cart = new Mongo.Collection('cart');

CartItem = new SimpleSchema({
  id: {
    type: String
  },
  amount: {
    type: Number
  },
  size: {
    type: String
  }
});
CartDetails = new SimpleSchema({
  name: { type: String , optional: true},
  surname: { type: String , optional: true},
  street: { type: String , optional: true},
  city: { type: String , optional: true},
  postalCode: { type: String , optional: true},
  country: { type: String , optional: true},
  number: { type: String , optional: true}
});

CartSchema = new SimpleSchema({
  user: {
    type: String
  },
  price: {
    type: Number,
    label: "Total price",
    optional: true
  },
  items: {
    type: Array
  },
  "items.$": {
    type: CartItem
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();
      }
    },
    autoform: {
      type: "hidden"
    }
  },
  state: {
    type: String,
    optional: true,
    autoValue: function() {
      if (this.isInsert) {
        return "";
      }
    }
  },
  orderDetails: {
    type: Array,
    optional: true,
    autoValue: function() {
      if (this.isInsert) {
        return [];
      }
    }
  },
  "orderDetails.$": {
    type: CartDetails,
    optional: true
  }
  // "orderDetails.$.name": {
  //   type: String
  // },
  // "orderDetails.$.surname": {
  //   type: String
  // },
  // "orderDetails.$.street": {
  //   type: String
  // },
  // "orderDetails.$.postalCode": {
  //   type: String
  // },
  // "orderDetails.$.city": {
  //   type: String
  // },
  // "orderDetails.$.country": {
  //   type: String
  // },
  // "orderDetails.$.number": {
  //   type: String
  // }
});

Cart.attachSchema(CartSchema);