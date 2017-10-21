import { Mongo } from  'meteor/mongo'
import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);
SimpleSchema.debug = true;


Reciepts = new Mongo.Collection('reciepts');

RecieptItem = new SimpleSchema({
  id: {
    type: String
  },
  amount: {
    type: Number
  },
  price: {
    type: Number
  }
});
RecieptSchema = new SimpleSchema({
  user: {
    type: String
  },
  price: {
    type: Number,
    label: "Total price"
  },
  items: {
    type: Array
  },
  "items.$": {
    type: RecieptItem
  },
  totalPrice: {
    type: Number
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        // Prevent user from supplying their own value
        this.unset();
      }
    },
    autoform: {
      type: "hidden"
    }
  },
});
