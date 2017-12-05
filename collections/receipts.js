import { Mongo } from  'meteor/mongo'
import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);
SimpleSchema.debug = true;

Reciepts = new Mongo.Collection('reciepts');
// RecieptSchema = new SimpleSchema({
//   user: {
//     type: Array
//   },
//   price: {
//     type: Number,
//     label: "Total price"
//   },
//   cartId: {
//     type: String
//   },
//   createdAt: {
//     type: Date,
//     autoValue: function() {
//       if (this.isInsert) {
//         return new Date();
//       } else if (this.isUpsert) {
//         return {$setOnInsert: new Date()};
//       } else {
//         // Prevent user from supplying their own value
//         this.unset();
//       }
//     },
//     autoform: {
//       type: "hidden"
//     }
//   },
// });
