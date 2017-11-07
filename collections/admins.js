import { Mongo } from  'meteor/mongo'
import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);
SimpleSchema.debug = true;

Admins = new Mongo.Collection('admins');

AdminsSchema = new SimpleSchema({
  userID: {
    type: String
  },
});

Admins.attachSchema(AdminsSchema);