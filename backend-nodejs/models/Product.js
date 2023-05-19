const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const mongooseLeanVirtuals = require('mongoose-lean-virtuals');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
// Mongoose Datatypes:
// https://mongoosejs.com/docs/schematypes.html

// Validator
// https://mongoosejs.com/docs/validation.html#built-in-validators

const productSchema = Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true, min: 0, default: 0 },
    discount: { type: Number, min: 0, max: 75, default: 0 },
    stock: { type: Number, min: 0, default: 0 },
    description: { type: String, required: true },
    img: { type: String },
    slug: {
      type: String,
      slug: 'name',
      unique: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
);
productSchema.pre("create", function (next) {
  this.slug = this.name.split(" ").join("-");
  next();
});
// Virtuals
productSchema.virtual('total').get(function () {
  return (this.price * (100 - this.discount)) / 100;
});

// Include virtuals

// Virtuals in console.log()
productSchema.set('toObject', { virtuals: true });
// Virtuals in JSON
productSchema.set('toJSON', { virtuals: true });

productSchema.plugin(mongooseLeanVirtuals);

const Product = model('Product', productSchema);
module.exports = Product;
