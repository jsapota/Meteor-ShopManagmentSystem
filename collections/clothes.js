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
  price: {
    type: Number,
    label: "Price"
  },
  type: {
    type: String,
    label: "Type"
  },
  sex: {
    type: String,
    label: "Sex"
  },
  size: {
    type: String,
    label: "Size"
  },
  photo: {
    type: String,
    label: "Photo"
  },
  color: {
    type: String,
    label: "Colors"
  },
  amount: {
    type: Number,
    label: "Amount"
  },
  status: {
    type: String,
    label: "Status",
  }
});

Clothes.attachSchema(ClothesSchema);
