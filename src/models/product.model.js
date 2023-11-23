import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  productImages: String,
  productCategory: String,
  productSize: String,
  productAmount: Number,
  productModel: String,
});

const ProductModel = mongoose.model('Product', productSchema);

export default ProductModel;
