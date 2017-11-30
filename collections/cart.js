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
});

Cart.attachSchema(CartSchema);