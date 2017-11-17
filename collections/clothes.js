import { Mongo } from  'meteor/mongo'
import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);
SimpleSchema.debug = true;


Clothes = new Mongo.Collection('clothes');


const ClothesSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  creator: {
    type: String,
    label: "Creator"
  },
  description: {
    type: String,
    label: "Description"
  },
  price: {
    type: Number,
    label: "Price"
  },
  type: {
    type: String,
    label: "Type",
    allowedValues: ['hoodie', 't-shirt', 'sweater', 'backpack'],
    defaultValue: "hoodie"
  },
  subType: {
    type: String,
    label: "Type",
    optional: true
  },
  XS: {
    type: Number,
    label: "Amount of XS"
  },
  SM: {
    type: Number,
    label: "Amount of S"
  },
  MD: {
    type: Number,
    label: "Amount of M"
  },
  LG: {
    type: Number,
    label: "Amount of L"
  },
  XL: {
    type: Number,
    label: "Amount of XL"
  },
  sex: {
    type: String,
    label: "Sex",
    allowedValues: ['men', 'women'],
    defaultValue: "men"
  },
  status: {
    type: String,
    label: "Status",
    allowedValues: ['available', 'out of stock', 'ordered'],
    defaultValue: "available"
  },
  photo: {
    type: String,
    label: "Photo"
  },
  photoSec: {
    type: String,
    label: "Secondary photo "
  },
  colors: {
    type: Array
  },
  'colors.$': {
    type: String,
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

Clothes.attachSchema(ClothesSchema);

export default Clothes;